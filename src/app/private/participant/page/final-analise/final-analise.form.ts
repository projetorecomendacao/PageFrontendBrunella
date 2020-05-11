import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { FinalAnalise } from 'src/app/shared/models/final-analise';


@Injectable()
export class FinalAnaliseForm implements CriaForm {

  private finalAnaliseForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: FinalAnalise): FormGroup {
    if (data){
        this.finalAnaliseForm = this.fb.group({
            dm3_unmet_demands: [data.getDm3_unmet_demands(), [Validators.required]],
            gerontologist_assessment: [data.getGerontologist_assessment(),[Validators.required]],
            demands_problems: [data.getDemands_problems(), [Validators.required]],
            goals: [data.getGoals(), [Validators.required]],
            actions_organization: [data.getActions_organization(), [Validators.required]],
        });
    }
    else 
    {
        this.finalAnaliseForm = this.fb.group({
            dm3_unmet_demands: ['', [Validators.required]],
            gerontologist_assessment: ['',[Validators.required]],
            demands_problems: ['', [Validators.required]],
            goals: ['', [Validators.required]],
            actions_organization: ['', [Validators.required]],
        });
    }
    return this.finalAnaliseForm;
  }
}