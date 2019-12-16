import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DAOService } from '../../../../../shared/dao.service';
import { EnvironmentalProblems } from '../../../../../shared/models/social-aspects.model';
import { REST_URL_ENVIRONMENTAL_PROBLEMS } from '../../../../../shared/REST_API_URLs';

@Component({
  selector: 'app-environmental-problems',
  templateUrl: './environmental-problems.component.html'
})
export class EnvironmentalProblemsComponent implements OnInit {

  @Input('environmentalProblems') environmentalProblemsInput: EnvironmentalProblems;
  @Output('environmentalProblems') environmentalProblemsOutput = new EventEmitter<EnvironmentalProblems>();

  private environmentalProblemsForm: FormGroup;

  get q63_estable_furniture() { return this.environmentalProblemsForm.get('q63_estable_furniture'); }
  get q64_loose_objects_carpets() { return this.environmentalProblemsForm.get('q64_loose_objects_carpets'); }
  get q65_slippery_floor() { return this.environmentalProblemsForm.get('q65_slippery_floor'); }
  get q66_handrail_on_stairs() { return this.environmentalProblemsForm.get('q66_handrail_on_stairs'); }
  get q67_lighted_stairs() { return this.environmentalProblemsForm.get('q67_lighted_stairs'); }
  get q68_suitable_stairs_steps() { return this.environmentalProblemsForm.get('q68_suitable_stairs_steps'); }
  get q69_non_slippery_carpet() { return this.environmentalProblemsForm.get('q69_non_slippery_carpet'); }
  get q70_get_on_stool() { return this.environmentalProblemsForm.get('q70_get_on_stool'); }
  get q71_turn_lights_off() { return this.environmentalProblemsForm.get('q71_turn_lights_off'); }
  get q72_safe_shoes() { return this.environmentalProblemsForm.get('q72_safe_shoes'); }
  get q73_manicure_sidewalks() { return this.environmentalProblemsForm.get('q73_manicure_sidewalks'); }
  get q74_public_transport_access() { return this.environmentalProblemsForm.get('q74_public_transport_access'); }
  get q75_commerce_access() { return this.environmentalProblemsForm.get('q75_commerce_access'); }
  get q76_ease_plasewalking() { return this.environmentalProblemsForm.get('q76_ease_plasewalking'); }
  get q77_fun_access() { return this.environmentalProblemsForm.get('q77_fun_access'); }
  get q78_safety() { return this.environmentalProblemsForm.get('q78_safety'); }
  get need_investigation_env() { return this.environmentalProblemsForm.get('need_investigation_env'); }

  constructor(private fb: FormBuilder, private dao: DAOService) { }

  ngOnInit() {
    if (this.environmentalProblemsInput) this.environmentalProblemsForm = this.fb.group({
      q63_estable_furniture: [this.environmentalProblemsInput.getQ63(), [Validators.required, Validators.maxLength(1)]],
      q64_loose_objects_carpets: [this.environmentalProblemsInput.getQ64(), [Validators.required, Validators.maxLength(1)]],
      q65_slippery_floor: [this.environmentalProblemsInput.getQ65(), [Validators.required, Validators.maxLength(1)]],
      q66_handrail_on_stairs: [this.environmentalProblemsInput.getQ66(), [Validators.required, Validators.maxLength(1)]],
      q67_lighted_stairs: [this.environmentalProblemsInput.getQ67(), [Validators.required, Validators.maxLength(1)]],
      q68_suitable_stairs_steps: [this.environmentalProblemsInput.getQ68(), [Validators.required, Validators.maxLength(1)]],
      q69_non_slippery_carpet: [this.environmentalProblemsInput.getQ69(), [Validators.required, Validators.maxLength(1)]],
      q70_get_on_stool: [this.environmentalProblemsInput.getQ70(), [Validators.required, Validators.maxLength(1)]],
      q71_turn_lights_off: [this.environmentalProblemsInput.getQ71(), [Validators.required, Validators.maxLength(1)]],
      q72_safe_shoes: [this.environmentalProblemsInput.getQ72(), [Validators.required, Validators.maxLength(1)]],
      q73_manicure_sidewalks: [this.environmentalProblemsInput.getQ73(), [Validators.required, Validators.maxLength(1)]],
      q74_public_transport_access: [this.environmentalProblemsInput.getQ74(), [Validators.required, Validators.maxLength(1)]],
      q75_commerce_access: [this.environmentalProblemsInput.getQ75(), [Validators.required, Validators.maxLength(1)]],
      q76_ease_plasewalking: [this.environmentalProblemsInput.getQ76(), [Validators.required, Validators.maxLength(1)]],
      q77_fun_access: [this.environmentalProblemsInput.getQ77(), [Validators.required, Validators.maxLength(1)]],
      q78_safety: [this.environmentalProblemsInput.getQ78(), [Validators.required, Validators.maxLength(1)]],
      need_investigation_env: [this.environmentalProblemsInput.getQ78(), [Validators.required, Validators.maxLength(1)]],
    });
    else this.environmentalProblemsForm = this.fb.group({
      q63_estable_furniture: ['', [Validators.required, Validators.maxLength(1)]],
      q64_loose_objects_carpets: ['', [Validators.required, Validators.maxLength(1)]],
      q65_slippery_floor: ['', [Validators.required, Validators.maxLength(1)]],
      q66_handrail_on_stairs: ['', [Validators.required, Validators.maxLength(1)]],
      q67_lighted_stairs: ['', [Validators.required, Validators.maxLength(1)]],
      q68_suitable_stairs_steps: ['', [Validators.required, Validators.maxLength(1)]],
      q69_non_slippery_carpet: ['', [Validators.required, Validators.maxLength(1)]],
      q70_get_on_stool: ['', [Validators.required, Validators.maxLength(1)]],
      q71_turn_lights_off: ['', [Validators.required, Validators.maxLength(1)]],
      q72_safe_shoes: ['', [Validators.required, Validators.maxLength(1)]],
      q73_manicure_sidewalks: ['', [Validators.required, Validators.maxLength(1)]],
      q74_public_transport_access: ['', [Validators.required, Validators.maxLength(1)]],
      q75_commerce_access: ['', [Validators.required, Validators.maxLength(1)]],
      q76_ease_plasewalking: ['', [Validators.required, Validators.maxLength(1)]],
      q77_fun_access: ['', [Validators.required, Validators.maxLength(1)]],
      q78_safety: ['', [Validators.required, Validators.maxLength(1)]],
      need_investigation_env: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }

  submit() {
    if (this.environmentalProblemsForm.valid)
      if (this.environmentalProblemsInput) {
        const dirtyProps = { id: this.environmentalProblemsInput.getId()};
        let hasDirtyProps = false;

        for (const prop in this.environmentalProblemsForm.controls) {
          const propFormControl = this.environmentalProblemsForm.get(prop);
          if (propFormControl.dirty) {
            dirtyProps[prop] = propFormControl.value;
            hasDirtyProps = true;
            propFormControl.markAsPristine();
          }
        }

        if (hasDirtyProps) this.dao.patchObject(REST_URL_ENVIRONMENTAL_PROBLEMS, dirtyProps).subscribe(data => {
          this.environmentalProblemsInput = new EnvironmentalProblems(data);
          this.environmentalProblemsOutput.emit(this.environmentalProblemsInput);
        });

      } else this.dao.postObject(REST_URL_ENVIRONMENTAL_PROBLEMS, this.environmentalProblemsForm.getRawValue()).subscribe(data => {
        this.environmentalProblemsInput = new EnvironmentalProblems(data);
        this.environmentalProblemsOutput.emit(this.environmentalProblemsInput);
      });
    this.environmentalProblemsForm.markAllAsTouched();
  }
}
