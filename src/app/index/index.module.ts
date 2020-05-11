import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import {SecurityModule} from '../security/security.module';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SecurityModule,
    MatTabsModule
  ]
})
export class IndexModule { }
