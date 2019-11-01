import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DAOService } from '../../../../../shared/dao.service';
import { REST_URL_COGNITION_DEFICIT, REST_URL_DEPRESSION } from '../../../../../shared/REST_API_URLs';
import { CognitionDeficit, Depression } from '../../../../../shared/models/psychological-aspects.model';

@Component({
  selector: 'app-depression',
  templateUrl: './depression.component.html'
})
export class DepressionComponent implements OnInit {

  @Input('depression') depressionInput: Depression;
  @Output('depression') depressionOutput = new EventEmitter<Depression>();

  private depressionForm: FormGroup;

  get q9_satisfied_with_life() { return this.depressionForm.get('q9_satisfied_with_life'); }
  get q10_frequently_sad() { return this.depressionForm.get('q10_frequently_sad'); }
  get q11_stopped_doing_things() { return this.depressionForm.get('q11_stopped_doing_things'); }
  get q12_fear_bad_things_happen() { return this.depressionForm.get('q12_fear_bad_things_happen'); }
  get q13_impatient_disquiet() { return this.depressionForm.get('q13_impatient_disquiet'); }
  get q14_concentration_problem() { return this.depressionForm.get('q14_concentration_problem'); }
  get need_investigation_depression() { return this.depressionForm.get('need_investigation_depression'); }

  constructor(private fb: FormBuilder, private dao: DAOService) { }

  ngOnInit() {
    if (this.depressionInput) this.depressionForm = this.fb.group({
      q9_satisfied_with_life: [this.depressionInput.getQ9(), [Validators.required, Validators.maxLength(1)]],
      q10_frequently_sad: [this.depressionInput.getQ10(), [Validators.required, Validators.maxLength(1)]],
      q11_stopped_doing_things: [this.depressionInput.getQ11(), [Validators.required, Validators.maxLength(1)]],
      q12_fear_bad_things_happen: [this.depressionInput.getQ12(), [Validators.required, Validators.maxLength(1)]],
      q13_impatient_disquiet: [this.depressionInput.getQ13(), [Validators.required, Validators.maxLength(1)]],
      q14_concentration_problem: [this.depressionInput.getQ14(), [Validators.required, Validators.maxLength(1)]],
      need_investigation_depression: [this.depressionInput.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
    });
    else this.depressionForm = this.fb.group({
      q9_satisfied_with_life: ['', [Validators.required, Validators.maxLength(1)]],
      q10_frequently_sad: ['', [Validators.required, Validators.maxLength(1)]],
      q11_stopped_doing_things: ['', [Validators.required, Validators.maxLength(1)]],
      q12_fear_bad_things_happen: ['', [Validators.required, Validators.maxLength(1)]],
      q13_impatient_disquiet: ['', [Validators.required, Validators.maxLength(1)]],
      q14_concentration_problem: ['', [Validators.required, Validators.maxLength(1)]],
      need_investigation_depression: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }

  submit() {
    if (this.depressionForm.valid)
      if (this.depressionInput) {
        const dirtyProps = {};
        let hasDirtyProps = false;

        for (const prop in this.depressionForm.controls) {
          const propFormControl = this.depressionForm.get(prop);
          if (propFormControl.dirty) {
            dirtyProps[prop] = propFormControl.value;
            hasDirtyProps = true;
          }
        }

        if (hasDirtyProps) this.dao.patchObject(REST_URL_DEPRESSION, dirtyProps).subscribe(data => {
          this.depressionInput = new Depression(data);
          this.depressionOutput.emit(this.depressionInput);
        });

      } else this.dao.postObject(REST_URL_DEPRESSION, this.depressionForm.getRawValue()).subscribe(data => {
        this.depressionInput = new Depression(data);
        this.depressionOutput.emit(this.depressionInput);
      });
    this.depressionForm.markAllAsTouched();
  }

}
