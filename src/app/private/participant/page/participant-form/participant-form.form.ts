import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { ParticipantSituation } from 'src/app/shared/models/participant.model';

@Injectable()
export class ParticipantFormForm implements CriaForm {

  private participantSituationForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: ParticipantSituation): FormGroup {
    if (data){
      this.participantSituationForm = this.fb.group({
        p02_address : [data.getAddress(), [Validators.required, Validators.maxLength(100)]],
        p03_communication : [data.getCommunication(), [Validators.required, Validators.maxLength(100)]],
        p07_marital_status: [data.getMarital_status(), [Validators.required, Validators.maxLength(30)]],
        p08_schooling: [data.getSchooling(), [Validators.required, Validators.maxLength(35)]],
        p09_study_time: [data.getStudy_time(), Validators.required],
        p10_is_retired: [data.getIs_retired(), [Validators.required, Validators.maxLength(1)]],
        //p10_retired_profession: [data.getRetired_profession(), Validators.maxLength(30)],
        p10_actual_profession: [data.getActual_profession(), [Validators.required, Validators.maxLength(30)]],
        p11_retire_more_time_activity: [data.getRetire_more_time_activity(), Validators.maxLength(30)],
        p12_is_working_professionals_activities: [data.getIs_working_professionals_activities(), [Validators.required, Validators.maxLength(1)]],
        p12_professional_activities: [data.getProfessional_activities(), Validators.maxLength(30)],
        p13_income_I: [data.getIncome_I(), [Validators.required, Validators.maxLength(70)]],
        p13_income_F: [data.getIncome_F(), [Validators.required, Validators.maxLength(70)]],
        p14_lives_with: [data.getLives_with()],
        p15_has_religion: [data.getHas_religion(), [Validators.required, Validators.maxLength(1)]],
        p15_religion: [data.getReligion(), Validators.maxLength(30)],
        p16_health_self_report: [data.getHealth_self_report(), Validators.required],
        p20_weight: [data.getWeight(), Validators.required],
        p20_height: [data.getHeight(), Validators.required],
        p20_IMC: [data.getIMC(), Validators.required],
        p30_car : [data.getCar(), Validators.required],
        p30_bus : [data.getBus(), Validators.required],
        p30_uber : [data.getUber(), Validators.required],
        p30_ride :  [data.getRide(), Validators.required],
        p30_ride_with : [data.getRide_with(), Validators.required],
        p31_comments : [data.getComments(), Validators.required],
      });
    }
    else 
    {
      this.participantSituationForm = this.fb.group({
        p02_address : ['', [Validators.required, Validators.maxLength(100)]],
        p03_communication : ['', [Validators.required, Validators.maxLength(100)]],
        p07_marital_status: ['', [Validators.required, Validators.maxLength(30)]],
        p08_schooling: ['', [Validators.required, Validators.maxLength(35)]],
        p09_study_time: ['', Validators.required],
        p10_is_retired: ['', [Validators.required, Validators.maxLength(1)]],
        //p10_retired_profession: ['', Validators.maxLength(30)],
        p10_actual_profession: ['', [Validators.required, Validators.maxLength(30)]],
        p11_retire_more_time_activity: ['', Validators.maxLength(30)],
        p12_is_working_professionals_activities: ['', [Validators.required, Validators.maxLength(1)]],
        p12_professional_activities: ['', Validators.maxLength(30)],
        p13_income_I: ['', [Validators.required, Validators.maxLength(70)]],
        p13_income_F: ['', [Validators.required, Validators.maxLength(70)]],
        p14_lives_with: [''],
        p15_has_religion: ['', [Validators.required, Validators.maxLength(1)]],
        p15_religion: ['', Validators.maxLength(30)],
        p16_health_self_report: ['', Validators.required],
        p20_weight: ['', Validators.required],
        p20_height: ['', Validators.required],
        p20_IMC: ['', Validators.required],
        p30_car : ['', Validators.required],
        p30_bus : ['', Validators.required],
        p30_uber : ['', Validators.required],
        p30_ride :  ['', Validators.required],
        p30_ride_with : ['', Validators.required],
        p31_comments : ['', Validators.required],
      });
    }
    return this.participantSituationForm;
  }
}




