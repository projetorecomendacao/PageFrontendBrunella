import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { CardiovascularFactors } from 'src/app/shared/models/biological-aspects.model';

@Injectable()
export class CardiovascularFactorsForm implements CriaForm {

  private cardiovascularFactorsForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: CardiovascularFactors): FormGroup {
      if (data){
        this.cardiovascularFactorsForm = this.fb.group({
          q33_dcv_familiar_history: [data.getQ33(), [Validators.required, Validators.maxLength(1)]],
          q34_hypertension: [data.getQ34A(), [Validators.required, Validators.maxLength(1)]],
          q34_hypertension_unknow: [data.getQ34B(), [Validators.required, Validators.maxLength(1)]],
          q35_uncontrolled_diabetes: [data.getQ35A(), [Validators.required, Validators.maxLength(1)]],
          q35_unknown_value_glycemia: [data.getQ35B(), [Validators.required, Validators.maxLength(1)]],
          q36_cholesterol: [data.getQ36A(), [Validators.required, Validators.maxLength(1)]],
          q36_unknown_value_ct_hdl: [data.getQ36B(), [Validators.required, Validators.maxLength(1)]],
          q37_smoker: [data.getQ37(), [Validators.required, Validators.maxLength(1)]],
          q38_practice_150_minutes_exercises: [data.getQ38(), [Validators.required, Validators.maxLength(1)]],
          q39_healthy_eating: [data.getQ39(), [Validators.required, Validators.maxLength(1)]],
          q40_alcohol_Ingested_last_week: [data.getQ40A(), [Validators.required, Validators.maxLength(1)]],
          q40_alcohol_Ingested_last_week_amount: [data.getQ40B(), [Validators.required, Validators.maxLength(1)]],
          q41_bmi_obesity: [{value:data.getQ41(),disabled:true}, [Validators.required, Validators.maxLength(1)]],
          score: [data.getScore, [Validators.required]],
          need_investigation_cardio: [data.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]]
        });
      }
      else 
      {
        this.cardiovascularFactorsForm = this.fb.group({
          q33_dcv_familiar_history: ['', [Validators.required, Validators.maxLength(1)]],
          q34_hypertension: ['', [Validators.required, Validators.maxLength(1)]],
          q34_hypertension_unknow: ['', [Validators.required, Validators.maxLength(1)]],
          q35_uncontrolled_diabetes: ['', [Validators.required, Validators.maxLength(1)]],
          q35_unknown_value_glycemia: ['', [Validators.required, Validators.maxLength(1)]],
          q36_cholesterol: ['', [Validators.required, Validators.maxLength(1)]],
          q36_unknown_value_ct_hdl: ['', [Validators.required, Validators.maxLength(1)]],
          q37_smoker: ['', [Validators.required, Validators.maxLength(1)]],
          q38_practice_150_minutes_exercises: ['', [Validators.required, Validators.maxLength(1)]],
          q39_healthy_eating: ['', [Validators.required, Validators.maxLength(1)]],
          q40_alcohol_Ingested_last_week: ['', [Validators.required, Validators.maxLength(1)]],
          q40_alcohol_Ingested_last_week_amount: ['', [Validators.required]],
          q41_bmi_obesity: [{value:'', disabled:true}, [Validators.required, Validators.maxLength(1)]],
          score: ['', [Validators.required]],
          need_investigation_cardio: ['', [Validators.required, Validators.maxLength(1)]]
        });
      }
    return this.cardiovascularFactorsForm;
  }
}