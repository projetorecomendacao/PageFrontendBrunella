import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {REST_URL_COGNITION_DEFICIT, REST_URL_PARTICIPANT_SITUATION} from '../../../../../shared/REST_API_URLs';
import { DAOService } from '../../../../../shared/dao.service';
import { CognitionDeficit } from '../../../../../shared/models/psychological-aspects.model';
import {ParticipantSituation} from '../../../../../shared/models/participant.model';

@Component({
  selector: 'app-cognitive-deficit',
  templateUrl: './cognitive-deficit.component.html'
})
export class CognitiveDeficitComponent implements OnInit {

  @Input('cognitionDeficit') cognitionDeficitInput: number;
  @Output('cognitionDeficit') cognitionDeficitOutput = new EventEmitter<CognitionDeficit>();

  private cognitiveDeficitForm: FormGroup;

  get q1_memory_good_like_before() { return this.cognitiveDeficitForm.get('q1_memory_good_like_before'); }
  get q2_memory_test() { return this.cognitiveDeficitForm.get('q2_memory_test'); }
  get q3_language_function_attention() { return this.cognitiveDeficitForm.get('q3_language_function_attention'); }
  get q4_visospatial_ability() { return this.cognitiveDeficitForm.get('q4_visospatial_ability'); }
  get q4_visospatial_ability_score() { return this.cognitiveDeficitForm.get('q4_visospatial_ability_score'); }
  get q5_praxia() { return this.cognitiveDeficitForm.get('q5_praxia'); }
  get q6_memory_test() { return this.cognitiveDeficitForm.get('q6_memory_test'); }
  get need_investigation_cognition() { return this.cognitiveDeficitForm.get('need_investigation_cognition'); }

  constructor(private fb: FormBuilder, private dao: DAOService) { }

  ngOnInit() {
    if (this.cognitionDeficitInput)
      this.dao.getObject(REST_URL_COGNITION_DEFICIT, this.cognitionDeficitInput.toString()).subscribe(response => {
        const tmpCognitionDeficit = new CognitionDeficit(response);
        this.cognitiveDeficitForm = this.fb.group({
          q1_memory_good_like_before: [tmpCognitionDeficit.getQ1(), [Validators.required, Validators.maxLength(1)]],
          q2_memory_test: [tmpCognitionDeficit.getQ2(), [Validators.required, Validators.maxLength(1)]],
          q3_language_function_attention: [tmpCognitionDeficit.getQ3(), [Validators.required, Validators.maxLength(1)]],
          q4_visospatial_ability: [tmpCognitionDeficit.getQ4A(), [Validators.required, Validators.maxLength(1)]],
          q4_visospatial_ability_score: [tmpCognitionDeficit.getQ4B(), Validators.required],
          q5_praxia: [tmpCognitionDeficit.getQ5(), [Validators.required, Validators.maxLength(1)]],
          q6_memory_test: [tmpCognitionDeficit.getQ6(), [Validators.required, Validators.maxLength(1)]],
          need_investigation_cognition: [tmpCognitionDeficit.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]]
        });
      });
    else
        this.cognitiveDeficitForm = this.fb.group({
          q1_memory_good_like_before: ['', [Validators.required, Validators.maxLength(1)]],
          q2_memory_test: ['', [Validators.required, Validators.maxLength(1)]],
          q3_language_function_attention: ['', [Validators.required, Validators.maxLength(1)]],
          q4_visospatial_ability: ['', [Validators.required, Validators.maxLength(1)]],
          q4_visospatial_ability_score: ['', Validators.required],
          q5_praxia: ['', [Validators.required, Validators.maxLength(1)]],
          q6_memory_test: ['', [Validators.required, Validators.maxLength(1)]],
          need_investigation_cognition: ['', [Validators.required, Validators.maxLength(1)]]
        });
  }

  submit() {
    if (this.cognitiveDeficitForm.valid)
      if (this.cognitionDeficitInput) {
        const dirtyProps = { id: this.cognitionDeficitInput };
        let hasDirtyProps = false;

        for (const prop in this.cognitiveDeficitForm.controls) {
          const propFormControl = this.cognitiveDeficitForm.get(prop);
          if (propFormControl.dirty) {
            dirtyProps[prop] = propFormControl.value;
            hasDirtyProps = true;
            propFormControl.markAsPristine();
          }
        }

        if (hasDirtyProps) this.dao.patchObject(REST_URL_COGNITION_DEFICIT, dirtyProps).subscribe(data => this.cognitionDeficitOutput.emit(new CognitionDeficit(data)));

      } else this.dao.postObject(REST_URL_COGNITION_DEFICIT, this.cognitiveDeficitForm.getRawValue()).subscribe(data => this.cognitionDeficitOutput.emit(new CognitionDeficit(data)));
    this.cognitiveDeficitForm.markAllAsTouched();
  }
}
