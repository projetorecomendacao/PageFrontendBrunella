import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { EnvironmentalProblems } from 'src/app/shared/models/social-aspects.model';

@Injectable()
export class EnvironmentalProblemsForm implements CriaForm {

  private environmentalProblemsForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: EnvironmentalProblems): FormGroup {
    if (data){
      this.environmentalProblemsForm = this.fb.group({
        q63_estable_furniture: [data.getQ63(), [Validators.required, Validators.maxLength(1)]],
        q64_loose_objects_carpets: [data.getQ64(), [Validators.required, Validators.maxLength(1)]],
        q65_slippery_floor: [data.getQ65(), [Validators.required, Validators.maxLength(1)]],
        q66_handrail_on_stairs: [data.getQ66(), [Validators.required, Validators.maxLength(1)]],
        q67_lighted_stairs: [data.getQ67(), [Validators.required, Validators.maxLength(1)]],
        q68_suitable_stairs_steps: [data.getQ68(), [Validators.required, Validators.maxLength(1)]],
        q69_non_slippery_carpet: [data.getQ69(), [Validators.required, Validators.maxLength(1)]],
        q70_get_on_stool: [data.getQ70(), [Validators.required, Validators.maxLength(1)]],
        q71_turn_lights_off: [data.getQ71(), [Validators.required, Validators.maxLength(1)]],
        q72_safe_shoes: [data.getQ72(), [Validators.required, Validators.maxLength(1)]],
        q73_manicure_sidewalks: [data.getQ73(), [Validators.required, Validators.maxLength(1)]],
        q74_public_transport_access: [data.getQ74(), [Validators.required, Validators.maxLength(1)]],
        q75_commerce_access: [data.getQ75(), [Validators.required, Validators.maxLength(1)]],
        q76_ease_plasewalking: [data.getQ76(), [Validators.required, Validators.maxLength(1)]],
        q77_fun_access: [data.getQ77(), [Validators.required, Validators.maxLength(1)]],
        q78_safety: [data.getQ78(), [Validators.required, Validators.maxLength(1)]],
        score: [data.getScore(), [Validators.required]],
        need_investigation_env: [data.getQ78(), [Validators.required, Validators.maxLength(1)]],
        behaviorRisk:[''],
        domesticRisk:['']
      });
    }
    else 
    {
      this.environmentalProblemsForm = this.fb.group({
        q63_estable_furniture: ['', [Validators.required, Validators.maxLength(1)]],
        q64_loose_objects_carpets: ['', [Validators.required, Validators.maxLength(1)]],
        q65_slippery_floor: ['', [Validators.required, Validators.maxLength(1)]],
        q66_handrail_on_stairs: ['', [Validators.required, Validators.maxLength(1)]],
        q67_lighted_stairs: ['', [Validators.required, Validators.maxLength(1)]],
        q68_suitable_stairs_steps: ['', [Validators.required, Validators.maxLength(1)]],
        q69_non_slippery_carpet: ['', [Validators.required, Validators.maxLength(1)]],
        q70_get_on_stool: ['', [Validators.required, Validators.maxLength(1)]],
        q71_turn_lights_off: ['', [Validators.required, Validators.maxLength(1)]],
        q72_safe_shoes: ['', [Validators.required, Validators.maxLength(1)]],
        q73_manicure_sidewalks: ['', [Validators.required, Validators.maxLength(1)]],
        q74_public_transport_access: ['', [Validators.required, Validators.maxLength(1)]],
        q75_commerce_access: ['', [Validators.required, Validators.maxLength(1)]],
        q76_ease_plasewalking: ['', [Validators.required, Validators.maxLength(1)]],
        q77_fun_access: ['', [Validators.required, Validators.maxLength(1)]],
        q78_safety: ['', [Validators.required, Validators.maxLength(1)]],
        score: ['', [Validators.required]],
        need_investigation_env: ['', [Validators.required, Validators.maxLength(1)]],
        behaviorRisk:[''],
        domesticRisk:['']
      });

    }
    return this.environmentalProblemsForm;
  }
}



