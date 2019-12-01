import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParticipantComponent } from './participant/participant.component';
import { ParticipantFormComponent } from './participant/page/participant-form/participant-form.component';
import { PsychologicalAspectsComponent } from './participant/page/psychological-aspects/psychological-aspects.component';
import { BiologicalAspectsComponent } from './participant/page/biological-aspects/biological-aspects.component';
import { SocialAspects } from '../shared/models/social-aspects.model';
import { MultidimensionalAspectComponent } from './participant/page/multidimensional-aspect/multidimensional-aspect.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: ':id',
    component: ParticipantComponent,
    children: [
      { path: 'participant-info', component: ParticipantFormComponent },
      { path: 'psychological-aspect', component: PsychologicalAspectsComponent },
      { path: 'biological-aspect', component: BiologicalAspectsComponent },
      { path: 'social-aspect', component: SocialAspects },
      { path: 'multidisciplinary-domain', component: MultidimensionalAspectComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
