import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CriaForm} from '../../../../shared/cria-forms';
import { Injectable } from '@angular/core';
import { Page } from 'src/app/shared/models/page.model';
import { CabecaPage } from 'src/app/shared/models/cabecaPage';
import { PageService } from '../page.service';
import { UserService } from 'src/app/security/user.service';

@Injectable()
export class CabecaPageForm implements CriaForm {

  private cabecaPageForm: FormGroup;
  
  constructor(private fb: FormBuilder,                
    private pageService: PageService,
    private userService: UserService
  ) { }
  
  geraFormGroup(data?: CabecaPage): FormGroup {
    if (data){
      console.log(`Participante ${data.getParticipant()}`)
      console.log(`Geronto: ${data.getGerontologist()}`)
      this.cabecaPageForm = this.fb.group({
            service: [data.getService(), [Validators.required, Validators.maxLength(60)]],
            entrance: [data.getEntrance().toISOString().substring(0, 10), [Validators.required]],
            interviewed: [data.getInterviewed(), Validators.required],
            interviewer: [data.getInterviewer(), [Validators.required, Validators.maxLength(30)]],
            avaliation_date: [data.getAvaliation_date().toISOString().substring(0, 10), Validators.required],
            participant_id : [data.getParticipant(), Validators.required],
            geronto_id : [data.getGerontologist(), Validators.required]
       });
    }
    else 
    {
      this.cabecaPageForm= this.fb.group({
        service: ['', [Validators.required, Validators.maxLength(60)]],
        entrance: ['', [Validators.required]],
        interviewed: ['', Validators.required],
        interviewer: ['', [Validators.required, Validators.maxLength(30)]],
        avaliation_date: ['', Validators.required],
        participant_id : [this.pageService.participant.getId(), Validators.required],
        geronto_id : [this.userService.getId(), Validators.required]
      });
    }
    return this.cabecaPageForm;
  }
}