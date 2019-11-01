import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardiovascularFactors, Malnutrition } from '../../../../../shared/models/biological-aspects.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DAOService } from '../../../../../shared/dao.service';
import { REST_URL_CARDIO_VASCULAR_FACTOR } from '../../../../../shared/REST_API_URLs';

@Component({
  selector: 'app-cardiovascular-factors',
  templateUrl: './cardiovascular-factors.component.html'
})
export class CardiovascularFactorsComponent implements OnInit {

  @Input('cardiovascularFactors') cardiovascularFactorsInput: CardiovascularFactors;
  @Output('cardiovascularFactors') cardiovascularFactorsOutput = new EventEmitter<CardiovascularFactors>();

  private cardiovascularFactorsForm: FormGroup;

  get q33_dcv_familiar_history() { return this.cardiovascularFactorsForm.get('q33_dcv_familiar_history'); }
  get q34_hypertension() { return this.cardiovascularFactorsForm.get('q34_hypertension'); }
  get q34_hypertension_unknow() { return this.cardiovascularFactorsForm.get('q34_hypertension_unknow'); }
  get q35_uncontrolled_diabetes() { return this.cardiovascularFactorsForm.get('q35_uncontrolled_diabetes'); }
  get q35_unknown_value_glycemia() { return this.cardiovascularFactorsForm.get('q35_unknown_value_glycemia'); }
  get q36_cholesterol() { return this.cardiovascularFactorsForm.get('q36_cholesterol'); }
  get q36_unknown_value_ct_hdl() { return this.cardiovascularFactorsForm.get('q36_unknown_value_ct_hdl'); }
  get q37_smoker() { return this.cardiovascularFactorsForm.get('q37_smoker'); }
  get q38_practice_150_minutes_exercises() { return this.cardiovascularFactorsForm.get('q38_practice_150_minutes_exercises'); }
  get q39_healthy_eating() { return this.cardiovascularFactorsForm.get('q39_healthy_eating'); }
  get q40_alcohol_Ingested_last_week() { return this.cardiovascularFactorsForm.get('q40_alcohol_Ingested_last_week'); }
  get q40_alcohol_Ingested_last_week_amount() { return this.cardiovascularFactorsForm.get('q40_alcohol_Ingested_last_week_amount'); }
  get q41_bmi_obesity() { return this.cardiovascularFactorsForm.get('q41_bmi_obesity'); }
  get need_investigation_cardio() { return this.cardiovascularFactorsForm.get('need_investigation_cardio'); }

  constructor(private fb: FormBuilder, private dao: DAOService) { }

  ngOnInit() {
    if (this.cardiovascularFactorsInput) this.cardiovascularFactorsForm = this.fb.group({
      q33_dcv_familiar_history: [this.cardiovascularFactorsInput.getQ33(), [Validators.required, Validators.maxLength(1)]],
      q34_hypertension: [this.cardiovascularFactorsInput.getQ34A(), [Validators.required, Validators.maxLength(1)]],
      q34_hypertension_unknow: [this.cardiovascularFactorsInput.getQ34B(), [Validators.required, Validators.maxLength(1)]],
      q35_uncontrolled_diabetes: [this.cardiovascularFactorsInput.getQ35A(), [Validators.required, Validators.maxLength(1)]],
      q35_unknown_value_glycemia: [this.cardiovascularFactorsInput.getQ35B(), [Validators.required, Validators.maxLength(1)]],
      q36_cholesterol: [this.cardiovascularFactorsInput.getQ36A(), [Validators.required, Validators.maxLength(1)]],
      q36_unknown_value_ct_hdl: [this.cardiovascularFactorsInput.getQ36B(), [Validators.required, Validators.maxLength(1)]],
      q37_smoker: [this.cardiovascularFactorsInput.getQ37(), [Validators.required, Validators.maxLength(1)]],
      q38_practice_150_minutes_exercises: [this.cardiovascularFactorsInput.getQ38(), [Validators.required, Validators.maxLength(1)]],
      q39_healthy_eating: [this.cardiovascularFactorsInput.getQ39(), [Validators.required, Validators.maxLength(1)]],
      q40_alcohol_Ingested_last_week: [this.cardiovascularFactorsInput.getQ40A(), [Validators.required, Validators.maxLength(1)]],
      q40_alcohol_Ingested_last_week_amount: [this.cardiovascularFactorsInput.getQ40B(), [Validators.required, Validators.maxLength(1)]],
      q41_bmi_obesity: [this.cardiovascularFactorsInput.getQ41(), [Validators.required, Validators.maxLength(1)]],
      need_investigation_cardio: [this.cardiovascularFactorsInput.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]]
    });
    else this.cardiovascularFactorsForm = this.fb.group({
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
      q40_alcohol_Ingested_last_week_amount: ['', [Validators.required, Validators.maxLength(1)]],
      q41_bmi_obesity: ['', [Validators.required, Validators.maxLength(1)]],
      need_investigation_cardio: ['', [Validators.required, Validators.maxLength(1)]]
    });
  }

  submit() {
    if (this.cardiovascularFactorsForm.valid)
      if (this.cardiovascularFactorsInput) {
        const dirtyProps = {};
        let hasDirtyProps = false;

        for (const prop in this.cardiovascularFactorsForm.controls) {
          const propFormControl = this.cardiovascularFactorsForm.get(prop);
          if (propFormControl.dirty) {
            dirtyProps[prop] = propFormControl.value;
            hasDirtyProps = true;
          }
        }

        if (hasDirtyProps) this.dao.patchObject(REST_URL_CARDIO_VASCULAR_FACTOR, dirtyProps).subscribe(data => {
          this.cardiovascularFactorsInput = new CardiovascularFactors(data);
          this.cardiovascularFactorsOutput.emit(this.cardiovascularFactorsInput);
        });

      } else this.dao.postObject(REST_URL_CARDIO_VASCULAR_FACTOR, this.cardiovascularFactorsForm.getRawValue()).subscribe(data => {
        this.cardiovascularFactorsInput = new CardiovascularFactors(data);
        this.cardiovascularFactorsOutput.emit(this.cardiovascularFactorsInput);
      });
    this.cardiovascularFactorsForm.markAllAsTouched();
  }
}
