import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';
import { Participant } from 'src/app/shared/models/participant.model';

@Component({
  selector: 'app-falls',
  templateUrl: './falls.component.html'
})
export class FallsComponent implements OnInit {

  @Input() pageForm: FormGroup;
  @Input() participant: Participant;


  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  public errado: boolean = false;
  public branco: boolean = true;

  //dominio e dimensão
  private dimensao: string = 'fallsForm';
  private dominio: string = 'multidimensionalAspectsForm'; 
  
  //Pontuação máxima
  public max_score : number = 15;
  //Pontos da dimensão
  public score : number = 0;
  //Campos que são válidos para contar o número de acertos
  vetConta: string[] = ['q87_falls_last_year', 'q88_fractures_due_to_falls', 'q90_strength_mmii',
  'q91_equilibrium', 'q92_older_than75', 'q93_female',
  'q94_cognitive_alterations', 'q95_av_ds_commitment', 'q96_visual_deficit',
  'q97_domestic_risks', 'q98_behavior_risk', 'q99_inactivity',
  'q100_prior_ave', 'q101_psychotropic_medications_use', 'q102_has_diseases']

  vetGabarito: string[] = ['N','N','S','S','N','N','N','N','N','N','N','N','N','N','N'];
  
  //O serviço checa campo retorna as imanges de verificação dos campos 
  constructor(private checaCampo : ChecaCampo) { }
  
  //contagem dos campos que combinam para calcular o score
  conta_certo(): number{
    this.enche();
    this.score = 0;
    for (let i=0;  i < this.max_score; i++){
      if (this.vetGabarito[i] == this.pageForm.get(this.dominio).get(this.dimensao).get(this.vetConta[i]).value){
        this.score++;
      }
    }
    this.pageForm.get(this.dominio).get(this.dimensao).get('score').setValue(this.score);
    return this.score;
  }
  
    ngOnInit():void{
    }

    enche(): void
    {
      if (this.pageForm.get('socialAspectsForm').valid){
        // idade
        if(this.participant.getAge() > 75){
          this.pageForm.get(this.dominio).get(this.dimensao).get('q92_older_than75').setValue('S');
        } else {
          this.pageForm.get(this.dominio).get(this.dimensao).get('q92_older_than75').setValue('N');
        }

        // sexo
        if(this.participant.getGender() == 'F'){
          this.pageForm.get(this.dominio).get(this.dimensao).get('q93_female').setValue('S');
        } else {
          this.pageForm.get(this.dominio).get(this.dimensao).get('q93_female').setValue('N');
        }

        //capacidade funcional
        if (this.pageForm.get('biologicalAspectsForm').get('functionalDisabilityForm').get('score').value > 4) {
          this.pageForm.get(this.dominio).get(this.dimensao).get('q95_av_ds_commitment').setValue('S');
        } else {
          this.pageForm.get(this.dominio).get(this.dimensao).get('q95_av_ds_commitment').setValue('N');
        }

        //Déficit visual
        if (this.pageForm.get('biologicalAspectsForm').get('sensoryDeficitForm').get('q15_vision_problems').value == 'S') {
          this.pageForm.get(this.dominio).get(this.dimensao).get('q96_visual_deficit').setValue('S');
        } else {
          this.pageForm.get(this.dominio).get(this.dimensao).get('q96_visual_deficit').setValue('N');
        }
        
        //Riscos domésticos
        if (this.pageForm.get('socialAspectsForm').get('environmentalProblemsForm').get('domesticRisk').value < 7) {
          this.pageForm.get(this.dominio).get(this.dimensao).get('q97_domestic_risks').setValue('S');
        } else {
          this.pageForm.get(this.dominio).get(this.dimensao).get('q97_domestic_risks').setValue('N');
        }

        //Riscos comportamentais
        if (this.pageForm.get('socialAspectsForm').get('environmentalProblemsForm').get('behaviorRisk').value < 3) {
          this.pageForm.get(this.dominio).get(this.dimensao).get('q98_behavior_risk').setValue('S');
        } else {
          this.pageForm.get(this.dominio).get(this.dimensao).get('q98_behavior_risk').setValue('N');
        }

        //Inatividade
        if (this.pageForm.get('biologicalAspectsForm').get('cardiovascularFactorsForm').get('q38_practice_150_minutes_exercises').value == 'N') {
          this.pageForm.get(this.dominio).get(this.dimensao).get('q99_inactivity').setValue('S');
        } else {
          this.pageForm.get(this.dominio).get(this.dimensao).get('q99_inactivity').setValue('N');
        }

        //AVC
        if (this.pageForm.get('biologicalAspectsForm').get('misuseMedicationsForm').get('q42_diseases_last_5_years_c').value == 'S') {
          this.pageForm.get(this.dominio).get(this.dimensao).get('q100_prior_ave').setValue('S');
        } else {
          this.pageForm.get(this.dominio).get(this.dimensao).get('q100_prior_ave').setValue('N');
        }
      }
    }


    // método que verifica a situação dos campos do form
    mudou(campo: string): string{ 
      var volta: string = this.checaCampo.inicio();
      if(this.pageForm.get(this.dominio).get(this.dimensao).get(campo).valid){
        volta = this.checaCampo.checa(true);
      } else {
        if(!this.pageForm.get(this.dominio).get(this.dimensao).get(campo).pristine){
          volta = this.checaCampo.checa(false);
        }
      }
      //questão de quedas
      if (campo == 'q87_falls_last_year'){
        if(!this.pageForm.get(this.dominio).get(this.dimensao).get(campo).pristine){
          if(this.pageForm.get(this.dominio).get(this.dimensao).get(campo).value == 'N'){
            this.pageForm.get(this.dominio).get(this.dimensao).get('q87_amount_falls_last_year').setValue(0);
            this.pageForm.get(this.dominio).get(this.dimensao).get('q87_amount_falls_last_year').disable;
            this.pageForm.get(this.dominio).get(this.dimensao).get('q88_fractures_due_to_falls').setValue('N');
            this.pageForm.get(this.dominio).get(this.dimensao).get('q88_fractures_due_to_falls').disable;
            this.pageForm.get(this.dominio).get(this.dimensao).get('q88_fractures_due_to_falls_list').setValue('nda');
            this.pageForm.get(this.dominio).get(this.dimensao).get('q88_fractures_due_to_falls_list').disable;
            this.pageForm.get(this.dominio).get(this.dimensao).get('q89_fractures_list').setValue('nda');
            this.pageForm.get(this.dominio).get(this.dimensao).get('q87_falls_last_year').disable;
          } else {
            this.pageForm.get(this.dominio).get(this.dimensao).get('q87_amount_falls_last_year').enable;
            this.pageForm.get(this.dominio).get(this.dimensao).get('q87_amount_falls_last_year').enable;
            this.pageForm.get(this.dominio).get(this.dimensao).get('q88_fractures_due_to_falls_list').enable;
            this.pageForm.get(this.dominio).get(this.dimensao).get('q87_falls_last_year').enable;          
          }
        }
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
  }
}

