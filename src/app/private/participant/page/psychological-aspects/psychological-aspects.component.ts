import { Component, OnInit } from '@angular/core';
import {
  CognitionDeficit, Depression,
  NegativeAttitudesAging,
  PsychologicalAspects
} from '../../../../shared/models/psychologicalAspects.model';
import { DAOService } from '../../../../shared/dao.service';
import { REST_URL_PSYCHOLOGICAL_ASPECTS } from '../../../../shared/REST_API_URLs';

@Component({
  selector: 'app-psychological-aspects',
  templateUrl: './psychological-aspects.component.html'
})
export class PsychologicalAspectsComponent implements OnInit {

  private cognitionDeficit: CognitionDeficit;
  private negativeAttitudesAging: NegativeAttitudesAging;
  private depression: Depression;
  private comments_psico: string;

  private psychologicalAspects: PsychologicalAspects;

  constructor(private dao: DAOService) { }

  ngOnInit() { }

  setCognitiveDeficit(cd: CognitionDeficit) { this.cognitionDeficit = cd; this.submit(); }
  setNegativeAttitudesAging(nag: NegativeAttitudesAging) { this.negativeAttitudesAging = nag; this.submit(); }
  setDepression(d: Depression) { this.depression = d; this.submit(); }
  setComments(c: string) { this.comments_psico = c; this.submit(); }

  submit() {
    if (this.cognitionDeficit && this.negativeAttitudesAging && this.depression && this.comments_psico) this.dao.postObject(REST_URL_PSYCHOLOGICAL_ASPECTS, {
        cognition_deficit: this.cognitionDeficit.getId(),
        negative_attitudes_aging: this.negativeAttitudesAging.getId(),
        depression: this.depression.getId(),
        comments_psico: this.comments_psico
      }).subscribe(data => {
        this.psychologicalAspects = new PsychologicalAspects(data);
        console.log(this.psychologicalAspects);
    });
  }
}
