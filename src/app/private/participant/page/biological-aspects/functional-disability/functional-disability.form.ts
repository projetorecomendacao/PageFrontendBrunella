import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { FunctionalDisability } from 'src/app/shared/models/biological-aspects.model';

@Injectable()
export class FunctionalDisabilityForm implements CriaForm {

  private functionalDisabilityForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: FunctionalDisability): FormGroup {
    if (data){
      this.functionalDisabilityForm = this.fb.group({
        q20_to_shop: [data.getQ20(), [Validators.required, Validators.maxLength(1)]],
        q21_use_transport: [data.getQ21(), [Validators.required, Validators.maxLength(1)]],
        q22_to_cook: [data.getQ22(), [Validators.required, Validators.maxLength(1)]],
        q23UseTelephone: [data.getQ23(), [Validators.required, Validators.maxLength(1)]],
        q24_dress_up: [data.getQ24(), [Validators.required, Validators.maxLength(1)]],
        q25TakeShower: [data.getQ25(), [Validators.required, Validators.maxLength(1)]],
        score : [data.getScore(), [Validators.required]],
        need_investigation_functional: [data.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
      });

    }
    else 
    {
      this.functionalDisabilityForm = this.fb.group({
        q20_to_shop: ['', [Validators.required, Validators.maxLength(1)]],
        q21_use_transport: ['', [Validators.required, Validators.maxLength(1)]],
        q22_to_cook: ['', [Validators.required, Validators.maxLength(1)]],
        q23UseTelephone: ['', [Validators.required, Validators.maxLength(1)]],
        q24_dress_up: ['', [Validators.required, Validators.maxLength(1)]],
        q25TakeShower: ['', [Validators.required, Validators.maxLength(1)]],
        score : ['', [Validators.required]],
        need_investigation_functional: ['', [Validators.required, Validators.maxLength(1)]],
      });
    }
    return this.functionalDisabilityForm;
  }
}