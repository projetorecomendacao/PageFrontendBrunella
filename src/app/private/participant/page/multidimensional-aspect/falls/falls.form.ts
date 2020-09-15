import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { Falls } from 'src/app/shared/models/multidimentional-aspects';

@Injectable()
export class FallsForm implements CriaForm {

  private fallsForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: Falls): FormGroup {
    if (data){
      this.fallsForm = this.fb.group({
        q87_falls_last_year: [data.getQ87A(), [Validators.required]],
        q87_amount_falls_last_year: [data.getQ87B(), [Validators.required, Validators.min(0)]],
        q88_fractures_due_to_falls: [data.getQ88A(), [Validators.required]],
        q88_fractures_due_to_falls_list: [data.getQ88B()],
        q89_fractures_list: [data.getQ89()],
        q90_strength_mmii: [data.getQ90(), [Validators.required, Validators.maxLength(1)]],
        q91_equilibrium: [data.getQ91(), [Validators.required, Validators.maxLength(1)]],
        q92_older_than75: [data.getQ92(), [Validators.required, Validators.maxLength(1)]],
        q93_female: [data.getQ93(), [Validators.required, Validators.maxLength(1)]],
        q94_cognitive_alterations: [data.getQ94(), [Validators.required, Validators.maxLength(1)]],
        q95_av_ds_commitment: [data.getQ95(), [Validators.required, Validators.maxLength(1)]],
        q96_visual_deficit: [data.getQ96(), [Validators.required, Validators.maxLength(1)]],
        q97_domestic_risks: [data.getQ97(), [Validators.required, Validators.maxLength(1)]],
        q98_behavior_risk: [data.getQ98(), [Validators.required, Validators.maxLength(1)]],
        q99_inactivity: [data.getQ99(), [Validators.required, Validators.maxLength(1)]],
        q100_prior_ave: [data.getQ100(), [Validators.required, Validators.maxLength(1)]],
        q101_psychotropic_medications_use: [data.getQ101(), [Validators.required, Validators.maxLength(1)]],
        q102_has_diseases: [data.getQ102(), [Validators.required, Validators.maxLength(1)]],
        score: [data.getScore(), [Validators.required]],
        need_investigation_falls: [data.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
      });
    }
    else 
    {
      this.fallsForm = this.fb.group({
        q87_falls_last_year: [{value:'',disabled:false}, [Validators.required, Validators.maxLength(1)]],
        q87_amount_falls_last_year: ['' , [Validators.required, Validators.min(0)]],
        q88_fractures_due_to_falls: ['', [Validators.required, Validators.maxLength(1)]],
        q88_fractures_due_to_falls_list: ['', [Validators.required]],
        q89_fractures_list: ['', [Validators.required]],
        q90_strength_mmii: ['', [Validators.required, Validators.maxLength(1)]],
        q91_equilibrium: ['', [Validators.required, Validators.maxLength(1)]],
        q92_older_than75: ['', [Validators.required, Validators.maxLength(1)]],
        q93_female: ['', [Validators.required, Validators.maxLength(1)]],
        q94_cognitive_alterations: ['', [Validators.required, Validators.maxLength(1)]],
        q95_av_ds_commitment: ['', [Validators.required, Validators.maxLength(1)]],
        q96_visual_deficit: ['', [Validators.required, Validators.maxLength(1)]],
        q97_domestic_risks: ['', [Validators.required, Validators.maxLength(1)]],
        q98_behavior_risk: ['', [Validators.required, Validators.maxLength(1)]],
        q99_inactivity: ['', [Validators.required, Validators.maxLength(1)]],
        q100_prior_ave: ['', [Validators.required, Validators.maxLength(1)]],
        q101_psychotropic_medications_use: ['', [Validators.required, Validators.maxLength(1)]],
        q102_has_diseases: ['', [Validators.required, Validators.maxLength(1)]],
        score: ['', [Validators.required]],
        need_investigation_falls: ['', [Validators.required, Validators.maxLength(1)]],
      });
    }
    return this.fallsForm;
  }
}