import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { Depression } from 'src/app/shared/models/psychological-aspects.model';

@Injectable()
export class DepressionForm implements CriaForm {

  private depressionForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: Depression): FormGroup {
    if (data){
      this.depressionForm = this.fb.group({
        q9_satisfied_with_life: [data.getQ9(), [Validators.required, Validators.maxLength(1)]],
        q10_frequently_sad: [data.getQ10(), [Validators.required, Validators.maxLength(1)]],
        q11_stopped_doing_things: [data.getQ11(), [Validators.required, Validators.maxLength(1)]],
        q12_fear_bad_things_happen: [data.getQ12(), [Validators.required, Validators.maxLength(1)]],
        q13_impatient_disquiet: [data.getQ13(), [Validators.required, Validators.maxLength(1)]],
        q14_concentration_problem: [data.getQ14(), [Validators.required, Validators.maxLength(1)]],
        score : [data.getScore(),[Validators.required]],
        need_investigation_depression: [data.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
      });
    }
    else 
    {
      this.depressionForm = this.fb.group({
        q9_satisfied_with_life: ['', [Validators.required, Validators.maxLength(1)]],
        q10_frequently_sad: ['', [Validators.required, Validators.maxLength(1)]],
        q11_stopped_doing_things: ['', [Validators.required, Validators.maxLength(1)]],
        q12_fear_bad_things_happen: ['', [Validators.required, Validators.maxLength(1)]],
        q13_impatient_disquiet: ['', [Validators.required, Validators.maxLength(1)]],
        q14_concentration_problem: ['', [Validators.required, Validators.maxLength(1)]],
        score : ['',[Validators.required]],
        need_investigation_depression: ['', [Validators.required, Validators.maxLength(1)]],
      });
    }
    return this.depressionForm;
  }
}