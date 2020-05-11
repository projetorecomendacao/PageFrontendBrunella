import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { SensoryDeficit } from '../../../../../shared/models/biological-aspects.model';

@Injectable()
export class SensoryDeficitForm implements CriaForm {

  private sensoryDeficitForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: SensoryDeficit): FormGroup {
    if (data){
      this.sensoryDeficitForm = this.fb.group({
        q15_vision_problems: [data.getQ15(), [Validators.required, Validators.maxLength(1)]],
        q16_hearing_problems: [data.getQ16(), [Validators.required, Validators.maxLength(1)]],
        q17_taste_problems: [data.getQ17(), [Validators.required, Validators.maxLength(1)]],
        q18_senses_problems: [data.getQ18(), [Validators.required, Validators.maxLength(1)]],
        q19_interaction_problems: [data.getQ19(), [Validators.required, Validators.maxLength(1)]],
        score : [data.getScore(), [Validators.required]],
        need_investigation_sensory: [data.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],});
    } else {
      this.sensoryDeficitForm = this.fb.group({
        q15_vision_problems: ['', [Validators.required, Validators.maxLength(1)]],
        q16_hearing_problems: ['', [Validators.required, Validators.maxLength(1)]],
        q17_taste_problems: ['', [Validators.required, Validators.maxLength(1)]],
        q18_senses_problems: ['', [Validators.required, Validators.maxLength(1)]],
        q19_interaction_problems: ['', [Validators.required, Validators.maxLength(1)]],
        score : ['', [Validators.required]],
        need_investigation_sensory: ['', [Validators.required, Validators.maxLength(1)]],
      });
    }
    return this.sensoryDeficitForm;
  }
}
