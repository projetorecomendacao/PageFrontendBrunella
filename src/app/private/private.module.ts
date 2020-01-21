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
    DetailItemComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [UserService]
})
export class PrivateModule { }
