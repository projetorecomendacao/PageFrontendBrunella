import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Malnutrition } from '../../../../../shared/models/biological-aspects.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DAOService } from '../../../../../shared/dao.service';
import { REST_URL_MALNUTRITION } from '../../../../../shared/REST_API_URLs';

@Component({
  selector: 'app-malnutrition',
  templateUrl: './malnutrition.component.html'
})
export class MalnutritionComponent implements OnInit {

  @Input('malnutrition') malnutritionInput: Malnutrition;
  @Output('malnutrition') malnutritionOutput = new EventEmitter<Malnutrition>();

  private malnutritionForm: FormGroup;

  get d26_yourself_malnourished() { return this.malnutritionForm.get('d26_yourself_malnourished'); }
  get d27_chewing_mouth_problems() { return this.malnutritionForm.get('d27_chewing_mouth_problems'); }
  get d28_less3_meal_daily() { return this.malnutritionForm.get('d28_less3_meal_daily'); }
  get d29_decreases_amount_food() { return this.malnutritionForm.get('d29_decreases_amount_food'); }
  get d30_lost_weight_no_reason() { return this.malnutritionForm.get('d30_lost_weight_no_reason'); }
  get d31_stress_illness_hospitalization() { return this.malnutritionForm.get('d31_stress_illness_hospitalization'); }
  get q32_bmi_less22() { return this.malnutritionForm.get('q32_bmi_less22'); }
  get need_investigation_malnutrition() { return this.malnutritionForm.get('need_investigation_malnutrition'); }

  constructor(private fb: FormBuilder, private dao: DAOService) { }

  ngOnInit() {
    if (this.malnutritionInput) this.malnutritionForm = this.fb.group({
      d26_yourself_malnourished: [this.malnutritionInput.getQ26(), [Validators.required, Validators.maxLength(1)]],
      d27_chewing_mouth_problems: [this.malnutritionInput.getQ27(), [Validators.required, Validators.maxLength(1)]],
      d28_less3_meal_daily: [this.malnutritionInput.getQ28(), [Validators.required, Validators.maxLength(1)]],
      d29_decreases_amount_food: [this.malnutritionInput.getQ29(), [Validators.required, Validators.maxLength(1)]],
      d30_lost_weight_no_reason: [this.malnutritionInput.getQ30(), [Validators.required, Validators.maxLength(15)]],
      d31_stress_illness_hospitalization: [this.malnutritionInput.getQ31(), [Validators.required, Validators.maxLength(1)]],
      q32_bmi_less22: [this.malnutritionInput.getQ32(), [Validators.required, Validators.maxLength(1)]],
      need_investigation_malnutrition: [this.malnutritionInput.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
    });
    else this.malnutritionForm = this.fb.group({
      d26_yourself_malnourished: ['', [Validators.required, Validators.maxLength(1)]],
      d27_chewing_mouth_problems: ['', [Validators.required, Validators.maxLength(1)]],
      d28_less3_meal_daily: ['', [Validators.required, Validators.maxLength(1)]],
      d29_decreases_amount_food: ['', [Validators.required, Validators.maxLength(1)]],
      d30_lost_weight_no_reason: ['', [Validators.required, Validators.maxLength(15)]],
      d31_stress_illness_hospitalization: ['', [Validators.required, Validators.maxLength(1)]],
      q32_bmi_less22: ['', [Validators.required, Validators.maxLength(1)]],
      need_investigation_malnutrition: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }

  submit() {
    if (this.malnutritionForm.valid)
      if (this.malnutritionInput) {
        const dirtyProps = { id: this.malnutritionInput.getId() };
        let hasDirtyProps = false;

        for (const prop in this.malnutritionForm.controls) {
          const propFormControl = this.malnutritionForm.get(prop);
          if (propFormControl.dirty) {
            dirtyProps[prop] = propFormControl.value;
            hasDirtyProps = true;
            propFormControl.markAsPristine();
          }
        }

        if (hasDirtyProps) this.dao.patchObject(REST_URL_MALNUTRITION, dirtyProps).subscribe(data => {
          this.malnutritionInput = new Malnutrition(data);
          this.malnutritionOutput.emit(this.malnutritionInput);
        });

      } else this.dao.postObject(REST_URL_MALNUTRITION, this.malnutritionForm.getRawValue()).subscribe(data => {
        this.malnutritionInput = new Malnutrition(data);
        this.malnutritionOutput.emit(this.malnutritionInput);
      });
    this.malnutritionForm.markAllAsTouched();
  }
}
