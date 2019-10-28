import { Component, OnInit } from '@angular/core';
import { ParticipantSituation } from '../../../shared/models/participant.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {

  private participantForm: ParticipantSituation;

  constructor() { }

  ngOnInit() { }

  setParticipantForm(pf: ParticipantSituation) { this.participantForm = pf; }

}
