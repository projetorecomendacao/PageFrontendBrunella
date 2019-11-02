import { Component, OnInit } from '@angular/core';
import { ParticipantSituation } from '../../../shared/models/participant.model';
import { PsychologicalAspects } from '../../../shared/models/psychological-aspects.model';
import { BiologicalAspects } from '../../../shared/models/biological-aspects.model';
import { SocialAspects } from '../../../shared/models/social-aspects.model';
import { MultidisciplinaryDomain } from '../../../shared/models/multidimentional-aspects';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {

  private participantForm: ParticipantSituation;
  private psychologicalAspects: PsychologicalAspects;
  private biologicalAspects: BiologicalAspects;
  private socialAspects: SocialAspects;
  private multidisciplinaryDomain: MultidisciplinaryDomain;

  setParticipantForm(pf: ParticipantSituation) { this.participantForm = pf; this.submit(); }
  setPsychologicalAspects(pa: PsychologicalAspects) { this.psychologicalAspects = pa; this.submit(); }
  setBiologicalAspects(ba: BiologicalAspects) { this.biologicalAspects = ba; this.submit(); }
  setSocialAspects(sa: SocialAspects) { this.socialAspects = sa; this.submit(); }
  setMultidisciplinaryDomain(md: MultidisciplinaryDomain) { this.multidisciplinaryDomain = md; this.submit(); }

  constructor() { }

  ngOnInit() { }

  submit() { }
}
