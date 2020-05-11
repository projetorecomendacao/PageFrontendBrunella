import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { MisuseMedications } from 'src/app/shared/models/biological-aspects.model';

@Injectable()
export class MisuseMedicationsForm implements CriaForm {

  private misuseMedicationsForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: MisuseMedications): FormGroup {
    if (data){
      this.misuseMedicationsForm = this.fb.group({
        q42_diseases_last_5_years_a: [data.getQ42A(), [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_b: [data.getQ42B(), [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_c: [data.getQ42C(), [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_d: [data.getQ42D(), [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_e: [data.getQ42E(), [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_f: [data.getQ42F(), [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_g: [data.getQ42G(), [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_h: [data.getQ42H(), [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_i: [data.getQ42I(), [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_j: [data.getQ42J(), [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_k: [data.getQ42K(), [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_l: [data.getQ42L(), [Validators.maxLength(30)]],
        q43_health_problems_a: [data.getQ43A(), [Validators.required, Validators.maxLength(1)]],
        q43_health_problems_b: [data.getQ43B(), [Validators.required, Validators.maxLength(1)]],
        q43_health_problems_c: [data.getQ43C(), [Validators.required, Validators.maxLength(1)]],
        q43_health_problems_d: [data.getQ43D(), [Validators.required, Validators.maxLength(1)]],
        q43_health_problems_e: [data.getQ43E(), [Validators.required, Validators.maxLength(1)]],
        q43_health_problems_f: [data.getQ43F(), [Validators.required, Validators.maxLength(1)]],
        q43_health_problems_g: [data.getQ43G(), [Validators.required, Validators.maxLength(1)]],
        q43_health_problems_h: [data.getQ43H(), [Validators.maxLength(30)]],
        q44_amount_diagnostics: [data.getQ44(), [Validators.required]],
        q45_medicines: [data.getQ45()],
        q46_medicines_increase: [data.getQ46(), [Validators.required, Validators.maxLength(1)]],
        q47_know_medicines: [data.getQ47(), [Validators.required, Validators.maxLength(1)]],
        q48_medications_prescribed: [data.getQ48(), [Validators.required, Validators.maxLength(1)]],
        q49_medicine_medical_advice: [data.getQ49(), [Validators.required, Validators.maxLength(1)]],
        q50_already_stopped_medicines: [data.getQ50(), [Validators.required, Validators.maxLength(1)]],
        q51_self_medication: [data.getQ51(), [Validators.required, Validators.maxLength(1)]],
        q52_inappropriate_medication: [data.getQ52(), [Validators.required, Validators.maxLength(1)]],
        q53_risk_adverse_reaction: [data.getQ53(), [Validators.required, Validators.maxLength(1)]],
        score: [data.getScore(), [Validators.required]],
        need_investigation_misuse: [data.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
      });
    }
    else 
    {
      this.misuseMedicationsForm = this.fb.group({
        q42_diseases_last_5_years_a: ['', [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_b: ['', [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_c: ['', [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_d: ['', [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_e: ['', [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_f: ['', [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_g: ['', [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_h: ['', [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_i: ['', [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_j: ['', [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_k: ['', [Validators.required, Validators.maxLength(1)]],
        q42_diseases_last_5_years_l: ['', [Validators.maxLength(30)]],
        q43_health_problems_a: ['', [Validators.required, Validators.maxLength(1)]],
        q43_health_problems_b: ['', [Validators.required, Validators.maxLength(1)]],
        q43_health_problems_c: ['', [Validators.required, Validators.maxLength(1)]],
        q43_health_problems_d: ['', [Validators.required, Validators.maxLength(1)]],
        q43_health_problems_e: ['', [Validators.required, Validators.maxLength(1)]],
        q43_health_problems_f: ['', [Validators.required, Validators.maxLength(1)]],
        q43_health_problems_g: ['', [Validators.required, Validators.maxLength(1)]],
        q43_health_problems_h: ['', [Validators.maxLength(30)]],
        q44_amount_diagnostics: ['', [Validators.required]],
        q45_medicines: [''],
        q46_medicines_increase: ['', [Validators.required, Validators.maxLength(1)]],
        q47_know_medicines: ['', [Validators.required, Validators.maxLength(1)]],
        q48_medications_prescribed: ['', [Validators.required, Validators.maxLength(1)]],
        q49_medicine_medical_advice: ['', [Validators.required, Validators.maxLength(1)]],
        q50_already_stopped_medicines: ['', [Validators.required, Validators.maxLength(1)]],
        q51_self_medication: ['', [Validators.required, Validators.maxLength(1)]],
        q52_inappropriate_medication: ['', [Validators.required, Validators.maxLength(1)]],
        q53_risk_adverse_reaction: ['', [Validators.required, Validators.maxLength(1)]],
        score: ['', [Validators.required]],
        need_investigation_misuse: ['', [Validators.required, Validators.maxLength(1)]],
      });
    }
    return this.misuseMedicationsForm;
  }
}