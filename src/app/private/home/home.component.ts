import { Component, OnInit } from '@angular/core';
import { Participant } from '../../shared/models/participant.model';
import { DAOService } from '../../shared/dao.service';
import { REST_URL_PARTICIPANTS } from '../../shared/REST_API_URLs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PageService} from '../participant/page/page.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private participants: Participant[] = new Array<Participant>();
  private addParticipantForm: FormGroup = this.form.group({
    p00_email: ['', Validators.required],
    p01_name: ['', Validators.required],
    p02_address: ['', Validators.required],
    p03_communication: ['', Validators.required],
    p04_birth_date: ['', Validators.required],
    p05_age: ['', Validators.required],
    p06_gender: ['', Validators.required],
    p20_profile_photo_URL: [null]
  });


  constructor(private dao: DAOService, private form: FormBuilder, private pageService: PageService, private router: Router) {
    dao.getObjects(REST_URL_PARTICIPANTS).subscribe((data: any) => {
      for (const participant of data)
        this.participants.push(new Participant(participant));
    });
  }

  ngOnInit() {
  }

  addParticipant() {
    this.dao.postObject(REST_URL_PARTICIPANTS, this.addParticipantForm.getRawValue()).subscribe((data: any) => {
      this.participants.push(new Participant(data));
    });
    this.addParticipantForm.reset();
  }

  goToParticipant(id: number) {
    this.pageService.reset();
    this.router.navigate([id]).then();
  }
}
