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
  //participante
  private _participant: Participant;

  //page
  private _page = new Page();

  get page() { return this._page; }

  set page(page: Page) { this._page = page; }

  get participant() { return this._participant; }
  
  set participant(p: Participant) { this._participant = p; }

  //elementos do PAGe
  get participantSituation() { return this.page.getParticipant_situation(); }
  get psychologicalAspects() { return this.page.getPsychologicalAspects(); }
  get biologicalAspects()    { return this.page.getBiologicalAspects(); }
  get socialAspects()        { return this.page.getSocialAspects(); }
  get multidisciplinaryDomain() { return this.page.getMultidisciplinaryDomain(); }
  

  
  get hasService() { return !!this.page.getService(); }
  get hasEntrance() { return !!this.page.getEntrance(); }

  setParticipant() {
    const user = this.userService.user;
    this._page.setAvaliation_date(new Date());
    this._page.setGerontologist(user.getId());
    this._page.setInterviewer(user.getName());
    this._page.setParticipant(this.participant);

    this.submit();
  }
  setService(service: string) {
    this._page.setService(service);
    this.submit({ service });
  }
  setEntrance(entrance: string) {
    this._page.setEntrance(new Date(entrance));
    this.submit({ entrance });
  }
  setInterviewed(interviewed: string) {
    this._page.setInterviewed(interviewed);
    this.submit({ interviewed });
  }
  setParticipantSituation(pf: ParticipantSituation) {
    this._page.setParticipant_situation(pf);
    this.submit({ participant_situation: pf.getId() });
  }
  setPsychologicalAspects(pa: PsychologicalAspects) {
    this._page.setPsychologicalAspects(pa);
    this.submit({ psychologicalAspects: pa.getId() });
  }
  setBiologicalAspects(ba: BiologicalAspects) {
    this._page.setBiologicalAspects(ba);
    this.submit({ biologicalAspects: ba.getId() });
  }
  setSocialAspects(sa: SocialAspects) {
    this._page.setSocialAspects(sa);
    this.submit({ socialAspects: sa.getId() });
  }
  setMultidisciplinaryDomain(md: MultidisciplinaryDomain) {
    this._page.setMultidisciplinaryDomain(md);
    this.submit({ multidisciplinaryDomain: md.getId() });
  }

  constructor(private dao: DAOService, private userService: UserService) { }

  reset() {
    this.page = new Page();
  }

  submit(content?: any) {
    if (this.page.getId() === -1)
      this.dao.postObject(REST_URL_PAGE, this.page.getRawValues()).subscribe(data => this._page = new Page(data, this.participant, this.page.getParticipant_situation()));
    else {
      content.id = this.page.getId();
      this.dao.patchObject(REST_URL_PAGE, content).subscribe(data => this._page = new Page(data, this.participant, this.page.getParticipant_situation()));
    }
  }
}