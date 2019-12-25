import { Component, OnInit } from '@angular/core';
import {
  CognitionDeficit, Depression,
  NegativeAttitudesAging,
  PsychologicalAspects
} from '../../../../shared/models/psychological-aspects.model';
import { DAOService } from '../../../../shared/dao.service';
import {REST_URL_PARTICIPANT_SITUATION, REST_URL_PSYCHOLOGICAL_ASPECTS} from '../../../../shared/REST_API_URLs';
import { PageService } from '../page.service';
import {ParticipantSituation} from '../../../../shared/models/participant.model';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-psychological-aspects',
  templateUrl: './psychological-aspects.component.html'
})
export class PsychologicalAspectsComponent implements OnInit {

  private psychologicalAspect: PsychologicalAspects;
  private hasRequestArrived = false;

  constructor(private dao: DAOService, private pageService: PageService) { }

  ngOnInit() {
    if (this.pageService.page.getPsychologicalAspectsId())
      this.dao.getObject(REST_URL_PSYCHOLOGICAL_ASPECTS, this.pageService.page.getPsychologicalAspectsId().toString()).subscribe(response => {
        this.pageService.page.setPsychologicalAspects(new PsychologicalAspects(response));
        this.psychologicalAspect = this.pageService.psychologicalAspects;
        this.hasRequestArrived = true;
        console.log(this.psychologicalAspect);
      }, error => {
        this.psychologicalAspect = new PsychologicalAspects();
        this.hasRequestArrived = true;
      });
    else {
      this.psychologicalAspect = new PsychologicalAspects();
      this.hasRequestArrived = true;
    }
  }

  get isComplete() {
    if (this.psychologicalAspect)
      return this.psychologicalAspect.cognitionDeficitId && this.psychologicalAspect.negativeAttitudesAgingId && this.psychologicalAspect.depressionId && this.psychologicalAspect.comments;
    else return false;
  }

  setCognitiveDeficit(cd: CognitionDeficit) {
    this.psychologicalAspect.cognitionDeficitId = cd.getId();
    this.psychologicalAspect.cognitionDeficitInstance = cd;
    this.submit();
  }
  setNegativeAttitudesAging(nag: NegativeAttitudesAging) {
    this.psychologicalAspect.negativeAttitudesAgingId = nag.getId();
    this.psychologicalAspect.negativeAttitudesAgingInstance = nag;
    this.submit();
  }
  setDepression(d: Depression) {
    this.psychologicalAspect.depressionId = d.getId();
    this.psychologicalAspect.depressionInstance = d;
    this.submit();
  }
  setComments(c: string) {
    this.psychologicalAspect.comments = c;
    this.submit();
  }

  submit() {
    if (this.psychologicalAspect && this.psychologicalAspect.getId() === -1) {
      this.dao.postObject(REST_URL_PSYCHOLOGICAL_ASPECTS, {
        cognition_deficit: this.psychologicalAspect.cognitionDeficitId ? this.psychologicalAspect.cognitionDeficitId : undefined,
        negative_attitudes_aging: this.psychologicalAspect.negativeAttitudesAgingId ? this.psychologicalAspect.negativeAttitudesAgingId : undefined,
        depression: this.psychologicalAspect.depressionId ? this.psychologicalAspect.depressionId : undefined,
        comments_psico: this.psychologicalAspect.comments
      }).subscribe(data => {
        this.psychologicalAspect = new PsychologicalAspects(data, this.psychologicalAspect.cognitionDeficitInstance, this.psychologicalAspect.negativeAttitudesAgingInstance, this.psychologicalAspect.depressionInstance);
        this.pageService.setPsychologicalAspects(this.psychologicalAspect);
      });
    } else {
      this.dao.patchObject(REST_URL_PSYCHOLOGICAL_ASPECTS, {
        id: this.psychologicalAspect.getId(),
        cognition_deficit: this.psychologicalAspect.cognitionDeficitId ? this.psychologicalAspect.cognitionDeficitId : undefined,
        negative_attitudes_aging: this.psychologicalAspect.negativeAttitudesAgingId ? this.psychologicalAspect.negativeAttitudesAgingId : undefined,
        depression: this.psychologicalAspect.depressionId ? this.psychologicalAspect.depressionId : undefined,
        comments_psico: this.psychologicalAspect.comments
      }).subscribe(data => {
        this.psychologicalAspect = new PsychologicalAspects(data, this.psychologicalAspect.cognitionDeficitInstance, this.psychologicalAspect.negativeAttitudesAgingInstance, this.psychologicalAspect.depressionInstance);
        this.pageService.setPsychologicalAspects(this.psychologicalAspect);
      });
    }
  }
}
