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

  ngOnInit() {
    this.psychologicalAspect = this.pageService.psychologicalAspects;
    if (this.psychologicalAspect) {
      this.cognitionDeficit = this.psychologicalAspect.cognitionDeficitInstance;
      this.negativeAttitudesAging = this.psychologicalAspect.negativeAttitudesAgingInstance;
      this.depression = this.psychologicalAspect.depressionInstance;
      this.comments_psico = this.psychologicalAspect.comments;

    }
  }

  get isComplete() { return this.cognitionDeficit && this.negativeAttitudesAging && this.depression && this.comments_psico; }

  setCognitiveDeficit(cd: CognitionDeficit) { if (this.psychologicalAspect) this.psychologicalAspect.cognitionDeficitInstance = cd; this.cognitionDeficit = cd; }
  setNegativeAttitudesAging(nag: NegativeAttitudesAging) { if (this.psychologicalAspect) this.psychologicalAspect.negativeAttitudesAgingInstance = nag; this.negativeAttitudesAging = nag; }
  setDepression(d: Depression) { if (this.psychologicalAspect) this.psychologicalAspect.depressionInstance = d; this.depression = d; }
  setComments(c: string) {
    if (this.psychologicalAspect) {
      this.dao.patchObject(REST_URL_PSYCHOLOGICAL_ASPECTS, {
        id: this.psychologicalAspect.getId(),
        comments_psico: c
      }).subscribe((data: any) => {
        this.psychologicalAspect.comments = data.comments_psico;
        this.comments_psico = data.comments_psico;
      }, _ => alert('Ocorreu um erro ao tentar alterar os comentários dos aspectos psicológicos'));
    } else this.comments_psico = c;
  }

  submit() {
    if (!this.psychologicalAspect) {
      if (this.isComplete) this.dao.postObject(REST_URL_PSYCHOLOGICAL_ASPECTS, {
        cognition_deficit: this.cognitionDeficit.getId(),
        negative_attitudes_aging: this.negativeAttitudesAging.getId(),
        depression: this.depression.getId(),
        comments_psico: this.comments_psico
      }).subscribe(data => {
        this.psychologicalAspect = new PsychologicalAspects(data, this.cognitionDeficit, this.negativeAttitudesAging, this.depression);
        this.pageService.setPsychologicalAspects(this.psychologicalAspect);
      });
      else alert('A(s) área(s) ' + (!this.cognitionDeficit ? 'Déficit Cognitivo ' : '') + (!this.negativeAttitudesAging ? 'Atitudes negativas... ' : '') + (!this.depression ? 'Depressão ' : '') + (!this.comments_psico ? 'Observação ' : '') + 'não foram preenchidas');
    }
  }
}
