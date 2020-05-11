import {FormGroup} from '@angular/forms';
import {CriaForm} from '../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { MultidisciplinaryDomain } from 'src/app/shared/models/multidimentional-aspects';
import { FallsForm } from './falls/falls.form';
import { ObservationsMultidimensionalForm } from './observations-multidimensional/observations-multidimensional.form';

@Injectable()
export class MultidimensionalAspectForm implements CriaForm {

  private multidimensionalAspectForm: FormGroup;
  
  constructor(private falls: FallsForm, private commentsForm: ObservationsMultidimensionalForm) { }
  
  geraFormGroup(data?: MultidisciplinaryDomain): FormGroup {
    if (data){
      this.multidimensionalAspectForm = new FormGroup ({
        'fallsForm' : this.falls.geraFormGroup(data.fallsInstance),
        'commentsForm' : this.commentsForm.geraFormGroup(data.comments)
      })
    }
    else 
    {
      this.multidimensionalAspectForm = new FormGroup ({
        'fallsForm' : this.falls.geraFormGroup(),
        'commentsForm' : this.commentsForm.geraFormGroup()
      })
    }
    return this.multidimensionalAspectForm;
  }
}

