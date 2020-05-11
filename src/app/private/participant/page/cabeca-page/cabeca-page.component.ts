import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';

@Component({
  selector: 'app-cabeca-page',
  templateUrl: './cabeca-page.component.html'
})
export class CabecaPageComponent implements OnInit {
  
  @Input() pageForm: FormGroup;

  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  private errado: boolean = false;
  private branco: boolean = true;

  //dominio e dimensão
  private dimensao: string = '';
  private dominio: string = 'cabecaPageForm'; 

  // método que verifica a situação dos campos do form
  mudou(campo: string): string{ 
    var volta: string = this.checaCampo.inicio();
    if(!this.pageForm.get(this.dominio).get(campo).pristine){
      volta = this.checaCampo.checa(this.pageForm.get(this.dominio).get(campo).valid);
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

  



  constructor(private checaCampo: ChecaCampo){}

  ngOnInit() { }

  submit() { 
    //for (var caca in this.pageForm.get('cabecaPageForm').value){
    //  console.log(caca);
    //  this.pageForm.get('cabecaPageForm').get(caca).markAsTouched;
    //  this.pageForm.get('cabecaPageForm').get(caca).updateValueAndValidity;
    //}
  }
}