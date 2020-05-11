import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';

@Component({
  selector: 'app-depression',
  templateUrl: './depression.component.html'
})
export class DepressionComponent implements OnInit {

  @Input() pageForm: FormGroup;
  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  public errado: boolean = false;
  public branco: boolean = true;

  //dominio e dimensao
  private dimensao: string = 'depressionForm';
  private dominio: string = 'psychologicalAspectsForm'; 

  //Pontuação máxima
  public max_score : number = 6;
  //Pontos da dimensão
  public score : number = 0;
  //vetor com os nomes dos campos que contam pontos
  vetConta: string[] = ['q9_satisfied_with_life','q10_frequently_sad','q11_stopped_doing_things',
                        'q12_fear_bad_things_happen','q13_impatient_disquiet','q14_concentration_problem'];
  //vetor com os gabaritos dos acertos
  vetGabarito: string[] = ['S','N','N','N','N','N'];
  //Quantidade de campos no Form

  
  //O serviço checaCampo retorna as imagens de verificação dos campos 
  constructor(private checaCampo : ChecaCampo) {  }

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
  
    // o método mudou verifica se um campo foi atualizado
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
