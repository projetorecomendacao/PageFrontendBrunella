import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';


@Component({
  selector: 'app-cognitive-deficit',
  templateUrl: './cognitive-deficit.component.html'
})
export class CognitiveDeficitComponent implements OnInit {

  @Input() pageForm: FormGroup;
  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  private errado: boolean = false;
  private branco: boolean = true;

  //dominio e dimensao
  private dimensao: string = 'cognitiveDeficitForm';
  private dominio: string = 'psychologicalAspectsForm'; 

  //Pontuação máxima
  private max_score : number = 6;
  //Pontos da dimensão
  private score : number = 0;

  //vetor com os nomes dos campos que contam pontos
  vetConta: string[] = ['q1_memory_good_like_before', 'q2_memory_test',
                        'q3_language_function_attention', 'q4_visospatial_ability',
                        'q5_praxia', 'q6_memory_test'];

  //vetor com os gabaritos dos acertos
  vetGabarito: string[] = ['S','S','S','S','S','S']


  
  //O serviço checaCampo retorna as imagens de verificação dos campos 
  constructor(private checaCampo : ChecaCampo) { }

  //contagem dos campos que combinam para calcular o score
  conta_certo():number{
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
    mudou(campo: string, pos: number){ 
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
    for (var caca in this.pageForm.get('psychologicalAspectsForm').get('cognitiveDeficitForm').value){
      var valido : boolean = true;
      this.pageForm.get('psychologicalAspectsForm').get('cognitiveDeficitForm').get(caca).markAsTouched;
      this.pageForm.get('psychologicalAspectsForm').get('cognitiveDeficitForm').get(caca).updateValueAndValidity;
      // verifica se todos os campos são válidos
      if (!this.pageForm.get('psychologicalAspectsForm').get('cognitiveDeficitForm').get(caca).valid){
        valido = false;
      }
      // muda o ícone do botão, se algum campo for inválido o botão vai mostrar vermelho
    }
  }
}
