import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Participant, ParticipantSituation } from '../../../shared/models/participant.model';
import { PsychologicalAspects } from '../../../shared/models/psychological-aspects.model';
import { BiologicalAspects } from '../../../shared/models/biological-aspects.model';
import { SocialAspects } from '../../../shared/models/social-aspects.model';
import { MultidisciplinaryDomain } from '../../../shared/models/multidimentional-aspects';
import { Page } from '../../../shared/models/page.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { DAOService } from '../../../shared/dao.service';
import { REST_URL_PAGE, REST_URL_PARTICIPANTS } from '../../../shared/REST_API_URLs';
import { UserService } from '../../../security/user.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit, OnChanges {

  @Input() participant: Participant;

  private page = new Page();

  setService(service: string) { this.page.setService(service); this.submit(); }
  setEntrance(entrance: string) { this.page.setEntrance(new Date(entrance)); this.submit(); }
  setParticipantForm(pf: ParticipantSituation) { this.page.setParticipant_situation(pf); this.submit(); }
  setPsychologicalAspects(pa: PsychologicalAspects) { this.page.setPsychologicalAspects(pa); this.submit(); }
  setBiologicalAspects(ba: BiologicalAspects) { this.page.setBiologicalAspects(ba); this.submit(); }
  setSocialAspects(sa: SocialAspects) { this.page.setSocialAspects(sa); this.submit(); }
  setMultidisciplinaryDomain(md: MultidisciplinaryDomain) { this.page.setMultidisciplinaryDomain(md); this.submit(); }

  constructor(private dao: DAOService, private userService: UserService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.participant.currentValue) {
      this.page.setAvaliation_date(new Date());
      this.page.setInterviewed(changes.participant.currentValue.getName());
      this.page.setGerontologist(this.userService.getId());
      this.page.setInterviewer(this.userService.getName());
      this.page.setParticipant(changes.participant.currentValue);
    }
  }

  ngOnInit() {
    if (this.participant) {
      this.page.setAvaliation_date(new Date());
      this.page.setInterviewed(this.participant.getName());
      this.page.setGerontologist(this.userService.getId());
      this.page.setInterviewer(this.userService.getName());
      this.page.setParticipant(this.participant);
    }
  }

  submit() { console.log(this.page); if (this.page.getParticipant_situation() && this.page.getPsychologicalAspects() && this.page.getBiologicalAspects() && this.page.getSocialAspects() && this.page.getMultidisciplinaryDomain()) this.dao.postObject(REST_URL_PAGE, this.page.getRawValues()).subscribe(data => {
    this.page = new Page(data);
    console.log(this.page);
  }); }
}
