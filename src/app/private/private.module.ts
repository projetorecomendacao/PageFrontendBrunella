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
import { NegativeAttitudesAgingComponent } from './participant/page/psychological-aspects/negative-attitudes-aging/negative-attitudes-aging.component';
import { DepressionComponent } from './participant/page/psychological-aspects/depression/depression.component';
import { PsychologicalAspectsComponent } from './participant/page/psychological-aspects/psychological-aspects.component';



@NgModule({
  declarations: [PrivateComponent, HomeComponent, ParticipantComponent, SidebarComponent, ParticipantInfoComponent, PageComponent, CognitiveDeficitComponent, NegativeAttitudesAgingComponent, DepressionComponent, PsychologicalAspectsComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule
  ]
})
export class PrivateModule { }
