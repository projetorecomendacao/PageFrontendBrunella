import { Component, OnInit } from '@angular/core';
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
  

  constructor(private dao: DAOService, private form: FormBuilder, private pageService: PageService, private router: Router, private checaCampo: ChecaCampo) {
    dao.getObjects(REST_URL_PARTICIPANTS).subscribe((data: any) => {
      for (const participant of data)
        this.participants.push(new Participant(participant));
    });
  }

  ngOnInit() {
  }

  addParticipant() {
    this.dao.postObject(REST_URL_PARTICIPANTS, this.addParticipantForm.getRawValue()).subscribe((data: any) => {
      this.participants.push(new Participant(data));
    });
    this.addParticipantForm.reset();
  }

  goToParticipant(id: number) {
    this.pageService.reset();
    for(var i=0; i< this.participants.length; i++){
      if (this.participants[i].getId() == id ) {
        this.p = this.participants[i];
      }
    }
    console.log(this.p);
    this.pageService.participant = this.p;
    this.router.navigate(['private/participant']).then();
  }

    // método que verifica a situação dos campos do form
    mudou(campo: string): string{ 
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
      console.log('anos ' + years + '  dif: '  + diff  + 'Hoje: ' + now.getTime()  + '  Niver: ' + past.getTime());
      this.addParticipantForm.get('p05_age').setValue(years);
    }

    //Verifica se a idade do participante é compatível
    checaIdade(){
      console.log(this.addParticipantForm.get('p05_age').valid)
      if (!this.addParticipantForm.get('p04_birth_date').pristine && !this.addParticipantForm.get('p05_age').valid){
        return true;
      }
      return false;
    }
}
