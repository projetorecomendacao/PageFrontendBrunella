import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Participant } from '../../../shared/models/participant.model';
import { DAOService } from '../../../shared/dao.service';
import { UserService } from '../../../security/user.service';
import { PageService } from './page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit, OnChanges {

  @Input() participant: Participant;

  get page() { return this.pageService.page; }

  setService(service: string) { this.pageService.setService(service); }
  setEntrance(entrance: string) { this.pageService.setEntrance(entrance); }

  constructor(private dao: DAOService, private userService: UserService, private pageService: PageService) { }

  ngOnInit(): void {
    if (this.participant)
      this.pageService.setParticipant(this.participant);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const participant = changes.participant.currentValue;
    if (participant)
      this.pageService.setParticipant(participant);
  }
}
