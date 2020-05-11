import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { LowSocialSupport } from 'src/app/shared/models/social-aspects.model';

@Injectable()
export class LowSocialSupportForm implements CriaForm {

  private lowSocialSupportForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: LowSocialSupport): FormGroup {
    if (data){
      this.lowSocialSupportForm = this.fb.group({
        q54_spouse: [data.getQ54A(), [Validators.required, Validators.maxLength(1)]],
        q54_mother: [data.getQ54B(), [Validators.required, Validators.maxLength(1)]],
        q54_father: [data.getQ54C(), [Validators.required, Validators.maxLength(1)]],
        q54_brothers: [data.getQ54D(), [Validators.required]],
        q54_children: [data.getQ54E(), [Validators.required]],
        q54_gran_children: [data.getQ54F(), [Validators.required]],
        q55_meet_family_friends: [data.getQ55(), [Validators.required, Validators.maxLength(1)]],
        q56_participate_family_decisions: [data.getQ56(), [Validators.required, Validators.maxLength(1)]],
        q57_satisfied_family_relationship: [data.getQ57(), [Validators.required, Validators.maxLength(1)]],
        q58_helped_if_need_money: [data.getQ58(), [Validators.required, Validators.maxLength(1)]],
        q59_someone_helps_if_need: [data.getQ59(), [Validators.required, Validators.maxLength(1)]],
        q60_someone_to_have_fun: [data.getQ60(), [Validators.required, Validators.maxLength(1)]],
        q61_participate_social_events: [data.getQ61(), [Validators.required, Validators.maxLength(1)]],
        q62_regulary_healt_services: [data.getQ62(), [Validators.required, Validators.maxLength(1)]],
        score: [data.getScore(), [Validators.required]],
        need_investigation_low: [data.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
      });
    }
    else 
    {
      this.lowSocialSupportForm = this.fb.group({
        q54_spouse: ['', [Validators.required, Validators.maxLength(1)]],
        q54_mother: ['', [Validators.required, Validators.maxLength(1)]],
        q54_father: ['', [Validators.required, Validators.maxLength(1)]],
        q54_brothers: ['', [Validators.required]],
        q54_children: ['', [Validators.required]],
        q54_gran_children: ['', [Validators.required]],
        q55_meet_family_friends: ['', [Validators.required, Validators.maxLength(1)]],
        q56_participate_family_decisions: ['', [Validators.required, Validators.maxLength(1)]],
        q57_satisfied_family_relationship: ['', [Validators.required, Validators.maxLength(1)]],
        q58_helped_if_need_money: ['', [Validators.required, Validators.maxLength(1)]],
        q59_someone_helps_if_need: ['', [Validators.required, Validators.maxLength(1)]],
        q60_someone_to_have_fun: ['', [Validators.required, Validators.maxLength(1)]],
        q61_participate_social_events: ['', [Validators.required, Validators.maxLength(1)]],
        q62_regulary_healt_services: ['', [Validators.required, Validators.maxLength(1)]],
        score: ['', [Validators.required]],
        need_investigation_low: ['', [Validators.required, Validators.maxLength(1)]],
      });
    }
    return this.lowSocialSupportForm;
  }
}