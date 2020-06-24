import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParticipantComponent } from './participant/participant.component';
import { ParticipantFormComponent } from './participant/page/participant-form/participant-form.component';
import { PsychologicalAspectsComponent } from './participant/page/psychological-aspects/psychological-aspects.component';
import { BiologicalAspectsComponent } from './participant/page/biological-aspects/biological-aspects.component';
import { SocialAspectsComponent } from './participant/page/social-aspects/social-aspects.component';
import { MultidimensionalAspectComponent } from './participant/page/multidimensional-aspect/multidimensional-aspect.component';
import { PrivateComponent } from './private.component';
import {PagesListComponent} from './participant/pages-list/pages-list.component';
import {PageComponent} from './participant/page/page.component';
import {ActivityComponent} from './activity/activity.component';
import { FinalAnaliseComponent } from './participant/page/final-analise/final-analise.component';



const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'activity', component: ActivityComponent },
      {
        path: 'participant',
        component: ParticipantComponent,
        children: [
          { path: '', component: PagesListComponent },
          { path: 'page/:id',component: PageComponent},
          { path: 'final', component: FinalAnaliseComponent}
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
