import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { Malnutrition } from 'src/app/shared/models/biological-aspects.model';

@Injectable()
export class MalnutritionForm implements CriaForm {

  private malnutritionForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: Malnutrition): FormGroup {
    if (data){
      this.malnutritionForm = this.fb.group({
        q26_yourself_malnourished: [data.getQ26(), [Validators.required, Validators.maxLength(1)]],
        q27_chewing_mouth_problems: [data.getQ27(), [Validators.required, Validators.maxLength(1)]],
        q28_less3_meal_daily: [data.getQ28(), [Validators.required, Validators.maxLength(1)]],
        q29_decreases_amount_food: [data.getQ29(), [Validators.required, Validators.maxLength(1)]],
        q30_lost_weight_no_reason: [data.getQ30(), [Validators.required, Validators.maxLength(15)]],
        q30_lost_weight_no_reason_amount : [data.getQ30b(), [Validators.required]], 
        q31_stress : [data.getQ31b(), [Validators.required]],
        q31_illnes : [data.getQ31c(), [Validators.required]],
        q31_hospital : [data.getQ31d(), [Validators.required]],
        q31_stress_illness_hospitalization: [{value:data.getQ31()}, [Validators.required, Validators.maxLength(1)]],
        q32_bmi_less22: [data.getQ32(), [Validators.required, Validators.maxLength(1)]],
        score : [data.getScore(), [Validators.required]],
        need_investigation_malnutrition: [data.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
      });
    }
    else 
    {
      this.malnutritionForm = this.fb.group({
        q26_yourself_malnourished: ['', [Validators.required, Validators.maxLength(1)]],
        q27_chewing_mouth_problems: ['', [Validators.required, Validators.maxLength(1)]],
        q28_less3_meal_daily: ['', [Validators.required, Validators.maxLength(1)]],
        q29_decreases_amount_food: ['', [Validators.required, Validators.maxLength(1)]],
        q30_lost_weight_no_reason: ['', [Validators.required, Validators.maxLength(1)]],
        q31_stress_illness_hospitalization: [{value:''}, [Validators.required, Validators.maxLength(1)]],
        q32_bmi_less22: ['', [Validators.required, Validators.maxLength(1)]],
        q30_lost_weight_no_reason_amount : ['nda', [Validators.required]], 
        q31_stress : ['', [Validators.required]],
        q31_illnes : ['', [Validators.required]],
        q31_hospital : ['', [Validators.required]],
        score : ['', [Validators.required]],
        need_investigation_malnutrition: ['', [Validators.required, Validators.maxLength(1)]],
      });
    }
    return this.malnutritionForm;
  }
}
