import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  CognitionDeficit, Depression,
  NegativeAttitudesAging,
  PsychologicalAspects
} from '../../../../shared/models/psychological-aspects.model';
import { DAOService } from '../../../../shared/dao.service';
import { REST_URL_PSYCHOLOGICAL_ASPECTS } from '../../../../shared/REST_API_URLs';
import { ParticipantSituation } from '../../../../shared/models/participant.model';

@Component({
  selector: 'app-psychological-aspects',
  templateUrl: './psychological-aspects.component.html'
})
export class PsychologicalAspectsComponent implements OnInit {

  @Input('psychologicalAspect') psychologicalAspectInput: PsychologicalAspects;
  @Output('psychologicalAspect') psychologicalAspectOutput = new EventEmitter<PsychologicalAspects>();

  private cognitionDeficit: CognitionDeficit;
  private negativeAttitudesAging: NegativeAttitudesAging;
  private depression: Depression;
  private comments_psico: string;

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
      this.psychologicalAspectInput = new PsychologicalAspects(data);
      this.psychologicalAspectOutput.emit(this.psychologicalAspectInput);
    });
  }
}
