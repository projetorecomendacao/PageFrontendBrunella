import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DAOService } from '../shared/dao.service';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent
  ]
})
export class SecurityModule { }
