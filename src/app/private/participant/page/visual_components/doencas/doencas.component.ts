import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';

@Component({
  selector: 'app-doencas',
  templateUrl: './doencas.component.html'
})
export class DoencasComponent implements OnInit {
  @ Input() questao: string;
  @ Input() letra: string;
  @ Input() pageForm: FormGroup;
  @ Input() dominio: string;
  @ Input() dimensao: string;
  @ Input() campo: string;
  @ Input() imagem:string;
  constructor(private checaCampo : ChecaCampo) {

  }

  ngOnInit(): void {

  }

  mudou(): string{ 
    var volta: string = this.checaCampo.inicio();
    if(!this.pageForm.get(this.dominio).get(this.dimensao).get(this.campo).pristine){
      volta = this.checaCampo.checa(this.pageForm.get(this.dominio).get(this.dimensao).get(this.campo).valid);
    }
    return volta;
  }

}
