import { Component, OnInit } from '@angular/core';
import { Participant } from '../../shared/models/participant.model';
import { DAOService } from '../../shared/dao.service';
import { REST_URL_PARTICIPANTS } from '../../shared/REST_API_URLs';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../security/user.service';
import {PageService} from './page/page.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html'
})
export class ParticipantComponent implements OnInit {

  private participant: Participant;

  constructor(private userService: UserService, private dao: DAOService, private pageService: PageService) { }

  ngOnInit() {
    this.dao.getObject(REST_URL_PARTICIPANTS, this.userService.getId().toString()).subscribe(data => {
      this.participant = new Participant(data);
      this.pageService.participant = this.participant;
    });
  }

}
