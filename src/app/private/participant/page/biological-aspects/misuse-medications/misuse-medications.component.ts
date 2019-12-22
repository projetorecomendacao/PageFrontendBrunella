import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MisuseMedications } from '../../../../../shared/models/biological-aspects.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DAOService } from '../../../../../shared/dao.service';
import { REST_URL_MISUSE_MEDICATION } from '../../../../../shared/REST_API_URLs';

@Component({
  selector: 'app-misuse-medications',
  templateUrl: './misuse-medications.component.html'
})
export class MisuseMedicationsComponent implements OnInit {

  @Input('misuseMedications') misuseMedicationsInput: MisuseMedications;
  @Output('misuseMedications') misuseMedicationsOutput = new EventEmitter<MisuseMedications>();

  private misuseMedicationsForm: FormGroup;

  get q42_diseases_last_5_years_a() { return this.misuseMedicationsForm.get('q42_diseases_last_5_years_a'); }
  get q42_diseases_last_5_years_b() { return this.misuseMedicationsForm.get('q42_diseases_last_5_years_b'); }
  get q42_diseases_last_5_years_c() { return this.misuseMedicationsForm.get('q42_diseases_last_5_years_c'); }
  get q42_diseases_last_5_years_d() { return this.misuseMedicationsForm.get('q42_diseases_last_5_years_d'); }
  get q42_diseases_last_5_years_e() { return this.misuseMedicationsForm.get('q42_diseases_last_5_years_e'); }
  get q42_diseases_last_5_years_f() { return this.misuseMedicationsForm.get('q42_diseases_last_5_years_f'); }
  get q42_diseases_last_5_years_g() { return this.misuseMedicationsForm.get('q42_diseases_last_5_years_g'); }
  get q42_diseases_last_5_years_h() { return this.misuseMedicationsForm.get('q42_diseases_last_5_years_h'); }
  get q42_diseases_last_5_years_i() { return this.misuseMedicationsForm.get('q42_diseases_last_5_years_i'); }
  get q42_diseases_last_5_years_j() { return this.misuseMedicationsForm.get('q42_diseases_last_5_years_j'); }
  get q42_diseases_last_5_years_k() { return this.misuseMedicationsForm.get('q42_diseases_last_5_years_k'); }
  get q42_diseases_last_5_years_l() { return this.misuseMedicationsForm.get('q42_diseases_last_5_years_l'); }
  get q43_health_problems_a() { return this.misuseMedicationsForm.get('q43_health_problems_a'); }
  get q43_health_problems_b() { return this.misuseMedicationsForm.get('q43_health_problems_b'); }
  get q43_health_problems_c() { return this.misuseMedicationsForm.get('q43_health_problems_c'); }
  get q43_health_problems_d() { return this.misuseMedicationsForm.get('q43_health_problems_d'); }
  get q43_health_problems_e() { return this.misuseMedicationsForm.get('q43_health_problems_e'); }
  get q43_health_problems_f() { return this.misuseMedicationsForm.get('q43_health_problems_f'); }
  get q43_health_problems_g() { return this.misuseMedicationsForm.get('q43_health_problems_g'); }
  get q43_health_problems_h() { return this.misuseMedicationsForm.get('q43_health_problems_h'); }
  get q44_amount_diagnostics() { return this.misuseMedicationsForm.get('q44_amount_diagnostics'); }
  get q45_medicines() { return this.misuseMedicationsForm.get('q45_medicines'); }
  get q46_medicines_increase() { return this.misuseMedicationsForm.get('q46_medicines_increase'); }
  get q47_know_medicines() { return this.misuseMedicationsForm.get('q47_know_medicines'); }
  get q48_medications_prescribed() { return this.misuseMedicationsForm.get('q48_medications_prescribed'); }
  get q49_medicine_medical_advice() { return this.misuseMedicationsForm.get('q49_medicine_medical_advice'); }
  get q50_already_stopped_medicines() { return this.misuseMedicationsForm.get('q50_already_stopped_medicines'); }
  get q51_self_medication() { return this.misuseMedicationsForm.get('q51_self_medication'); }
  get q52_inappropriate_medication() { return this.misuseMedicationsForm.get('q52_inappropriate_medication'); }
  get q53_risk_adverse_reaction() { return this.misuseMedicationsForm.get('q53_risk_adverse_reaction'); }
  get need_investigation_misuse() { return this.misuseMedicationsForm.get('need_investigation_misuse'); }

  constructor(private fb: FormBuilder, private dao: DAOService) { }

  ngOnInit() {
    if (this.misuseMedicationsInput) this.misuseMedicationsForm = this.fb.group({
      q42_diseases_last_5_years_a: [this.misuseMedicationsInput.getQ42A(), [Validators.required, Validators.maxLength(1)]],
      q42_diseases_last_5_years_b: [this.misuseMedicationsInput.getQ42B(), [Validators.required, Validators.maxLength(1)]],
      q42_diseases_last_5_years_c: [this.misuseMedicationsInput.getQ42C(), [Validators.required, Validators.maxLength(1)]],
      q42_diseases_last_5_years_d: [this.misuseMedicationsInput.getQ42D(), [Validators.required, Validators.maxLength(1)]],
      q42_diseases_last_5_years_e: [this.misuseMedicationsInput.getQ42E(), [Validators.required, Validators.maxLength(1)]],
      q42_diseases_last_5_years_f: [this.misuseMedicationsInput.getQ42F(), [Validators.required, Validators.maxLength(1)]],
      q42_diseases_last_5_years_g: [this.misuseMedicationsInput.getQ42G(), [Validators.required, Validators.maxLength(1)]],
      q42_diseases_last_5_years_h: [this.misuseMedicationsInput.getQ42H(), [Validators.required, Validators.maxLength(1)]],
      q42_diseases_last_5_years_i: [this.misuseMedicationsInput.getQ42I(), [Validators.required, Validators.maxLength(1)]],
      q42_diseases_last_5_years_j: [this.misuseMedicationsInput.getQ42J(), [Validators.required, Validators.maxLength(1)]],
      q42_diseases_last_5_years_k: [this.misuseMedicationsInput.getQ42K(), [Validators.required, Validators.maxLength(1)]],
      q42_diseases_last_5_years_l: [this.misuseMedicationsInput.getQ42L(), [Validators.maxLength(30)]],
      q43_health_problems_a: [this.misuseMedicationsInput.getQ43A(), [Validators.required, Validators.maxLength(1)]],
      q43_health_problems_b: [this.misuseMedicationsInput.getQ43B(), [Validators.required, Validators.maxLength(1)]],
      q43_health_problems_c: [this.misuseMedicationsInput.getQ43C(), [Validators.required, Validators.maxLength(1)]],
      q43_health_problems_d: [this.misuseMedicationsInput.getQ43D(), [Validators.required, Validators.maxLength(1)]],
      q43_health_problems_e: [this.misuseMedicationsInput.getQ43E(), [Validators.required, Validators.maxLength(1)]],
      q43_health_problems_f: [this.misuseMedicationsInput.getQ43F(), [Validators.required, Validators.maxLength(1)]],
      q43_health_problems_g: [this.misuseMedicationsInput.getQ43G(), [Validators.required, Validators.maxLength(1)]],
      q43_health_problems_h: [this.misuseMedicationsInput.getQ43H(), [Validators.maxLength(30)]],
      q44_amount_diagnostics: [this.misuseMedicationsInput.getQ44(), [Validators.required]],
      q45_medicines: [this.misuseMedicationsInput.getQ45()],
      q46_medicines_increase: [this.misuseMedicationsInput.getQ46(), [Validators.required, Validators.maxLength(1)]],
      q47_know_medicines: [this.misuseMedicationsInput.getQ47(), [Validators.required, Validators.maxLength(1)]],
      q48_medications_prescribed: [this.misuseMedicationsInput.getQ48(), [Validators.required, Validators.maxLength(1)]],
      q49_medicine_medical_advice: [this.misuseMedicationsInput.getQ49(), [Validators.required, Validators.maxLength(1)]],
      q50_already_stopped_medicines: [this.misuseMedicationsInput.getQ50(), [Validators.required, Validators.maxLength(1)]],
      q51_self_medication: [this.misuseMedicationsInput.getQ51(), [Validators.required, Validators.maxLength(1)]],
      q52_inappropriate_medication: [this.misuseMedicationsInput.getQ52(), [Validators.required, Validators.maxLength(1)]],
      q53_risk_adverse_reaction: [this.misuseMedicationsInput.getQ53(), [Validators.required, Validators.maxLength(1)]],
      need_investigation_misuse: [this.misuseMedicationsInput.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
    });
    else this.misuseMedicationsForm = this.fb.group({
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
      need_investigation_misuse: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }

  submit() {
    if (this.misuseMedicationsForm.valid)
      if (this.misuseMedicationsInput) {
        const dirtyProps = { id: this.misuseMedicationsInput.getId() };
        let hasDirtyProps = false;

        for (const prop in this.misuseMedicationsForm.controls) {
          const propFormControl = this.misuseMedicationsForm.get(prop);
          if (propFormControl.dirty) {
            dirtyProps[prop] = propFormControl.value;
            hasDirtyProps = true;
            propFormControl.markAsPristine();
          }
        }

        if (hasDirtyProps) this.dao.patchObject(REST_URL_MISUSE_MEDICATION, dirtyProps).subscribe(data => {
          this.misuseMedicationsInput = new MisuseMedications(data);
          this.misuseMedicationsOutput.emit(this.misuseMedicationsInput);
        });

      } else this.dao.postObject(REST_URL_MISUSE_MEDICATION, this.misuseMedicationsForm.getRawValue()).subscribe(data => {
        this.misuseMedicationsInput = new MisuseMedications(data);
        this.misuseMedicationsOutput.emit(this.misuseMedicationsInput);
      });
    this.misuseMedicationsForm.markAllAsTouched();
  }
}
