import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParticipantComponent } from './participant/participant.component';
import { SidebarComponent } from './participant/sidebar/sidebar.component';
import { ParticipantInfoComponent } from './participant/participant-info/participant-info.component';
import { PageComponent } from './participant/page/page.component';
import { CognitiveDeficitComponent } from './participant/page/psychological-aspects/cognitive-deficit/cognitive-deficit.component';
import { DepressionComponent } from './participant/page/psychological-aspects/depression/depression.component';
import { PsychologicalAspectsComponent } from './participant/page/psychological-aspects/psychological-aspects.component';
import { ParticipantFormComponent } from './participant/page/participant-form/participant-form.component';
import { BiologicalAspectsComponent } from './participant/page/biological-aspects/biological-aspects.component';
import { SensoryDeficitComponent } from './participant/page/biological-aspects/sensory-deficit/sensory-deficit.component';
import { FunctionalDisabilityComponent } from './participant/page/biological-aspects/functional-disability/functional-disability.component';
import { MalnutritionComponent } from './participant/page/biological-aspects/malnutrition/malnutrition.component';
import { MisuseMedicationsComponent } from './participant/page/biological-aspects/misuse-medications/misuse-medications.component';
import { SocialAspectsComponent } from './participant/page/social-aspects/social-aspects.component';
import { LowSocialSupportComponent } from './participant/page/social-aspects/low-social-support/low-social-support.component';
import { EnvironmentalProblemsComponent } from './participant/page/social-aspects/environmental-problems/environmental-problems.component';
import { ViolenceComponent } from './participant/page/social-aspects/violence/violence.component';
import { ObservationsSocialComponent } from './participant/page/social-aspects/observations-social/observations-social.component';
import { MultidimensionalAspectComponent } from './participant/page/multidimensional-aspect/multidimensional-aspect.component';
import { FallsComponent } from './participant/page/multidimensional-aspect/falls/falls.component';
import {
  CardiovascularFactorsComponent
} from './participant/page/biological-aspects/cardiovascular-factors/cardiovascular-factors.component';
import {
  NegativeAttitudesAgingComponent
} from './participant/page/psychological-aspects/negative-attitudes-aging/negative-attitudes-aging.component';
import {
  ObservationsPsychologicalComponent
} from './participant/page/psychological-aspects/observations-psychological/observations-psychological.component';
import {
  ObservationsBiologicalComponent
} from './participant/page/biological-aspects/observations-biological/observations-biological.component';
import {
  ObservationsMultidimensionalComponent
} from './participant/page/multidimensional-aspect/observations-multidimensional/observations-multidimensional.component';
import { UserService } from '../security/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesListComponent } from './participant/pages-list/pages-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivityItemComponent } from './activity/activity-item/activity-item.component';
import { DetailItemComponent } from './activity/activity-item/detail-item/detail-item.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CabecaPageComponent } from './participant/page/cabeca-page/cabeca-page.component';
import {ProgressBarModule} from "angular-progress-bar";
import { PageForm } from './participant/page/page.form';
import { PsychologicalAspectsForm } from './participant/page/psychological-aspects/psychological-aspects.form';
import { BiologicalAspectsForm } from './participant/page/biological-aspects/biological.aspects.form';
import { SocialAspectsForm } from './participant/page/social-aspects/social-aspects.form';
import { MultidimensionalAspectForm } from './participant/page/multidimensional-aspect/multidimensional-aspect.form';
import { CognitiveDeficitForm } from './participant/page/psychological-aspects/cognitive-deficit/cognitive-deficit.form';
import { DepressionForm } from './participant/page/psychological-aspects/depression/depression.form';
import { NegativeAttitudesAgingForm } from './participant/page/psychological-aspects/negative-attitudes-aging/negative-attitudes-aging.form';
import { ObservationsMultidimensionalForm } from './participant/page/multidimensional-aspect/observations-multidimensional/observations-multidimensional.form';
import { ParticipantFormForm } from './participant/page/participant-form/participant-form.form';
import { CardiovascularFactorsForm } from './participant/page/biological-aspects/cardiovascular-factors/cardiovascular-factors.form';
import { FunctionalDisabilityForm } from './participant/page/biological-aspects/functional-disability/functional-disability.form';
import { MalnutritionForm } from './participant/page/biological-aspects/malnutrition/malnutrition.form';
import { MisuseMedicationsForm } from './participant/page/biological-aspects/misuse-medications/misuse-medications.form';
import { ObservationsBiologicalForm } from './participant/page/biological-aspects/observations-biological/observations-biological.form';
import { SensoryDeficitForm } from './participant/page/biological-aspects/sensory-deficit/sensory-deficit.form';
import { FallsForm } from './participant/page/multidimensional-aspect/falls/falls.form';
import { EnvironmentalProblemsForm } from './participant/page/social-aspects/environmental-problems/environmental-problems.form';
import { LowSocialSupportForm } from './participant/page/social-aspects/low-social-support/low-social-support.form';
import { ViolenceForm } from './participant/page/social-aspects/violence/violence.form';
import { ObservationsSocialForm } from './participant/page/social-aspects/observations-social/observations-social.form';
import { ObservationsPsychologicalForm } from './participant/page/psychological-aspects/observations-psychological/observations-psychological.form';
import { MatStepperModule} from '@angular/material/stepper'
import { CabecaPageForm } from './participant/page/cabeca-page/cabeca-page.form';
import { FinalAnaliseComponent } from './participant/page/final-analise/final-analise.component';
import { FinalAnaliseForm } from './participant/page/final-analise/final-analise.form';
import { EscoresComponent } from './participant/page/final-analise/escores/escores.component';
import { GraficoDominiosComponent } from './participant/page/final-analise/grafico-dominios/grafico-dominios.component';
import { GraficoDimesoesComponent } from './participant/page/final-analise/grafico-dimesoes/grafico-dimesoes.component';
import { ChartsModule } from 'ng2-charts';
import { ChecaCampo } from '../shared/checa-campo';
import { BaseComponent } from './participant/page/visual_components/base/base.component';
import { AppBaseLisaComponent } from './participant/page/visual_components/app-base-lisa/app-base-lisa.component';
import { InstrucoesComponent } from './participant/page/visual_components/instrucoes/instrucoes.component';
import { BotoesComponent } from './participant/page/visual_components/botoes/botoes.component';
import { StatusComponent } from './participant/page/visual_components/status/status.component';
import { DoencasComponent } from './participant/page/visual_components/doencas/doencas.component';


@NgModule({
  declarations: [
    PrivateComponent,
    HomeComponent,
    ParticipantComponent,
    SidebarComponent,
    ParticipantInfoComponent,
    PageComponent,
    CognitiveDeficitComponent,
    NegativeAttitudesAgingComponent,
    DepressionComponent,
    PsychologicalAspectsComponent,
    ParticipantFormComponent,
    ObservationsPsychologicalComponent,
    BiologicalAspectsComponent,
    SensoryDeficitComponent,
    FunctionalDisabilityComponent,
    MalnutritionComponent,
    CardiovascularFactorsComponent,
    MisuseMedicationsComponent,
    ObservationsBiologicalComponent,
    SocialAspectsComponent,
    LowSocialSupportComponent,
    EnvironmentalProblemsComponent,
    ViolenceComponent,
    ObservationsSocialComponent,
    MultidimensionalAspectComponent,
    FallsComponent,
    ObservationsMultidimensionalComponent,
    PagesListComponent,
    NavbarComponent,
    ActivityComponent,
    ActivityItemComponent,
    DetailItemComponent,
    CabecaPageComponent,
    FinalAnaliseComponent,
    EscoresComponent,
    GraficoDominiosComponent,
    GraficoDimesoesComponent,
    BaseComponent,
    AppBaseLisaComponent,
    InstrucoesComponent,
    BotoesComponent,
    StatusComponent,
    DoencasComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    MatTabsModule,
    ProgressBarModule,
    MatStepperModule,
    ChartsModule
  ],
  providers: [UserService,
    PageForm,
    PsychologicalAspectsForm,
    BiologicalAspectsForm,
    SocialAspectsForm,
    MultidimensionalAspectForm,
    CognitiveDeficitForm,
    DepressionForm,
    NegativeAttitudesAgingForm,
    ObservationsMultidimensionalForm,
    ParticipantFormForm,
    CardiovascularFactorsForm,
    FunctionalDisabilityForm,
    MalnutritionForm,
    MisuseMedicationsForm,
    ObservationsBiologicalForm,
    SensoryDeficitForm,
    FallsForm,
    ObservationsMultidimensionalForm,
    EnvironmentalProblemsForm,
    LowSocialSupportForm,
    ViolenceForm,
    ObservationsSocialForm,
    ObservationsPsychologicalForm,
    CabecaPageForm,
    FinalAnaliseForm,
    ChecaCampo
  ]
})
export class PrivateModule { }
