import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DAOService } from '../../../../../shared/dao.service';
import { REST_URL_FALLS } from '../../../../../shared/REST_API_URLs';
import { Falls } from '../../../../../shared/models/multidimentional-aspects';

@Component({
  selector: 'app-falls',
  templateUrl: './falls.component.html'
})
export class FallsComponent implements OnInit {

  @Input('falls') fallsInput: Falls;
  @Output('falls') fallsOutput = new EventEmitter<Falls>();

  private fallsForm: FormGroup;

  get q87_falls_last_year() { return this.fallsForm.get('q87_falls_last_year'); }
  get q87_amount_falls_last_year() { return this.fallsForm.get('q87_amount_falls_last_year'); }
  get q88_fractures_due_to_falls() { return this.fallsForm.get('q88_fractures_due_to_falls'); }
  get q88_fractures_due_to_falls_list() { return this.fallsForm.get('q88_fractures_due_to_falls_list'); }
  get q89_fractures_list() { return this.fallsForm.get('q89_fractures_list'); }
  get q90_strength_mmii() { return this.fallsForm.get('q90_strength_mmii'); }
  get q91_equilibrium() { return this.fallsForm.get('q91_equilibrium'); }
  get q92_older_than75() { return this.fallsForm.get('q92_older_than75'); }
  get q93_female() { return this.fallsForm.get('q93_female'); }
  get q94_cognitive_alterations() { return this.fallsForm.get('q94_cognitive_alterations'); }
  get q95_av_ds_commitment() { return this.fallsForm.get('q95_av_ds_commitment'); }
  get q96_visual_deficit() { return this.fallsForm.get('q96_visual_deficit'); }
  get q97_domestic_risks() { return this.fallsForm.get('q97_domestic_risks'); }
  get q98_behavior_risk() { return this.fallsForm.get('q98_behavior_risk'); }
  get q99_inactivity() { return this.fallsForm.get('q99_inactivity'); }
  get q100_prior_ave() { return this.fallsForm.get('q100_prior_ave'); }
  get q101_psychotropic_medications_use() { return this.fallsForm.get('q101_psychotropic_medications_use'); }
  get q102_has_diseases() { return this.fallsForm.get('q102_has_diseases'); }
  get need_investigation_falls() { return this.fallsForm.get('need_investigation_falls'); }

  constructor(private fb: FormBuilder, private dao: DAOService) { }

  ngOnInit() {
    if (this.fallsInput) this.fallsForm = this.fb.group({
      q87_falls_last_year: [this.fallsInput.getQ87A(), [Validators.required, Validators.maxLength(1)]],
      q87_amount_falls_last_year: [this.fallsInput.getQ87B()],
      q88_fractures_due_to_falls: [this.fallsInput.getQ88A(), [Validators.required, Validators.maxLength(1)]],
      q88_fractures_due_to_falls_list: [this.fallsInput.getQ88B()],
      q89_fractures_list: [this.fallsInput.getQ89()],
      q90_strength_mmii: [this.fallsInput.getQ90(), [Validators.required, Validators.maxLength(1)]],
      q91_equilibrium: [this.fallsInput.getQ91(), [Validators.required, Validators.maxLength(1)]],
      q92_older_than75: [this.fallsInput.getQ92(), [Validators.required, Validators.maxLength(1)]],
      q93_female: [this.fallsInput.getQ93(), [Validators.required, Validators.maxLength(1)]],
      q94_cognitive_alterations: [this.fallsInput.getQ94(), [Validators.required, Validators.maxLength(1)]],
      q95_av_ds_commitment: [this.fallsInput.getQ95(), [Validators.required, Validators.maxLength(1)]],
      q96_visual_deficit: [this.fallsInput.getQ96(), [Validators.required, Validators.maxLength(1)]],
      q97_domestic_risks: [this.fallsInput.getQ97(), [Validators.required, Validators.maxLength(1)]],
      q98_behavior_risk: [this.fallsInput.getQ98(), [Validators.required, Validators.maxLength(1)]],
      q99_inactivity: [this.fallsInput.getQ99(), [Validators.required, Validators.maxLength(1)]],
      q100_prior_ave: [this.fallsInput.getQ100(), [Validators.required, Validators.maxLength(1)]],
      q101_psychotropic_medications_use: [this.fallsInput.getQ101(), [Validators.required, Validators.maxLength(1)]],
      q102_has_diseases: [this.fallsInput.getQ102(), [Validators.required, Validators.maxLength(1)]],
      need_investigation_falls: [this.fallsInput.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
    });
    else this.fallsForm = this.fb.group({
      q87_falls_last_year: ['', [Validators.required, Validators.maxLength(1)]],
      q87_amount_falls_last_year: ['', [Validators.required]],
      q88_fractures_due_to_falls: ['', [Validators.required, Validators.maxLength(1)]],
      q88_fractures_due_to_falls_list: ['', [Validators.required]],
      q89_fractures_list: ['', [Validators.required]],
      q90_strength_mmii: ['', [Validators.required, Validators.maxLength(1)]],
      q91_equilibrium: ['', [Validators.required, Validators.maxLength(1)]],
      q92_older_than75: ['', [Validators.required, Validators.maxLength(1)]],
      q93_female: ['', [Validators.required, Validators.maxLength(1)]],
      q94_cognitive_alterations: ['', [Validators.required, Validators.maxLength(1)]],
      q95_av_ds_commitment: ['', [Validators.required, Validators.maxLength(1)]],
      q96_visual_deficit: ['', [Validators.required, Validators.maxLength(1)]],
      q97_domestic_risks: ['', [Validators.required, Validators.maxLength(1)]],
      q98_behavior_risk: ['', [Validators.required, Validators.maxLength(1)]],
      q99_inactivity: ['', [Validators.required, Validators.maxLength(1)]],
      q100_prior_ave: ['', [Validators.required, Validators.maxLength(1)]],
      q101_psychotropic_medications_use: ['', [Validators.required, Validators.maxLength(1)]],
      q102_has_diseases: ['', [Validators.required, Validators.maxLength(1)]],
      need_investigation_falls: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }

  submit() {
    if (this.fallsForm.valid)
      if (this.fallsInput) {
        const dirtyProps = {};
        let hasDirtyProps = false;

        for (const prop in this.fallsForm.controls) {
          const propFormControl = this.fallsForm.get(prop);
          if (propFormControl.dirty) {
            dirtyProps[prop] = propFormControl.value;
            hasDirtyProps = true;
          }
        }

        if (hasDirtyProps) this.dao.patchObject(REST_URL_FALLS, dirtyProps).subscribe(data => {
          this.fallsInput = new Falls(data);
          this.fallsOutput.emit(this.fallsInput);
        });

      } else this.dao.postObject(REST_URL_FALLS, this.fallsForm.getRawValue()).subscribe(data => {
        this.fallsInput = new Falls(data);
        this.fallsOutput.emit(this.fallsInput);
      });
    this.fallsForm.markAllAsTouched();
  }
}
