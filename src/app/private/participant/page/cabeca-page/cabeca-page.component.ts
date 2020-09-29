import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';
import { PageService } from '../page.service';

@Component({
  selector: 'app-cabeca-page',
  templateUrl: './cabeca-page.component.html'
})
export class CabecaPageComponent implements OnInit {
  
  @Input() pageForm: FormGroup;

  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  public errado: boolean = false;
  public branco: boolean = true;

  //dominio e dimensão
  private dimensao: string = '';
  private dominio: string = 'cabecaPageForm'; 

  // método que verifica a situação dos campos do form
  mudou(campo: string): string{ 
    var volta: string;
    if(this.pageForm.get(this.dominio).get(campo).valid){
      volta = this.checaCampo.checa(this.pageForm.get(this.dominio).get(campo).valid);
    } else {
      if(!this.pageForm.get(this.dominio).get(campo).pristine){
        volta = this.checaCampo.checa(this.pageForm.get(this.dominio).get(campo).valid);
      } else {
        volta = this.checaCampo.inicio();
      }
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

  constructor(private checaCampo: ChecaCampo, private pageService: PageService){}

  ngOnInit() { 
    this.formValido();
  }

  submit() { 
    this.pageService.submit(this.pageForm, 0);
  }
}