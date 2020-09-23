import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Participant } from '../../shared/models/participant.model';
import { DAOService } from '../../shared/dao.service';
import { REST_URL_PARTICIPANTS } from '../../shared/REST_API_URLs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PageService} from '../participant/page/page.service';
import {Router} from '@angular/router';
import { ChecaCampo } from 'src/app/shared/checa-campo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})


export class HomeComponent implements OnInit {
  participant_pos : number = -1;
  name = "Teste";
  private p: Participant;
  public participants: Participant[] = new Array<Participant>();
  public addParticipantForm: FormGroup = this.form.group({
    p00_email: ['', Validators.required],
    p01_name: ['', Validators.required],
    p02_address: ['', Validators.required],
    p03_communication: ['', Validators.required],
    p04_birth_date: ['', Validators.required],
    p05_age: ['', [Validators.required,Validators.max(120),Validators.min(18)]],
    p06_gender: ['', Validators.required],
    p20_profile_photo_URL: [null]
  });

    // variáveis booleans que controlam as mensagens de certo e errado no final do form
    public errado: boolean = false;
    public branco: boolean = true;
  
  //Pega a lista de participantes no banco de dados
  constructor(private dao: DAOService, private form: FormBuilder, private pageService: PageService, private router: Router, private checaCampo: ChecaCampo) {
    dao.getObjects(REST_URL_PARTICIPANTS).subscribe((data: any) => {
      for (const participant of data)
        this.participants.push(new Participant(participant));
    });
  }

  ngOnInit() {
  }

  //Salva o participante no banco de dados e atualiza a lista
  addParticipant() {
    if (this.participant_pos == -1) {
      this.dao.postObject(REST_URL_PARTICIPANTS, this.addParticipantForm.getRawValue()).subscribe((data: any) => {
        this.participants.push(new Participant(data));
      }); 
    } else {
      this.dao.putObject(REST_URL_PARTICIPANTS, this.addParticipantForm.getRawValue(),this.p.getId().toString()).subscribe((data: any) => {
        this.participants[this.participant_pos]= new Participant(data);
        this.participant_pos = -1;
      });  
    }
    this.addParticipantForm.reset();
  }

  //Vai para os pages do participante selecionado..
  goToParticipant(id: number) {
    this.pageService.reset();
    for(var i=0; i< this.participants.length; i++){
      if (this.participants[i].getId() == id ) {
        this.p = this.participants[i];
      }
    }
    //console.log(this.p);
    this.pageService.participant = this.p;
    this.router.navigate(['private/participant/']).then();
  }

    // método que verifica a situação dos campos do form
    mudou(campo: string): string{ 
      if (this.addParticipantForm.get(campo).valid)
        return this.checaCampo.checa(true);

      var volta: string = this.checaCampo.inicio();
      if(!this.addParticipantForm.get(campo).pristine){
        volta = this.checaCampo.checa(this.addParticipantForm.get(campo).valid);
      }
      return volta;
    }
  
    // método que verifica se o form está válido
    formValido(): Boolean{
      this.branco = false;
      this.errado = false;
      for (var caca in this.addParticipantForm.value){
        if(!this.addParticipantForm.get(caca).valid){
          if(this.addParticipantForm.get(caca).pristine){
            this.branco = true;
          } else {
            this.errado = true;
          }
        }
      }
      return this.addParticipantForm.valid;
    }

    //calcula a idade do participante
    calculaIdade(){
      const now = new Date(); // Data de hoje
      const past = new Date(this.addParticipantForm.get('p04_birth_date').value); // Outra data no passado
      const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
      //console.log('anos ' + years + '  dif: '  + diff  + 'Hoje: ' + now.getTime()  + '  Niver: ' + past.getTime());
      this.addParticipantForm.get('p05_age').setValue(years);
    }

    //Verifica se a idade do participante é compatível
    checaIdade(){
      //console.log(this.addParticipantForm.get('p05_age').valid)
      if (!this.addParticipantForm.get('p04_birth_date').pristine && !this.addParticipantForm.get('p05_age').valid){
        return true;
      }
      return false;
    }

    //Alteração do participante
    
    alterar (id : number){
      for(var i=0; i< this.participants.length; i++){
        if (this.participants[i].getId() == id ) {
          this.p = this.participants[i];
          this.participant_pos = i;
          this.addParticipantForm.get('p00_email').setValue(this.p.getEmail()); 
          this.addParticipantForm.get('p01_name').setValue(this.p.getName()); 
          this.addParticipantForm.get('p02_address').setValue(this.p.getAddress()); 
          this.addParticipantForm.get('p03_communication').setValue(this.p.getCommunication()); 
          this.addParticipantForm.get('p04_birth_date').setValue(this.p.getBirth_date()); 
          this.addParticipantForm.get('p05_age').setValue(this.p.getAge()); 
          this.addParticipantForm.get('p06_gender').setValue(this.p.getGender()); 
          this.addParticipantForm.get('p20_profile_photo_URL').setValue(this.p.getProfile_photo_URL()); 
          break;
        }
      }
    }

    cancelar(){
      this.addParticipantForm.reset();
      this.participant_pos = -1;
    }
}
