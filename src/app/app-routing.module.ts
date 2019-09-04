import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from './security/auth.guard';


const routes: Routes = [
  { path: '',
    component: IndexComponent
  },
  {
    path: 'private',
    loadChildren: () => import('./private/private.module').then(mod => mod.PrivateModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
