import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../../shared/cria-forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ViolenceForm implements CriaForm {

  private violenceForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: any): FormGroup {
    if (data){
      this.violenceForm = this.fb.group({
        q79_afraid_close_person: [data.getQ79(), [Validators.required, Validators.maxLength(1)]],
        q80_feels_abandoned: [data.getQ80(), [Validators.required, Validators.maxLength(1)]],
        q81_forced: [data.getQ81(), [Validators.required, Validators.maxLength(1)]],
        q82_assauteld: [data.getQ82(), [Validators.required, Validators.maxLength(1)]],
        q83_in_need: [data.getQ83(), [Validators.required, Validators.maxLength(1)]],
        q84_someone_used_money: [data.getQ84(), [Validators.required, Validators.maxLength(1)]],
        q85_touched_without_permission: [data.getQ85(), [Validators.required, Validators.maxLength(1)]],
        q86_dont_take_care_health: [data.getQ86(), [Validators.required, Validators.maxLength(1)]],
        score: [data.getScore(), [Validators.required]],
        need_investigation_violence: [data.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
      });
    }
    else 
    {
      this.violenceForm = this.fb.group({
        q79_afraid_close_person: ['', [Validators.required, Validators.maxLength(1)]],
        q80_feels_abandoned: ['', [Validators.required, Validators.maxLength(1)]],
        q81_forced: ['', [Validators.required, Validators.maxLength(1)]],
        q82_assauteld: ['', [Validators.required, Validators.maxLength(1)]],
        q83_in_need: ['', [Validators.required, Validators.maxLength(1)]],
        q84_someone_used_money: ['', [Validators.required, Validators.maxLength(1)]],
        q85_touched_without_permission: ['', [Validators.required, Validators.maxLength(1)]],
        q86_dont_take_care_health: ['', [Validators.required, Validators.maxLength(1)]],
        score: ['', [Validators.required]],
        need_investigation_violence: ['', [Validators.required, Validators.maxLength(1)]],
      });
    }
    return this.violenceForm;
  }
}