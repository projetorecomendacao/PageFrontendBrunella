import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CriaForm } from 'src/app/shared/cria-forms';
import { BiologicalAspectsForm } from './biological-aspects/biological.aspects.form';
import { PsychologicalAspectsForm } from './psychological-aspects/psychological-aspects.form';
import { SocialAspectsForm } from './social-aspects/social-aspects.form';
import { MultidimensionalAspectForm } from './multidimensional-aspect/multidimensional-aspect.form';
import { ParticipantFormForm } from './participant-form/participant-form.form';
import { Page } from 'src/app/shared/models/page.model';
import { CabecaPageForm } from './cabeca-page/cabeca-page.form';
import { FinalAnaliseForm } from './final-analise/final-analise.form';

@Injectable()
export class PageForm implements CriaForm{
    private pageForm : FormGroup;

    constructor(private biologicalAspectsForm: BiologicalAspectsForm,
                private psychologicalAspectsForm: PsychologicalAspectsForm,
                private socialAspectsForm: SocialAspectsForm,
                private multidimensionalAspectsForm: MultidimensionalAspectForm,
                private participantFormForm: ParticipantFormForm,
                private cabecaPageForm : CabecaPageForm,
                private finalAnaliseForm: FinalAnaliseForm){ }


    geraFormGroup(data?: Page): FormGroup {
        if (data){
            this.pageForm = new FormGroup({
                'cabecaPageForm' : this.cabecaPageForm.geraFormGroup(data),
                'biologicalAspectsForm': this.biologicalAspectsForm.geraFormGroup(data.getBiologicalAspects()),
                'psychologicalAspectsForm': this.psychologicalAspectsForm.geraFormGroup(data.getPsychologicalAspects()),
                'socialAspectsForm': this.socialAspectsForm.geraFormGroup(data.getSocialAspects()),
                'multidimensionalAspectsForm': this.multidimensionalAspectsForm.geraFormGroup(data.getMultidisciplinaryDomain()),
                'participantFormForm': this.participantFormForm.geraFormGroup(data.getParticipant_situation()),
                'finalAnaliseForm' : this.finalAnaliseForm.geraFormGroup(data.getFinalAnalise())
            })
        }
        else 
        {
            this.pageForm = new FormGroup({
                'cabecaPageForm' : this.cabecaPageForm.geraFormGroup(),
                'biologicalAspectsForm': this.biologicalAspectsForm.geraFormGroup(),
                'psychologicalAspectsForm': this.psychologicalAspectsForm.geraFormGroup(),
                'socialAspectsForm': this.socialAspectsForm.geraFormGroup(),
                'multidimensionalAspectsForm': this.multidimensionalAspectsForm.geraFormGroup(),
                'participantFormForm': this.participantFormForm.geraFormGroup(),
                'finalAnaliseForm' : this.finalAnaliseForm.geraFormGroup()
            })
        }
        return this.pageForm;
    }
}   

