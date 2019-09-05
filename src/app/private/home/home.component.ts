import { Component, OnInit } from '@angular/core';
import { Participant } from '../../shared/models/participant.model';
import { DAOService } from '../../shared/dao.service';
import { REST_URL_PARTICIPANTS } from '../../shared/REST_API_URLs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private participants: Participant[] = new Array<Participant>();
  private addParticipantForm: FormGroup = this.form.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    age: ['', Validators.required],
    communication: ['', Validators.required],
    birth_date: ['', Validators.required],
    gender: ['', Validators.required],
    weight: ['', Validators.required],
    height: ['', Validators.required],
    profile_photo_URL: [null]
  });


  constructor(private dao: DAOService, private form: FormBuilder) {
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

}
