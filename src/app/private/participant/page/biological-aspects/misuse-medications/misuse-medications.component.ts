import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';


@Component({
  selector: 'app-misuse-medications',
  templateUrl: './misuse-medications.component.html'
})
export class MisuseMedicationsComponent implements OnInit {

  @Input() pageForm: FormGroup;

  //Lista de doenças
  public doencas = [
    {letra: 'a', questao: 'Doença do coração (angina, infarto ou ataque cardíaco)?', campo: 'q42_diseases_last_5_years_a'}, 
    {letra: 'b', questao: 'Pressão alta/ hipertensão?', campo: 'q42_diseases_last_5_years_b'},
    {letra: 'c', questao: 'Derrame/AVC/Isquemia?', campo: 'q42_diseases_last_5_years_c'},
    {letra: 'd', questao: 'Diabetes Mellitus?', campo: 'q42_diseases_last_5_years_d'}, 
    {letra: 'e', questao: 'Tumor maligno/ Câncer?', campo: 'q42_diseases_last_5_years_e'},
    {letra: 'f', questao: 'Asma/Bronquite/Enfisema?', campo: 'q42_diseases_last_5_years_f'},
    {letra: 'g', questao: 'Osteoporose?', campo: 'q42_diseases_last_5_years_g'},
    {letra: 'h', questao: 'Reumatismo?', campo: 'q42_diseases_last_5_years_h'},
    {letra: 'i', questao: 'Tendinite?', campo: 'q42_diseases_last_5_years_i'},
    {letra: 'j', questao: 'Problemas de circulação?', campo: 'q42_diseases_last_5_years_j'},
    {letra: 'k', questao: 'Depressão?', campo: 'q42_diseases_last_5_years_k'} 
    ];

  public problemas = [
    {letra: 'a',  questao: ' Dor de cabeça? ',  campo:  'q43_health_problems_a'},
    {letra: 'b',  questao: ' Dor nas costas ou em outra parte do corpo?',  campo:  'q43_health_problems_b'},
    {letra: 'c',  questao: ' Alergia? ',  campo:  'q43_health_problems_c'},
    {letra: 'd',  questao: ' Problema emocional? ',  campo:  'q43_health_problems_d'},
    {letra: 'e',  questao: ' Tontura? ',  campo:  'q43_health_problems_e'},
    {letra: 'f',  questao: ' Dificuldades para dormir? ',  campo:  'q43_health_problems_f'},
    {letra: 'g',  questao: ' Incontinência urinária/perda de urina ',  campo:  'q43_health_problems_g'},
  ];
    
  
  
  
  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  public errado: boolean = false;
  public branco: boolean = true;

  //dominio e dimensão
  private dimensao: string = 'misuseMedicationsForm';
  private dominio: string = 'biologicalAspectsForm'; 
  
  //Pontuação máxima
  public max_score : number = 9;
  //Pontos da dimensão
  public score : number = 0;
  //Campos que são válidos para contar o número de acertos
  vetConta: string[] = ['q46_medicines_increase','q47_know_medicines','q48_medications_prescribed',
                        'q49_medicine_medical_advice','q50_already_stopped_medicines', 'q51_self_medication',
                        'q52_inappropriate_medication','q53_risk_adverse_reaction','q45_medicines']

  vetGabarito: string[] = ['N','S','S','S','N','N','N','N','N'];
  
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
      return this.pageForm.get(this.dominio).get(this.dimensao).valid;
    } 

  submit() {
    for (var caca in this.pageForm.get(this.dominio).get(this.dimensao).value){
      this.pageForm.get(this.dominio).get(this.dimensao).get(caca).markAsTouched;
      this.pageForm.get(this.dominio).get(this.dimensao).get(caca).updateValueAndValidity;
    }
  }
}