import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-psychological-aspects',
  templateUrl: './psychological-aspects.component.html'
})
export class PsychologicalAspectsComponent implements OnInit {

  @Input() pageForm : FormGroup;

  private dominio: string = 'psychologicalAspectsForm';

  ngOnInit() { }

  constructor(){}

  submit(){
    
  }

  // método que verifica se o form está válido
  formValido(): Boolean{
    return this.pageForm.get(this.dominio).valid;
  } 

}