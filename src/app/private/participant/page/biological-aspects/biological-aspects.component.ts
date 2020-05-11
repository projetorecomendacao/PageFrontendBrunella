import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-biological-aspects',
  templateUrl: './biological-aspects.component.html'
})
export class BiologicalAspectsComponent implements OnInit {

  @Input() pageForm : FormGroup;

  private dominio: string = 'biologicalAspectsForm';

  ngOnInit() { }

  constructor(){}

  submit(){
    
  }

  // método que verifica se o form está válido
  formValido(): Boolean{
    return this.pageForm.get(this.dominio).valid;
  } 
  

}