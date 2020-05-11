import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';

@Component({
  selector: 'app-cardiovascular-factors',
  templateUrl: './cardiovascular-factors.component.html'
})
export class CardiovascularFactorsComponent implements OnInit {

  @Input() pageForm: FormGroup;

  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  private errado: boolean = false;
  private branco: boolean = true;

  //dominio e dimensão
  private dimensao: string = 'cardiovascularFactorsForm';
  private dominio: string = 'biologicalAspectsForm'; 
  
  //Pontuação máxima
  private max_score : number = 9;
  //Pontos da dimensão
  private score : number = 0;
  //Campos que são válidos para contar o número de acertos
  vetConta: string[] = ['q33_dcv_familiar_history','q34_hypertension','q35_uncontrolled_diabetes',
                        'q36_cholesterol','q37_smoker','q38_practice_150_minutes_exercises',
                        'q39_healthy_eating','q40_alcohol_Ingested_last_week','q41_bmi_obesity'];
  //vetor com os gabaritos dos acertos
  vetGabarito: string[] = ['N','N','N','N','N','S','S','N','N'];
  
  //O serviço checa campo retorna as imanges de verificação dos campos 
  constructor(private checaCampo : ChecaCampo) { }
  
  //contagem dos campos que combinam para calcular o score
  conta_certo(): number{
    this.score = 0;
    for (let i=0;  i < this.max_score; i++){
      if (this.vetGabarito[i] == this.pageForm.get(this.dominio).get(this.dimensao).get(this.vetConta[i]).value){
        this.score++;
      }
    }
    this.pageForm.get(this.dominio).get(this.dimensao).get('score').setValue(this.score);
    return this.score;
  }
  
    ngOnInit():void {}
  
    // método que verifica a situação dos campos do form
    mudou(campo: string): string{ 
      var volta: string = this.checaCampo.inicio();
      if(!this.pageForm.get(this.dominio).get(this.dimensao).get(campo).pristine){
        volta = this.checaCampo.checa(this.pageForm.get(this.dominio).get(this.dimensao).get(campo).valid);
      }
      return volta;
    }

    // método que verifica se o form está válido
    formValido(): Boolean{
      this.branco = false;
      this.errado = false;
      for (var caca in this.pageForm.get(this.dominio).get(this.dimensao).value){
        if(!this.pageForm.get(this.dominio).get(this.dimensao).get(caca).valid){
          if(this.pageForm.get(this.dominio).get(this.dimensao).get(caca).pristine){
            this.branco = true;
          } else {
            this.errado = true;
          }
        }
      }
      this.acerta();
      return this.pageForm.get(this.dominio).get(this.dimensao).valid;
    } 

   //Calcula o IMC
  calculaIMC():number{
    var peso =  this.pageForm.get('participantFormForm').get('p20_weight').value;
    var altura = this.pageForm.get('participantFormForm').get('p20_height').value;
    var imc = peso / (altura*altura);
    if (imc >= 27) {
      this.pageForm.get(this.dominio).get(this.dimensao).get('q41_bmi_obesity').setValue('S');
    } else {
      this.pageForm.get(this.dominio).get(this.dimensao).get('q41_bmi_obesity').setValue('N');
    }
    return imc;
  }

  acerta(){
    var q34= this.pageForm.get(this.dominio).get(this.dimensao).get('q34_hypertension_unknow').value; 
    var q35= this.pageForm.get(this.dominio).get(this.dimensao).get('q35_unknown_value_glycemia').value; 
    var q36= this.pageForm.get(this.dominio).get(this.dimensao).get('q36_unknown_value_ct_hdl').value; 

    if (q34 == 'S'){
      this.pageForm.get(this.dominio).get(this.dimensao).get('q34_hypertension').setValue('S');
    }

    if (q35 == 'S'){
      this.pageForm.get(this.dominio).get(this.dimensao).get('q35_uncontrolled_diabetes').setValue('S');
    }

    if (q36 == 'S'){
      this.pageForm.get(this.dominio).get(this.dimensao).get('q36_cholesterol').setValue('S');
    }
  }

  notGlicemia():boolean{
    var pa= this.pageForm.get(this.dominio).get(this.dimensao).get('q35_unknown_value_glycemia').value; 
    if (pa == 'S'){
      this.pageForm.get(this.dominio).get(this.dimensao).get('q35_uncontrolled_diabetes').setValue('S');
      return true;
    }
    return false;
  }

  submit() {
    for (var caca in this.pageForm.get(this.dominio).get(this.dimensao).value){
      this.pageForm.get(this.dominio).get(this.dimensao).get(caca).markAsTouched;
      this.pageForm.get(this.dominio).get(this.dimensao).get(caca).updateValueAndValidity;
    }
  }
}