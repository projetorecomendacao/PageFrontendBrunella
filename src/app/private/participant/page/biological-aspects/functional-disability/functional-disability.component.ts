import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';

@Component({
  selector: 'app-functional-disability',
  templateUrl: './functional-disability.component.html'
})
export class FunctionalDisabilityComponent implements OnInit {

  @Input() pageForm: FormGroup;

  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  public errado: boolean = false;
  public branco: boolean = true;

  //dominio e dimensão
  private dimensao: string = 'functionalDisabilityForm';
  private dominio: string = 'biologicalAspectsForm'; 
  
  //Pontuação máxima
  public max_score : number = 6;
  //Pontos da dimensão
  public score : number = 0;
  //Campos que são válidos para contar o número de acertos
  vetConta: string[] = ['q20_to_shop','q21_use_transport','q22_to_cook',
                        'q23UseTelephone','q24_dress_up', 'q25TakeShower']

  vetGabarito: string[] = ['N','N','N','N','N','N'];
  
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