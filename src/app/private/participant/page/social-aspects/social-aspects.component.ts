import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DAOService } from '../../../../shared/dao.service';
import { REST_URL_SOCIAL_ASPECTS } from '../../../../shared/REST_API_URLs';
import {
  EnvironmentalProblems,
  LowSocialSupport,
  SocialAspects,
  Violence
} from '../../../../shared/models/social-aspects.model';

@Component({
  selector: 'app-social-aspects',
  templateUrl: './social-aspects.component.html'
})
export class SocialAspectsComponent implements OnInit {

  @Input('socialAspect') socialAspectInput: SocialAspects;
  @Output('socialAspect') socialAspectOutput = new EventEmitter<SocialAspects>();

  private lowSocialSupport: LowSocialSupport;
  private environmentalProblems: EnvironmentalProblems;
  private violence: Violence;
  private comments_social: string;

  constructor(private dao: DAOService) { }

  ngOnInit() { }

  setLowSocialSupport(lss: LowSocialSupport) { this.lowSocialSupport = lss; this.submit(); }
  setEnvironmentalProblems(ep: EnvironmentalProblems) { this.environmentalProblems = ep; this.submit(); }
  setViolence(v: Violence) { this.violence = v; this.submit(); }
  setComments(c: string) { this.comments_social = c; this.submit(); }

  submit() {
    if (this.lowSocialSupport && this.environmentalProblems && this.violence && this.comments_social) this.dao.postObject(REST_URL_SOCIAL_ASPECTS, {
      lowSocialSupport: this.lowSocialSupport.getId(),
      environmentalProblems: this.environmentalProblems.getId(),
      violence: this.violence.getId(),
      comments_social: this.comments_social
    }).subscribe(data => {
      this.socialAspectInput = new SocialAspects(data);
      this.socialAspectOutput.emit(this.socialAspectInput);
    });
  }
}
