import { Component, OnInit } from '@angular/core';
import { DAOService } from '../../../../shared/dao.service';
import { REST_URL_SOCIAL_ASPECTS } from '../../../../shared/REST_API_URLs';
import {
  EnvironmentalProblems,
  LowSocialSupport,
  SocialAspects,
  Violence
} from '../../../../shared/models/social-aspects.model';
import { PageService } from '../page.service';

@Component({
  selector: 'app-social-aspects',
  templateUrl: './social-aspects.component.html'
})
export class SocialAspectsComponent implements OnInit {

  private socialAspect: SocialAspects;

  private lowSocialSupport: LowSocialSupport;
  private environmentalProblems: EnvironmentalProblems;
  private violence: Violence;
  private comments_social: string;

  constructor(private dao: DAOService, private pageService: PageService) { }

  ngOnInit() {
    this.socialAspect = this.pageService.socialAspects;
    if (this.socialAspect) {
      this.lowSocialSupport = this.socialAspect.lowSocialSupportInstance;
      this.environmentalProblems = this.socialAspect.environmentalProblemsInstance;
      this.violence = this.socialAspect.violenceInstance;

      this.comments_social = this.socialAspect.comments;
    }}

  get isComplete() { return this.lowSocialSupport && this.environmentalProblems && this.violence && this.comments_social; }

  setLowSocialSupport(lss: LowSocialSupport) {  if (this.socialAspect) this.socialAspect.lowSocialSupportInstance = lss; this.lowSocialSupport = lss; }
  setEnvironmentalProblems(ep: EnvironmentalProblems) { if (this.socialAspect) this.socialAspect.environmentalProblemsInstance = ep; this.environmentalProblems = ep; }
  setViolence(v: Violence) { if (this.socialAspect) this.socialAspect.violenceInstance = v; this.violence = v; }
  setComments(c: string) {
    if (this.socialAspect)
      this.dao.patchObject(REST_URL_SOCIAL_ASPECTS, {
        id: this.socialAspect.getId(),
        comments_social: c
      }).subscribe((data: any) => {
        this.socialAspect.comments = data.comments_social;
        this.comments_social = data.comments_social;
      }, _ => alert('Ocorreu um erro ao tentar alterar os comentários dos aspectos psicológicos'));
    else this.comments_social = c;
  }

  submit() {
    if (!this.socialAspect) {
      if (this.isComplete) this.dao.postObject(REST_URL_SOCIAL_ASPECTS, {
        lowSocialSupport: this.lowSocialSupport.getId(),
        environmentalProblems: this.environmentalProblems.getId(),
        violence: this.violence.getId(),
        comments_social: this.comments_social
      }).subscribe(data => {
        this.socialAspect = new SocialAspects(data, this.lowSocialSupport, this.environmentalProblems, this.violence);
        this.pageService.setSocialAspects(this.socialAspect);
      });
      else alert('Alguma das areas está incorreta');
    }
    // TODO - Fazer o alert igual o do psychological aspects
  }
}
