import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { Page } from 'src/app/shared/models/page.model';
import { CabecaPage } from 'src/app/shared/models/cabecaPage';

@Injectable()
export class CabecaPageForm implements CriaForm {

  private cabecaPageForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: CabecaPage): FormGroup {
    if (data){
      this.cabecaPageForm = this.fb.group({
            service: [data.getService, [Validators.required, Validators.maxLength(60)]],
            entrance: [data.getEntrance, [Validators.required]],
            interviewed: [data.getInterviewed, Validators.required],
            interviewer: [data.getInterviewer, [Validators.required, Validators.maxLength(30)]],
            avaliation_date: [data.getAvaliation_date, Validators.required]
       });
    }
    else 
    {
      this.cabecaPageForm= this.fb.group({
        service: ['', [Validators.required, Validators.maxLength(60)]],
        entrance: ['', [Validators.required]],
        interviewed: ['', Validators.required],
        interviewer: ['', [Validators.required, Validators.maxLength(30)]],
        avaliation_date: ['', Validators.required]
       });
    }
    return this.cabecaPageForm;
  }
}