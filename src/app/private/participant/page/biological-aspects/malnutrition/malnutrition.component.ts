import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';


@Component({
  selector: 'app-malnutrition',
  templateUrl: './malnutrition.component.html'
})

export class MalnutritionComponent implements OnInit {

  @Input() pageForm: FormGroup;
  
  //variável que verifica se houver perda de peso
  public perdeuPeso : boolean;

  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  public errado: boolean = false;
  public branco: boolean = true;

  //dominio e dimensão
  private dimensao: string = 'malnutritionForm';
  private dominio: string = 'biologicalAspectsForm'; 
  
  //Pontuação máxima
  public max_score : number = 7;
  //Pontos da dimensão
  private score : number = 0;
  //Campos que são válidos para contar o número de acertos
  vetConta: string[] = ['q26_yourself_malnourished','q27_chewing_mouth_problems','q28_less3_meal_daily',
                        'q29_decreases_amount_food','q30_lost_weight_no_reason', 'q31_stress_illness_hospitalization',
                        'q32_bmi_less22']

  vetGabarito: string[] = ['N','N','N','N','N','N','N'];
  
  //O serviço checa campo retorna as imanges de verificação dos campos 
  constructor(private checaCampo : ChecaCampo) { 
    
  }
  
  //contagem dos campos que combinam para calcular o score
  conta_certo(): number{
    //Verifica se houve stress, internação ou doença nos últimos 3 meses
    var a = this.pageForm.get(this.dominio).get(this.dimensao).get('q31_stress').value;
    var b = this.pageForm.get(this.dominio).get(this.dimensao).get('q31_illnes').value;
    var c = this.pageForm.get(this.dominio).get(this.dimensao).get('q31_hospital').value;
    if( a=='S' || b== 'S' || c == 'S'){
      this.pageForm.get(this.dominio).get(this.dimensao).get('q31_stress_illness_hospitalization').setValue('S');
    } else {
      this.pageForm.get(this.dominio).get(this.dimensao).get('q31_stress_illness_hospitalization').setValue('N');
    }

    //Verifica se houve perda de peso
    if(this.pageForm.get(this.dominio).get(this.dimensao).get('q30_lost_weight_no_reason').value == 'N'){
      this.pageForm.get(this.dominio).get(this.dimensao).get('q30_lost_weight_no_reason_amount').setValue('nda');  
      this.perdeuPeso = false;      
    } else {
      this.perdeuPeso = true;
    }


    this.score = 0;
    for (let i=0;  i < this.max_score; i++){
      if (this.vetGabarito[i] == this.pageForm.get(this.dominio).get(this.dimensao).get(this.vetConta[i]).value){
        this.score++;
      }
    }
    this.pageForm.get(this.dominio).get(this.dimensao).get('score').setValue(this.score);
    return this.score;
  }
  


  ngOnInit():void {
    this.formValido();
    this.conta_certo();
  }

  // o método mudou verifica se um campo foi atualizado
  mudou(campo: string){ 
    var volta: string = this.checaCampo.inicio();
    if (this.pageForm.get(this.dominio).get(this.dimensao).get(campo).valid){
      volta = this.checaCampo.checa(this.pageForm.get(this.dominio).get(this.dimensao).get(campo).valid);
    } else {
      if(!this.pageForm.get(this.dominio).get(this.dimensao).get(campo).pristine){
        volta = this.checaCampo.checa(this.pageForm.get(this.dominio).get(this.dimensao).get(campo).valid);
      }
    }
    return volta;
  }

 //verifica se o peso e a quantidade de peso perdido são correspondentes
  checaPeso():boolean {     
    return !(this.pageForm.get(this.dominio).get(this.dimensao).get('q30_lost_weight_no_reason').value == 'S' &&
    this.pageForm.get(this.dominio).get(this.dimensao).get('q30_lost_weight_no_reason_amount').value == 'nda');
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
  
    //verifica se houver perda de peso e o amount é diferente de nada
    if (! this.checaPeso()){
      this.errado=true;
      return false;
    }

    return this.pageForm.get(this.dominio).get(this.dimensao).valid;
  }

  fperdeuPeso():Boolean{
    return this.perdeuPeso;
  }


  //Calcula o IMC
  calculaIMC():number{
    var peso =  this.pageForm.get('participantFormForm').get('p20_weight').value;
    var altura = this.pageForm.get('participantFormForm').get('p20_height').value;
    var imc = peso / (altura*altura);
    if (imc < 22) {
      this.pageForm.get(this.dominio).get(this.dimensao).get('q32_bmi_less22').setValue('S');
    } else {
      this.pageForm.get(this.dominio).get(this.dimensao).get('q32_bmi_less22').setValue('N');
    }
    return imc;
  }  

  submit() {
    for (var caca in this.pageForm.get(this.dominio).get(this.dimensao).value){
      this.pageForm.get(this.dominio).get(this.dimensao).get(caca).markAsTouched;
      this.pageForm.get(this.dominio).get(this.dimensao).get(caca).updateValueAndValidity;
    }
  }
}