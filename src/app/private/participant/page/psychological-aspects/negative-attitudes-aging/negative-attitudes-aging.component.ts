import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DAOService } from '../../../../../shared/dao.service';
import {REST_URL_COGNITION_DEFICIT, REST_URL_NEGATIVE_ATTITUDE_AGING} from '../../../../../shared/REST_API_URLs';
import {CognitionDeficit, NegativeAttitudesAging} from '../../../../../shared/models/psychological-aspects.model';

@Component({
  selector: 'app-negative-attitudes-aging',
  templateUrl: './negative-attitudes-aging.component.html'
})
export class NegativeAttitudesAgingComponent implements OnInit {

  @Input('negativeAttitudesAging') negativeAttitudesAgingInput: number;
  @Output('negativeAttitudesAging') negativeAttitudesAgingOutput = new EventEmitter<NegativeAttitudesAging>();

  private negativeAttitudesAgingForm: FormGroup;

  get q7_age_self_perception() { return this.negativeAttitudesAgingForm.get('q7_age_self_perception'); }
  get q7_age_self_perception_why() { return this.negativeAttitudesAgingForm.get('q7_age_self_perception_why'); }
  get q7_age_self_perception_analyze() { return this.negativeAttitudesAgingForm.get('q7_age_self_perception_analyze'); }
  get q8_aging_positive_points() { return this.negativeAttitudesAgingForm.get('q8_aging_positive_points'); }
  get q8_aging_negative_points() { return this.negativeAttitudesAgingForm.get('q8_aging_negative_points'); }
  get q8_aging_analyse() { return this.negativeAttitudesAgingForm.get('q8_aging_analyse'); }
  get need_investigation_negative() { return this.negativeAttitudesAgingForm.get('need_investigation_negative'); }

  constructor(private fb: FormBuilder, private dao: DAOService) { }

  ngOnInit() {
    if (this.negativeAttitudesAgingInput)
      this.dao.getObject(REST_URL_NEGATIVE_ATTITUDE_AGING, this.negativeAttitudesAgingInput.toString()).subscribe(response => {
        const tmpNegativeAttitudesAgingInput = new NegativeAttitudesAging(response);
        this.negativeAttitudesAgingForm = this.fb.group({
          q7_age_self_perception: [tmpNegativeAttitudesAgingInput.getQ7A(), Validators.required],
          q7_age_self_perception_why: [tmpNegativeAttitudesAgingInput.getQ7B(), Validators.required],
          q7_age_self_perception_analyze: [tmpNegativeAttitudesAgingInput.getQ7C(), [Validators.required, Validators.maxLength(1)]],
          q8_aging_positive_points: [tmpNegativeAttitudesAgingInput.getQ8A(), Validators.required],
          q8_aging_negative_points: [tmpNegativeAttitudesAgingInput.getQ8B(), Validators.required],
          q8_aging_analyse: [tmpNegativeAttitudesAgingInput.getQ8C(), [Validators.required, Validators.maxLength(1)]],
          need_investigation_negative: [tmpNegativeAttitudesAgingInput.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]]
        });
      });
    else
      this.negativeAttitudesAgingForm = this.fb.group({
        q7_age_self_perception: ['', Validators.required],
        q7_age_self_perception_why: ['', Validators.required],
        q7_age_self_perception_analyze: ['', [Validators.required, Validators.maxLength(1)]],
        q8_aging_positive_points: ['', Validators.required],
        q8_aging_negative_points: ['', Validators.required],
        q8_aging_analyse: ['', [Validators.required, Validators.maxLength(1)]],
        need_investigation_negative: ['', [Validators.required, Validators.maxLength(1)]]
      });
  }

  submit() {
    if (this.negativeAttitudesAgingForm.valid)
      if (this.negativeAttitudesAgingInput) {
        const dirtyProps = { id: this.negativeAttitudesAgingInput };
        let hasDirtyProps = false;

        for (const prop in this.negativeAttitudesAgingForm.controls) {
          const propFormControl = this.negativeAttitudesAgingForm.get(prop);
          if (propFormControl.dirty) {
            dirtyProps[prop] = propFormControl.value;
            hasDirtyProps = true;
            propFormControl.markAsPristine();
          }
        }

        if (hasDirtyProps) this.dao.patchObject(REST_URL_NEGATIVE_ATTITUDE_AGING, dirtyProps).subscribe(data => this.negativeAttitudesAgingOutput.emit(new NegativeAttitudesAging(data)));

      } else this.dao.postObject(REST_URL_NEGATIVE_ATTITUDE_AGING, this.negativeAttitudesAgingForm.getRawValue()).subscribe(data => this.negativeAttitudesAgingOutput.emit(new NegativeAttitudesAging(data)));
    this.negativeAttitudesAgingForm.markAllAsTouched();
  }

}
