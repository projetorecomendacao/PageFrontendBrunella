import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { NegativeAttitudesAging } from 'src/app/shared/models/psychological-aspects.model';

@Injectable()
export class NegativeAttitudesAgingForm implements CriaForm {

  private negativeAttitudesAgingForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: NegativeAttitudesAging): FormGroup {
    if (data){
      this.negativeAttitudesAgingForm = this.fb.group({
        q7_age_self_perception: [data.getQ7A(), Validators.required],
        q7_age_self_perception_why: [data.getQ7B(), Validators.required],
        q7_age_self_perception_analyze: [data.getQ7C(), [Validators.required, Validators.maxLength(1)]],
        q8_aging_positive_points: [data.getQ8A(), Validators.required],
        q8_aging_negative_points: [data.getQ8B(), Validators.required],
        q8_aging_analyse: [data.getQ8C(), [Validators.required, Validators.maxLength(1)]],
        score : [data.getScore(),[Validators.required]],
        need_investigation_negative: [data.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]]

      });
    }
    else 
    {
      this.negativeAttitudesAgingForm = this.fb.group({
        q7_age_self_perception: ['', Validators.required],
        q7_age_self_perception_why: ['', Validators.required],
        q7_age_self_perception_analyze: ['', [Validators.required]],
        q8_aging_positive_points: ['', Validators.required],
        q8_aging_negative_points: ['', Validators.required],
        q8_aging_analyse: ['', [Validators.required]],
        score : ['',[Validators.required]],
        need_investigation_negative: ['', [Validators.required]]
      });
    }
    return this.negativeAttitudesAgingForm;
  }
}
