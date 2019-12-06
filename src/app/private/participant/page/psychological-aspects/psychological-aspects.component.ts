import { Component, OnInit } from '@angular/core';
import {
  CognitionDeficit, Depression,
  NegativeAttitudesAging,
  PsychologicalAspects
} from '../../../../shared/models/psychological-aspects.model';
import { DAOService } from '../../../../shared/dao.service';
import { REST_URL_PSYCHOLOGICAL_ASPECTS } from '../../../../shared/REST_API_URLs';
import { PageService } from '../page.service';

@Component({
  selector: 'app-psychological-aspects',
  templateUrl: './psychological-aspects.component.html'
})
export class PsychologicalAspectsComponent implements OnInit {

  private psychologicalAspect: PsychologicalAspects;

  private cognitionDeficit: CognitionDeficit;
  private negativeAttitudesAging: NegativeAttitudesAging;
  private depression: Depression;
  private comments_psico: string;

  constructor(private dao: DAOService, private pageService: PageService) { }

  ngOnInit() { }

  get isComplete() { return this.cognitionDeficit && this.negativeAttitudesAging && this.depression && this.comments_psico; }

  setCognitiveDeficit(cd: CognitionDeficit) { this.cognitionDeficit = cd; }
  setNegativeAttitudesAging(nag: NegativeAttitudesAging) { this.negativeAttitudesAging = nag; }
  setDepression(d: Depression) { this.depression = d; }
  setComments(c: string) { this.comments_psico = c; }

  submit() {
    if (this.isComplete)
      this.dao.postObject(REST_URL_PSYCHOLOGICAL_ASPECTS, {
        cognition_deficit: this.cognitionDeficit.getId(),
        negative_attitudes_aging: this.negativeAttitudesAging.getId(),
        depression: this.depression.getId(),
        comments_psico: this.comments_psico
      }).subscribe(data => {
        this.psychologicalAspect = new PsychologicalAspects(data);
        this.pageService.setPsychologicalAspects(this.psychologicalAspect);
    });
    alert('Alguma das subareas não foi feita corretamente');
  }
}
