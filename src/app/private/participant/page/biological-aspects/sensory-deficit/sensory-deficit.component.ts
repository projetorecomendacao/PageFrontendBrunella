import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';

@Component({
  selector: 'app-sensory-deficit',
  templateUrl: './sensory-deficit.component.html'
})
export class SensoryDeficitComponent implements OnInit {

  @Input() pageForm: FormGroup;

  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  private errado: boolean = false;
  private branco: boolean = true;

  //dominio e dimensão
  private dimensao: string = 'sensoryDeficitForm';
  private dominio: string = 'biologicalAspectsForm'; 
  
  //Pontuação máxima
  private max_score : number = 5;
  //Pontos da dimensão
  private score : number = 0;
  //Campos que são válidos para contar o número de acertos
  vetConta: string[] = ['q15_vision_problems','q16_hearing_problems','q17_taste_problems',
                        'q18_senses_problems','q19_interaction_problems'];
  //vetor com os gabaritos dos acertos
  vetGabarito: string[] = ['N','N','N','N','N'];
  
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