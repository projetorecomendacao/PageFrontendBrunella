import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { CognitionDeficit } from 'src/app/shared/models/psychological-aspects.model';

@Injectable()
export class CognitiveDeficitForm implements CriaForm {

  private cognitiveDeficitForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: CognitionDeficit): FormGroup {
      if (data){
          this.cognitiveDeficitForm = this.fb.group({
            q1_memory_good_like_before: [data.getQ1(), [Validators.required, Validators.maxLength(1)]],
            q2_memory_test: [data.getQ2A(), [Validators.required, Validators.maxLength(1)]],
            q2_memory_test_score: [data.getQ2B(), [Validators.required, Validators.min(0), Validators.max(7)]],
            q3_language_function_attention: [data.getQ3A(), [Validators.required, Validators.maxLength(1)]],
            q3_language_function_attention_score: [data.getQ3B(), [Validators.required,Validators.min(0), Validators.max(100)]],
            q3_language_function_attention_15: [data.getQ3_15(), [Validators.required]],
            q3_language_function_attention_30: [data.getQ3_30(), [Validators.required]],
            q3_language_function_attention_45: [data.getQ3_45(), [Validators.required]],
            q3_language_function_attention_60: [data.getQ3_60(), [Validators.required]],            
            q4_visospatial_ability: [data.getQ4A(), [Validators.required, Validators.maxLength(1)]],
            q4_visospatial_ability_score: [data.getQ4B(), [Validators.required, Validators.min(0), Validators.max(4)]],
            q5_praxia: [data.getQ5A(), [Validators.required, Validators.maxLength(1)]],
            q5_praxia_score: [data.getQ5B(), [Validators.required,Validators.min(0), Validators.max(3)]],
            q6_memory_test: [data.getQ6A(), [Validators.required, Validators.maxLength(1)]],
            q6_memory_test_score: [data.getQ6B(), [Validators.required,Validators.min(0), Validators.max(7)]],
            score :  [data.getScoreCognition(),[Validators.required]],
            need_investigation_cognition: [data.getNeedInvestigation(), [Validators.required]]
          });
    }
    else 
    {
          this.cognitiveDeficitForm = this.fb.group({
            q1_memory_good_like_before: ['', [Validators.required, Validators.maxLength(1)]],
            q2_memory_test: ['', [Validators.required, Validators.maxLength(1)]],
            q2_memory_test_score: ['', [Validators.required, Validators.min(0), Validators.max(7)]],
            q3_language_function_attention: ['', [Validators.required, Validators.maxLength(1)]],
            q3_language_function_attention_score: ['', [Validators.required,Validators.min(0), Validators.max(100)]],
            q3_language_function_attention_15: ['', [Validators.required]],
            q3_language_function_attention_30: ['', [Validators.required]],
            q3_language_function_attention_45: ['', [Validators.required]],
            q3_language_function_attention_60: ['', [Validators.required]],            
            q4_visospatial_ability: ['', [Validators.required, Validators.maxLength(1)]],
            q4_visospatial_ability_score: ['', [Validators.required, Validators.min(0), Validators.max(4)]],
            q5_praxia: ['', [Validators.required, Validators.maxLength(1)]],
            q5_praxia_score: ['', [Validators.required,Validators.min(0), Validators.max(3)]],
            q6_memory_test: ['', [Validators.required, Validators.maxLength(1)]],
            q6_memory_test_score: ['', [Validators.required, Validators.min(0), Validators.max(7)]],
            score :  ['',[Validators.required]],
            need_investigation_cognition: ['', [Validators.required]]
          });
    }
    return this.cognitiveDeficitForm;
  }
}
