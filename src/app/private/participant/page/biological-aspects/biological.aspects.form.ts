import {FormGroup, Validators, FormControl} from '@angular/forms';
import {CriaForm} from '../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { BiologicalAspects} from 'src/app/shared/models/biological-aspects.model';
import { CardiovascularFactorsForm } from './cardiovascular-factors/cardiovascular-factors.form';
import { FunctionalDisabilityForm } from './functional-disability/functional-disability.form';
import { MalnutritionForm } from './malnutrition/malnutrition.form';
import { MisuseMedicationsForm } from './misuse-medications/misuse-medications.form';
import { ObservationsBiologicalForm } from './observations-biological/observations-biological.form';
import { SensoryDeficitForm } from './sensory-deficit/sensory-deficit.form';

@Injectable()
export class BiologicalAspectsForm implements CriaForm {

  private biologicalAspectsForm: FormGroup;
  
  constructor(private cardiovascularFactorsForm: CardiovascularFactorsForm,
            private functionalDisabilityForm: FunctionalDisabilityForm,
            private malnutritionForm : MalnutritionForm,
            private misuseMedicationsForm: MisuseMedicationsForm,
            private sensoryDeficitForm : SensoryDeficitForm,
            private commentsForm : ObservationsBiologicalForm){

  }

  geraFormGroup(data?: BiologicalAspects): FormGroup {
    if (data){
        this.biologicalAspectsForm = new FormGroup({
            'cardiovascularFactorsForm' : this.cardiovascularFactorsForm.geraFormGroup(data.cardiovascularFactorsInstance),
            'functionalDisabilityForm': this.functionalDisabilityForm.geraFormGroup(data.functionalDisabilityInstance),
            'malnutritionForm' : this.malnutritionForm.geraFormGroup(data.malNutritionInstance),
            'misuseMedicationsForm': this.misuseMedicationsForm.geraFormGroup(data.misuseMedicationsInstance),
            'sensoryDeficitForm' : this.sensoryDeficitForm.geraFormGroup(data.sensoryDeficitInstance),
            'commentsForm' : this.commentsForm.geraFormGroup(data.comments)
        });
    }  else  {
        this.biologicalAspectsForm = new FormGroup({
          'cardiovascularFactorsForm' : this.cardiovascularFactorsForm.geraFormGroup(),
          'functionalDisabilityForm': this.functionalDisabilityForm.geraFormGroup(),
          'malnutritionForm' : this.malnutritionForm.geraFormGroup(),
          'misuseMedicationsForm': this.misuseMedicationsForm.geraFormGroup(),
          'sensoryDeficitForm' : this.sensoryDeficitForm.geraFormGroup(),
          'commentsForm' : this.commentsForm.geraFormGroup()
        });
    }
    return this.biologicalAspectsForm;
  }
}
