import {FormGroup} from '@angular/forms';
import {CriaForm} from '../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { CognitiveDeficitForm } from './cognitive-deficit/cognitive-deficit.form';
import { DepressionForm } from './depression/depression.form';
import { NegativeAttitudesAgingForm } from './negative-attitudes-aging/negative-attitudes-aging.form';
import { ObservationsPsychologicalForm } from './observations-psychological/observations-psychological.form';
import { PsychologicalAspects } from 'src/app/shared/models/psychological-aspects.model';

@Injectable()
export class PsychologicalAspectsForm implements CriaForm {

  private psychologicalAspectsForm: FormGroup;
  
  constructor(private cognitiveDeficitForm: CognitiveDeficitForm,
              private depression: DepressionForm,
              private negativaAttitudesAging: NegativeAttitudesAgingForm,
              private comments: ObservationsPsychologicalForm) { }
  
  geraFormGroup(data?: PsychologicalAspects): FormGroup {
    if (data && data.getId() != -1 ){ 
      this.psychologicalAspectsForm = new FormGroup({
      'cognitiveDeficitForm' : this.cognitiveDeficitForm.geraFormGroup(data.cognitionDeficitInstance),
      'depressionForm' : this.depression.geraFormGroup(data.depressionInstance),
      'negativeAttitudesAgingForm' : this.negativaAttitudesAging.geraFormGroup(data.negativeAttitudesAgingInstance),
      'commentsForm' : this.comments.geraFormGroup(data.comments)});
    }
    else 
    {
      this.psychologicalAspectsForm = new FormGroup({
        'cognitiveDeficitForm' : this.cognitiveDeficitForm.geraFormGroup(),
        'depressionForm' : this.depression.geraFormGroup(),
        'negativeAttitudesAgingForm' : this.negativaAttitudesAging.geraFormGroup(),
        'commentsForm' : this.comments.geraFormGroup()  });
    }
    return this.psychologicalAspectsForm;
  }
}















