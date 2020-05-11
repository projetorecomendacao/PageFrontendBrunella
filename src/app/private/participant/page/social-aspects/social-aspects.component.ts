import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-social-aspects',
  templateUrl: './social-aspects.component.html'
})
export class SocialAspectsComponent implements OnInit {

  @Input() pageForm : FormGroup;

  private dominio: string = 'socialAspectsForm';

  ngOnInit() { }

  constructor(){}

  submit(){
    
  }

  // método que verifica se o form está válido
  formValido(): Boolean{
    return this.pageForm.get(this.dominio).valid;
  } 
  

}