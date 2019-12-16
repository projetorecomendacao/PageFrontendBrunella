import { Injectable } from '@angular/core';
import { Page } from '../../../shared/models/page.model';
import { Participant, ParticipantSituation } from '../../../shared/models/participant.model';
import { PsychologicalAspects } from '../../../shared/models/psychological-aspects.model';
import { BiologicalAspects } from '../../../shared/models/biological-aspects.model';
import { SocialAspects } from '../../../shared/models/social-aspects.model';
import { MultidisciplinaryDomain } from '../../../shared/models/multidimentional-aspects';
import { REST_URL_PAGE } from '../../../shared/REST_API_URLs';
import { DAOService } from '../../../shared/dao.service';
import { UserService } from '../../../security/user.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private participant: Participant;
  private _page = new Page();

  get page() { return this._page; }
  get participantSituation() { return this.page.getParticipant_situation(); }
  get psychologicalAspects() { return this.page.getPsychologicalAspects(); }
  get biologicalAspects() { return this.page.getBiologicalAspects(); }

  setParticipant(p: Participant) {
    this.participant = p;
    const user = this.userService.user;
    this._page.setAvaliation_date(new Date());
    this._page.setInterviewed(this.participant.getName());
    this._page.setGerontologist(user.getId());
    this._page.setInterviewer(user.getName());
    this._page.setParticipant(this.participant);
  }
  setService(service: string) { this._page.setService(service); this.submit(); }
  setEntrance(entrance: string) { this._page.setEntrance(new Date(entrance)); this.submit(); }
  setParticipantSituation(pf: ParticipantSituation) { this._page.setParticipant_situation(pf); this.submit(); }
  setPsychologicalAspects(pa: PsychologicalAspects) { this._page.setPsychologicalAspects(pa); this.submit(); }
  setBiologicalAspects(ba: BiologicalAspects) { this._page.setBiologicalAspects(ba); this.submit(); }
  setSocialAspects(sa: SocialAspects) { this._page.setSocialAspects(sa); this.submit(); }
  setMultidisciplinaryDomain(md: MultidisciplinaryDomain) { this._page.setMultidisciplinaryDomain(md); this.submit(); }

  constructor(private dao: DAOService, private userService: UserService) { }

  submit() {
    if (
      this.page.getParticipant_situation() &&
      this.page.getPsychologicalAspects() &&
      this.page.getBiologicalAspects() &&
      this.page.getSocialAspects() &&
      this.page.getMultidisciplinaryDomain()
    )
      this.dao.postObject(REST_URL_PAGE, this.page.getRawValues()).subscribe(data => this._page = new Page(data));
  }
}
