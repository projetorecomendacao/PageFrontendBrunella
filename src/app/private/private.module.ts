import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { DAOService } from '../shared/dao.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PrivateComponent, HomeComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule
  ]
})
export class PrivateModule { }
