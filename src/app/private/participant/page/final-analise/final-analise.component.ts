import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-analise',
  templateUrl: './final-analise.component.html'
})
export class FinalAnaliseComponent implements OnInit {

  @Input() pageForm: FormGroup;

  conta:number=0;
  
  constructor(private checaCampo: ChecaCampo, private router: Router) { }

  ngOnInit() { }

  // método que verifica a situação dos campos do form
  mudou(campo: string): string{ 
    var volta: string = this.checaCampo.inicio();
    if(!this.pageForm.get('finalAnaliseForm').get(campo).pristine){
      volta = this.checaCampo.checa(this.pageForm.get('finalAnaliseForm').get(campo).valid);
    }
    return volta;
  }

  graficos(): boolean{
    return this.pageForm.get('multidimensionalAspectsForm').valid;
  }

  // método que verifica se o form está válido
  formValido(): Boolean{
    //this.conta++;
    //console.log("graficos: " + this.conta);
    return this.pageForm.get('finalAnaliseForm').valid;
  } 

  submit() { 
    
    alert('PAGe salvo com sucesso!!');
    this.router.navigate(['private/']).then();
    //for (var caca in this.pageForm.get('finalAnaliseForm').value){
    //  console.log(caca);
    //  this.pageForm.get('finalAnaliseForm').get(caca).markAsTouched;
    //  this.pageForm.get('finalAnaliseForm').get(caca).updateValueAndValidity;
    //}
  }
}
