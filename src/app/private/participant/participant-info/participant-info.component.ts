import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '../../../shared/models/participant.model';
import {Page} from '../../../shared/models/page.model';
import {DAOService} from '../../../shared/dao.service';
import {REST_URL_PAGE, REST_URL_PARTICIPANT_SITUATION} from '../../../shared/REST_API_URLs';

@Component({
  selector: 'app-participant-info',
  templateUrl: './participant-info.component.html'
})
export class ParticipantInfoComponent implements OnInit {

  @Input() participant: Participant;

  constructor() { }

  ngOnInit() { }

}
