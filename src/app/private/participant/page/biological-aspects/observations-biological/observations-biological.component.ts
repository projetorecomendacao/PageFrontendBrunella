import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';

@Component({
  selector: 'app-observations-biological',
  templateUrl: './observations-biological.component.html'
})
export class ObservationsBiologicalComponent implements OnInit {

  @Input() pageForm: FormGroup;

    // variáveis booleans que controlam as mensagens de certo e errado no final do form
    public errado: boolean = false;
    public branco: boolean = true;
  
  //dominio e dimensao
  private dimensao: string = 'commentsForm';
  private dominio: string = 'biologicalAspectsForm'; 
  //O vetor de imagens tem as imagens de checagem dos campos

  
  //O serviço checa campo retorna as imanges de verificação dos campos 
  constructor(private checaCampo : ChecaCampo) {  }
  
  ngOnInit():void {
    this.formValido();
  }
  
    // o método mudou verifica se um campo foi atualizado
    // método que verifica a situação dos campos do form
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
