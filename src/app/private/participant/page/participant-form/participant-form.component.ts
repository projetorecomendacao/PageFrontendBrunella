import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DAOService } from '../../../../shared/dao.service';
import { REST_URL_DEPRESSION, REST_URL_PARTICIPANT_SITUATION } from '../../../../shared/REST_API_URLs';
import { Depression } from '../../../../shared/models/psychological-aspects.model';
import { ParticipantSituation } from '../../../../shared/models/participant.model';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html'
})
export class ParticipantFormComponent implements OnInit {

  @Input('participantForm') participantFormInput: ParticipantSituation;
  @Output('participantForm') participantFormOutput = new EventEmitter<ParticipantSituation>();

  private participantForm: FormGroup;

  get p07_marital_status() { return this.participantForm.get('p07_marital_status'); }
  get p08_schooling() { return this.participantForm.get('p08_schooling'); }
  get p09_study_time() { return this.participantForm.get('p09_study_time'); }
  get p10_is_retired() { return this.participantForm.get('p10_is_retired'); }
  get p10_actual_profession() { return this.participantForm.get('p10_actual_profession'); }
  get p12_is_working_professionals_activities() { return this.participantForm.get('p12_is_working_professionals_activities'); }
  get p13_income_I() { return this.participantForm.get('p13_income_I'); }
  get p13_income_F() { return this.participantForm.get('p13_income_F'); }
  get p15_has_religion() { return this.participantForm.get('p15_has_religion'); }
  get p16_health_self_report() { return this.participantForm.get('p16_health_self_report'); }
  get p20_weight() { return this.participantForm.get('p20_weight'); }
  get p20_height() { return this.participantForm.get('p20_height'); }
  get p20_IMC() { return this.participantForm.get('p20_IMC'); }

  constructor(private fb: FormBuilder, private dao: DAOService) { }

  ngOnInit() {
    console.log(this.participantFormInput);
    if (this.participantFormInput) this.participantForm = this.fb.group({
      p07_marital_status: [this.participantFormInput.getQ7(), [Validators.required, Validators.maxLength(30)]],
      p08_schooling: [this.participantFormInput.getQ8(), [Validators.required, Validators.maxLength(35)]],
      p09_study_time: [this.participantFormInput.getQ9(), Validators.required],
      p10_is_retired: [this.participantFormInput.getQ10A(), [Validators.required, Validators.maxLength(1)]],
      p10_retired_profession: [this.participantFormInput.getQ10B(), Validators.maxLength(30)],
      p10_actual_profession: [this.participantFormInput.getQ10C(), [Validators.required, Validators.maxLength(30)]],
      p11_retire_more_time_activity: [this.participantFormInput.getQ11(), Validators.maxLength(30)],
      p12_is_working_professionals_activities: [this.participantFormInput.getQ12A(), [Validators.required, Validators.maxLength(1)]],
      p12_professional_activities: [this.participantFormInput.getQ12B(), Validators.maxLength(30)],
      p13_income_I: [this.participantFormInput.getQ13A(), [Validators.required, Validators.maxLength(70)]],
      p13_income_F: [this.participantFormInput.getQ13B(), [Validators.required, Validators.maxLength(70)]],
      p14_lives_with: [this.participantFormInput.getQ14()],
      p15_has_religion: [this.participantFormInput.getQ15A(), [Validators.required, Validators.maxLength(1)]],
      p15_religion: [this.participantFormInput.getQ15B(), Validators.maxLength(30)],
      p16_health_self_report: [this.participantFormInput.getQ16(), Validators.required],
      p20_weight: [this.participantFormInput.getQ20A(), Validators.required],
      p20_height: [this.participantFormInput.getQ20B(), Validators.required],
      p20_IMC: [this.participantFormInput.getQ20C(), Validators.required]
    });
    else this.participantForm = this.fb.group({
      p07_marital_status: ['', [Validators.required, Validators.maxLength(30)]],
      p08_schooling: ['', [Validators.required, Validators.maxLength(35)]],
      p09_study_time: ['', Validators.required],
      p10_is_retired: ['', [Validators.required, Validators.maxLength(1)]],
      p10_retired_profession: ['', Validators.maxLength(30)],
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
      p20_IMC: ['', Validators.required]
    });
  }

  submit() {
    if (this.participantForm.valid)
      if (this.participantFormInput) {
        const dirtyProps = {};
        let hasDirtyProps = false;

        for (const prop in this.participantForm.controls) {
          const propFormControl = this.participantForm.get(prop);
          if (propFormControl.dirty) {
            dirtyProps[prop] = propFormControl.value;
            hasDirtyProps = true;
          }
        }

        if (hasDirtyProps) this.dao.patchObject(REST_URL_PARTICIPANT_SITUATION, dirtyProps).subscribe(data => {
          this.participantFormInput = new ParticipantSituation(data);
          this.participantFormOutput.emit(this.participantFormInput);
        });

      } else this.dao.postObject(REST_URL_PARTICIPANT_SITUATION, this.participantForm.getRawValue()).subscribe(data => {
        this.participantFormInput = new ParticipantSituation(data);
        this.participantFormOutput.emit(this.participantFormInput);
      });
    this.participantForm.markAllAsTouched();
  }

}
