import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DAOService } from '../../../../../shared/dao.service';
import { LowSocialSupport } from '../../../../../shared/models/social-aspects.model';
import { REST_URL_LOW_SOCIAL_SUPPORT } from '../../../../../shared/REST_API_URLs';

@Component({
  selector: 'app-low-social-support',
  templateUrl: './low-social-support.component.html'
})
export class LowSocialSupportComponent implements OnInit {

  @Input('lowSocialSupport') lowSocialSupportInput: LowSocialSupport;
  @Output('lowSocialSupport') lowSocialSupportOutput = new EventEmitter<LowSocialSupport>();

  private lowSocialSupportForm: FormGroup;

  get q54_spouse() { return this.lowSocialSupportForm.get('q54_spouse'); }
  get q54_mother() { return this.lowSocialSupportForm.get('q54_mother'); }
  get q54_father() { return this.lowSocialSupportForm.get('q54_father'); }
  get q54_brothers() { return this.lowSocialSupportForm.get('q54_brothers'); }
  get q54_children() { return this.lowSocialSupportForm.get('q54_children'); }
  get q54_gran_children() { return this.lowSocialSupportForm.get('q54_gran_children'); }
  get q55_meet_family_friends() { return this.lowSocialSupportForm.get('q55_meet_family_friends'); }
  get q56_participate_family_decisions() { return this.lowSocialSupportForm.get('q56_participate_family_decisions'); }
  get q57_satisfied_family_relationship() { return this.lowSocialSupportForm.get('q57_satisfied_family_relationship'); }
  get q58_helped_if_need_money() { return this.lowSocialSupportForm.get('q58_helped_if_need_money'); }
  get q59_someone_helps_if_need() { return this.lowSocialSupportForm.get('q59_someone_helps_if_need'); }
  get q60_someone_to_have_fun() { return this.lowSocialSupportForm.get('q60_someone_to_have_fun'); }
  get q61_participate_social_events() { return this.lowSocialSupportForm.get('q61_participate_social_events'); }
  get q62_regulary_healt_services() { return this.lowSocialSupportForm.get('q62_regulary_healt_services'); }
  get need_investigation_low() { return this.lowSocialSupportForm.get('need_investigation_low'); }

  constructor(private fb: FormBuilder, private dao: DAOService) { }

  ngOnInit() {
    if (this.lowSocialSupportInput) this.lowSocialSupportForm = this.fb.group({
      q54_spouse: [this.lowSocialSupportInput.getQ54A(), [Validators.required, Validators.maxLength(1)]],
      q54_mother: [this.lowSocialSupportInput.getQ54B(), [Validators.required, Validators.maxLength(1)]],
      q54_father: [this.lowSocialSupportInput.getQ54C(), [Validators.required, Validators.maxLength(1)]],
      q54_brothers: [this.lowSocialSupportInput.getQ54D(), [Validators.required]],
      q54_children: [this.lowSocialSupportInput.getQ54E(), [Validators.required]],
      q54_gran_children: [this.lowSocialSupportInput.getQ54F(), [Validators.required]],
      q55_meet_family_friends: [this.lowSocialSupportInput.getQ55(), [Validators.required, Validators.maxLength(1)]],
      q56_participate_family_decisions: [this.lowSocialSupportInput.getQ56(), [Validators.required, Validators.maxLength(1)]],
      q57_satisfied_family_relationship: [this.lowSocialSupportInput.getQ57(), [Validators.required, Validators.maxLength(1)]],
      q58_helped_if_need_money: [this.lowSocialSupportInput.getQ58(), [Validators.required, Validators.maxLength(1)]],
      q59_someone_helps_if_need: [this.lowSocialSupportInput.getQ59(), [Validators.required, Validators.maxLength(1)]],
      q60_someone_to_have_fun: [this.lowSocialSupportInput.getQ60(), [Validators.required, Validators.maxLength(1)]],
      q61_participate_social_events: [this.lowSocialSupportInput.getQ61(), [Validators.required, Validators.maxLength(1)]],
      q62_regulary_healt_services: [this.lowSocialSupportInput.getQ62(), [Validators.required, Validators.maxLength(1)]],
      need_investigation_low: [this.lowSocialSupportInput.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
    });
    else this.lowSocialSupportForm = this.fb.group({
      q54_spouse: ['', [Validators.required, Validators.maxLength(1)]],
      q54_mother: ['', [Validators.required, Validators.maxLength(1)]],
      q54_father: ['', [Validators.required, Validators.maxLength(1)]],
      q54_brothers: ['', [Validators.required]],
      q54_children: ['', [Validators.required]],
      q54_gran_children: ['', [Validators.required]],
      q55_meet_family_friends: ['', [Validators.required, Validators.maxLength(1)]],
      q56_participate_family_decisions: ['', [Validators.required, Validators.maxLength(1)]],
      q57_satisfied_family_relationship: ['', [Validators.required, Validators.maxLength(1)]],
      q58_helped_if_need_money: ['', [Validators.required, Validators.maxLength(1)]],
      q59_someone_helps_if_need: ['', [Validators.required, Validators.maxLength(1)]],
      q60_someone_to_have_fun: ['', [Validators.required, Validators.maxLength(1)]],
      q61_participate_social_events: ['', [Validators.required, Validators.maxLength(1)]],
      q62_regulary_healt_services: ['', [Validators.required, Validators.maxLength(1)]],
      need_investigation_low: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }

  submit() {
    if (this.lowSocialSupportForm.valid)
      if (this.lowSocialSupportInput) {
        const dirtyProps = {};
        let hasDirtyProps = false;

        for (const prop in this.lowSocialSupportForm.controls) {
          const propFormControl = this.lowSocialSupportForm.get(prop);
          if (propFormControl.dirty) {
            dirtyProps[prop] = propFormControl.value;
            hasDirtyProps = true;
          }
        }

        if (hasDirtyProps) this.dao.patchObject(REST_URL_LOW_SOCIAL_SUPPORT, dirtyProps).subscribe(data => {
          this.lowSocialSupportInput = new LowSocialSupport(data);
          this.lowSocialSupportOutput.emit(this.lowSocialSupportInput);
        });

      } else this.dao.postObject(REST_URL_LOW_SOCIAL_SUPPORT, this.lowSocialSupportForm.getRawValue()).subscribe(data => {
        this.lowSocialSupportInput = new LowSocialSupport(data);
        this.lowSocialSupportOutput.emit(this.lowSocialSupportInput);
      });
    this.lowSocialSupportForm.markAllAsTouched();
  }
}
