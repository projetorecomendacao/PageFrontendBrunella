import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CriaForm} from '../../../../../shared/cria-forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ObservationsPsychologicalForm implements CriaForm {

  private commentsForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: String): FormGroup {
    if (data){
      this.commentsForm = new FormGroup({
        'comments': new FormControl(data, [Validators.required])});
    }
    else 
    {
      this.commentsForm = new FormGroup({
        'comments': new FormControl(null, [Validators.required])});
    }
    return this.commentsForm;
  }
}

