import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Participant } from '../../../shared/models/participant.model';
import { DAOService } from '../../../shared/dao.service';
import { UserService } from '../../../security/user.service';
import { PageService } from './page.service';
import {ActivatedRoute, Router} from '@angular/router';

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

  ngOnInit(): void { }
}
