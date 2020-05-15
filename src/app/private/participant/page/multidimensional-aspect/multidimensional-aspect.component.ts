import { OnInit, Input, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Participant } from 'src/app/shared/models/participant.model';

@Component({
  selector: 'app-multidimensional-aspect',
  templateUrl: './multidimensional-aspect.component.html'
})
export class MultidimensionalAspectComponent implements OnInit {

  @Input() pageForm : FormGroup;
  @Input() participant : Participant;

  private dominio: string = 'multidimensionalAspectsForm';

  ngOnInit() { }

  constructor(){}

  submit(){  
  }

  // método que verifica se o form está válido
  formValido(): Boolean{
    return this.pageForm.get(this.dominio).valid;
  } 

}