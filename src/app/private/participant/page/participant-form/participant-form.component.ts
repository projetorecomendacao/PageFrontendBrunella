import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DAOService } from '../../../../shared/dao.service';
import { REST_URL_PARTICIPANT_SITUATION } from '../../../../shared/REST_API_URLs';
import { ParticipantSituation } from '../../../../shared/models/participant.model';
import { PageService } from '../page.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html'
})
export class ParticipantFormComponent implements OnInit {

  private participantSituation: ParticipantSituation;

  private participantSituationForm: FormGroup;

  get p07_marital_status() { return this.participantSituationForm.get('p07_marital_status'); }
  get p08_schooling() { return this.participantSituationForm.get('p08_schooling'); }
  get p09_study_time() { return this.participantSituationForm.get('p09_study_time'); }
  get p10_is_retired() { return this.participantSituationForm.get('p10_is_retired'); }
  get p10_actual_profession() { return this.participantSituationForm.get('p10_actual_profession'); }
  get p12_is_working_professionals_activities() { return this.participantSituationForm.get('p12_is_working_professionals_activities'); }
  get p13_income_I() { return this.participantSituationForm.get('p13_income_I'); }
  get p13_income_F() { return this.participantSituationForm.get('p13_income_F'); }
  get p15_has_religion() { return this.participantSituationForm.get('p15_has_religion'); }
  get p16_health_self_report() { return this.participantSituationForm.get('p16_health_self_report'); }
  get p20_weight() { return this.participantSituationForm.get('p20_weight'); }
  get p20_height() { return this.participantSituationForm.get('p20_height'); }
  get p20_IMC() { return this.participantSituationForm.get('p20_IMC'); }

  constructor(private fb: FormBuilder, private dao: DAOService, private pageService: PageService, private route: Router) {
    // DEBUG
    // route.navigate([route.url + '/multidisciplinary-domain']);
  }

  ngOnInit() {
    if (this.pageService.page.getParticipant_situationId())
      this.dao.getObject(REST_URL_PARTICIPANT_SITUATION, this.pageService.page.getParticipant_situationId().toString()).subscribe(response => {
        this.pageService.page.setParticipant_situation(new ParticipantSituation(response));
        this.participantSituation = this.pageService.participantSituation;
        this.participantSituationForm = this.fb.group({
          p07_marital_status: [this.participantSituation.getQ7(), [Validators.required, Validators.maxLength(30)]],
          p08_schooling: [this.participantSituation.getQ8(), [Validators.required, Validators.maxLength(35)]],
          p09_study_time: [this.participantSituation.getQ9(), Validators.required],
          p10_is_retired: [this.participantSituation.getQ10A(), [Validators.required, Validators.maxLength(1)]],
          p10_retired_profession: [this.participantSituation.getQ10B(), Validators.maxLength(30)],
          p10_actual_profession: [this.participantSituation.getQ10C(), [Validators.required, Validators.maxLength(30)]],
          p11_retire_more_time_activity: [this.participantSituation.getQ11(), Validators.maxLength(30)],
          p12_is_working_professionals_activities: [this.participantSituation.getQ12A(), [Validators.required, Validators.maxLength(1)]],
          p12_professional_activities: [this.participantSituation.getQ12B(), Validators.maxLength(30)],
          p13_income_I: [this.participantSituation.getQ13A(), [Validators.required, Validators.maxLength(70)]],
          p13_income_F: [this.participantSituation.getQ13B(), [Validators.required, Validators.maxLength(70)]],
          p14_lives_with: [this.participantSituation.getQ14()],
          p15_has_religion: [this.participantSituation.getQ15A(), [Validators.required, Validators.maxLength(1)]],
          p15_religion: [this.participantSituation.getQ15B(), Validators.maxLength(30)],
          p16_health_self_report: [this.participantSituation.getQ16(), Validators.required],
          p20_weight: [this.participantSituation.getQ20A(), Validators.required],
          p20_height: [this.participantSituation.getQ20B(), Validators.required],
          p20_IMC: [this.participantSituation.getQ20C(), Validators.required]
        });
      });
    else
      this.participantSituationForm = this.fb.group({
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
    if (this.participantSituationForm.valid)
      if (this.participantSituation) {
        const dirtyProps = { id: this.participantSituation.getId() };
        let hasDirtyProps = false;

        for (const prop in this.participantSituationForm.controls) {
          const propFormControl = this.participantSituationForm.get(prop);
          if (propFormControl.dirty) {
            dirtyProps[prop] = propFormControl.value;
            hasDirtyProps = true;
          }
        }

        if (hasDirtyProps) this.dao.patchObject(REST_URL_PARTICIPANT_SITUATION, dirtyProps).subscribe(data => {
          this.participantSituation = new ParticipantSituation(data);
          this.pageService.setParticipantSituation(this.participantSituation);
        });

      } else this.dao.postObject(REST_URL_PARTICIPANT_SITUATION, this.participantSituationForm.getRawValue()).subscribe(data => {
        this.participantSituation = new ParticipantSituation(data);
        this.pageService.setParticipantSituation(this.participantSituation);
      });
    this.participantSituationForm.markAllAsTouched();
  }
}
