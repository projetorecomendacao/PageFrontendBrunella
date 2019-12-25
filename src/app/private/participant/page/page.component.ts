import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {Participant, ParticipantSituation} from '../../../shared/models/participant.model';
import { DAOService } from '../../../shared/dao.service';
import { UserService } from '../../../security/user.service';
import { PageService } from './page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {
  REST_URL_BIOLOGICAL_ASPECTS, REST_URL_MULTIDISCIPLINARY_DOMAIN,
  REST_URL_PARTICIPANT_SITUATION,
  REST_URL_PSYCHOLOGICAL_ASPECTS, REST_URL_SOCIAL_ASPECTS
} from '../../../shared/REST_API_URLs';
import {MultidisciplinaryDomain} from '../../../shared/models/multidimentional-aspects';
import {PsychologicalAspects} from '../../../shared/models/psychological-aspects.model';
import {BiologicalAspects} from '../../../shared/models/biological-aspects.model';
import {SocialAspects} from '../../../shared/models/social-aspects.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {

  @Input() participant: Participant;

  get page() { return this.pageService.page; }

  setService(service: string) { this.pageService.setService(service); }
  setEntrance(entrance: string) { this.pageService.setEntrance(entrance); }
  setInterviewed(interviewed: string) { this.pageService.setInterviewed(interviewed); }

  constructor(private dao: DAOService, private pageService: PageService) { }

  ngOnInit(): void {
    console.log(this.pageService.page);
  }
}
