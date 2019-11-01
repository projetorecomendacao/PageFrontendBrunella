import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DAOService } from '../../../../../shared/dao.service';
import { REST_URL_SENSORY_DEFICIT } from '../../../../../shared/REST_API_URLs';
import { SensoryDeficit } from '../../../../../shared/models/biological-aspects.model';

@Component({
  selector: 'app-sensory-deficit',
  templateUrl: './sensory-deficit.component.html'
})
export class SensoryDeficitComponent implements OnInit {

  @Input('sensoryDeficit') sensoryDeficitInput: SensoryDeficit;
  @Output('sensoryDeficit') sensoryDeficitOutput = new EventEmitter<SensoryDeficit>();

  private sensoryDeficitForm: FormGroup;

  get q15_vision_problems() { return this.sensoryDeficitForm.get('q15_vision_problems'); }
  get q16_hearing_problems() { return this.sensoryDeficitForm.get('q16_hearing_problems'); }
  get q17_taste_problems() { return this.sensoryDeficitForm.get('q17_taste_problems'); }
  get q18_senses_problems() { return this.sensoryDeficitForm.get('q18_senses_problems'); }
  get q19_interaction_problems() { return this.sensoryDeficitForm.get('q19_interaction_problems'); }
  get need_investigation_sensory() { return this.sensoryDeficitForm.get('need_investigation_sensory'); }

  constructor(private fb: FormBuilder, private dao: DAOService) { }

  ngOnInit() {
    if (this.sensoryDeficitInput) this.sensoryDeficitForm = this.fb.group({
      q15_vision_problems: [this.sensoryDeficitInput.getQ15(), [Validators.required, Validators.maxLength(1)]],
      q16_hearing_problems: [this.sensoryDeficitInput.getQ16(), [Validators.required, Validators.maxLength(1)]],
      q17_taste_problems: [this.sensoryDeficitInput.getQ17(), [Validators.required, Validators.maxLength(1)]],
      q18_senses_problems: [this.sensoryDeficitInput.getQ18(), [Validators.required, Validators.maxLength(1)]],
      q19_interaction_problems: [this.sensoryDeficitInput.getQ19(), [Validators.required, Validators.maxLength(1)]],
      need_investigation_sensory: [this.sensoryDeficitInput.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
    });
    else this.sensoryDeficitForm = this.fb.group({
      q15_vision_problems: ['', [Validators.required, Validators.maxLength(1)]],
      q16_hearing_problems: ['', [Validators.required, Validators.maxLength(1)]],
      q17_taste_problems: ['', [Validators.required, Validators.maxLength(1)]],
      q18_senses_problems: ['', [Validators.required, Validators.maxLength(1)]],
      q19_interaction_problems: ['', [Validators.required, Validators.maxLength(1)]],
      need_investigation_sensory: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }

  submit() {
    if (this.sensoryDeficitForm.valid)
      if (this.sensoryDeficitInput) {
        const dirtyProps = {};
        let hasDirtyProps = false;

        for (const prop in this.sensoryDeficitForm.controls) {
          const propFormControl = this.sensoryDeficitForm.get(prop);
          if (propFormControl.dirty) {
            dirtyProps[prop] = propFormControl.value;
            hasDirtyProps = true;
          }
        }

        if (hasDirtyProps) this.dao.patchObject(REST_URL_SENSORY_DEFICIT, dirtyProps).subscribe(data => {
          this.sensoryDeficitInput = new SensoryDeficit(data);
          this.sensoryDeficitOutput.emit(this.sensoryDeficitInput);
        });

      } else this.dao.postObject(REST_URL_SENSORY_DEFICIT, this.sensoryDeficitForm.getRawValue()).subscribe(data => {
        this.sensoryDeficitInput = new SensoryDeficit(data);
        this.sensoryDeficitOutput.emit(this.sensoryDeficitInput);
      });
    this.sensoryDeficitForm.markAllAsTouched();
  }
}
