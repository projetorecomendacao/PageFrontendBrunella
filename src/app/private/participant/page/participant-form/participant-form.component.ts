import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';
import { Participant } from 'src/app/shared/models/participant.model';
import { PageService } from '../page.service';


@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html'
})
export class ParticipantFormComponent implements OnInit {

  @Input() pageForm: FormGroup;
  participant: Participant;


  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  public errado: boolean = false;
  public branco: boolean = true;


  //dominio e dimensão
  private dimensao: string = '';
  private dominio: string = 'participantFormForm'; 

  // método que verifica a situação dos campos do form
  mudou(campo: string): string{ 
    var volta: string = this.checaCampo.inicio();
    if(this.pageForm.get(this.dominio).get(campo).valid){
      volta=this.checaCampo.checa(true);
    } else {
      if(!this.pageForm.get(this.dominio).get(campo).pristine){
        volta = this.checaCampo.checa(false);
      }
    }
    return volta;
  }

  // método que verifica se o form está válido
  formValido(): Boolean{
    this.branco = false;
    this.errado = false;
    for (var caca in this.pageForm.get(this.dominio).value){
      if(!this.pageForm.get(this.dominio).get(caca).valid){
        if(this.pageForm.get(this.dominio).get(caca).pristine){
          this.branco = true;
        } else {
          this.errado = true;
        }
      }
    }
    return this.pageForm.get(this.dominio).valid;
  }

  calculaIMC(){
    let peso: number=1;
    let altura: number=1;
    if (this.pageForm.get(this.dominio).get('p20_weight').valid){
      peso = this.pageForm.get(this.dominio).get('p20_weight').value;
    }
    if (this.pageForm.get(this.dominio).get('p20_height').valid){
      altura = this.pageForm.get(this.dominio).get('p20_height').value;
    }
    let IMC = peso / (altura * altura);
    this.pageForm.get(this.dominio).get('p20_IMC').setValue(IMC);
  }

  constructor(private checaCampo: ChecaCampo, private pageService : PageService){
    
  }

  ngOnInit() { 
    this.participant = this.pageService.participant;
    this.pageForm.get(this.dominio).get('p03_communication').setValue(this.participant.getCommunication());
    this.pageForm.get(this.dominio).get('p02_address').setValue(this.participant.getAddress());
    this.formValido();
    this.calculaIMC();
    console.log(this.pageForm.get(this.dominio).value);
  }

  submit() { 
    for (var caca in this.pageForm.get('cabecaPageForm').value){
      this.pageForm.get('cabecaPageForm').get(caca).markAsTouched;
      this.pageForm.get('cabecaPageForm').get(caca).updateValueAndValidity;
    }
  }
}