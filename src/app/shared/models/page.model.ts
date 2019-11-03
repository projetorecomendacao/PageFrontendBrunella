import { ParticipantSituation } from './participant.model';
import { PsychologicalAspects } from './psychological-aspects.model';
import { BiologicalAspects } from './biological-aspects.model';
import { SocialAspects } from './social-aspects.model';
import { MultidisciplinaryDomain } from './multidimentional-aspects';

export class Page {
  private service: string;
  private entrance: Date;
  private interviewed: string;
  private interviewer: string;
  private avaliation_date: Date;
  private participant: number;

  private participant_situation: ParticipantSituation;
  private psychologicalAspects: PsychologicalAspects;
  private biologicalAspects: BiologicalAspects;
  private socialAspects: SocialAspects;
  private multidisciplinaryDomain: MultidisciplinaryDomain;

  constructor(data: any = {}) {
    this.service = data.service;
    this.entrance = data.entrance;
    this.interviewed = data.interviewed;
    this.interviewer = data.interviewer;
    this.avaliation_date = data.avaliation_date;
    this.participant = data.participant;
    this.participant_situation = data.participant_situation;
    this.psychologicalAspects = data.psychologicalAspects;
    this.biologicalAspects = data.biologicalAspects;
    this.socialAspects = data.socialAspects;
    this.multidisciplinaryDomain = data.multidisciplinaryDomain;
  }

  getService() { return this.service; }
  getEntrance() { return this.entrance; }
  getInterviewed() { return this.interviewed; }
  getInterviewer() { return this.interviewer; }
  getAvaliation_date() { return this.avaliation_date; }
  getParticipant() { return this.participant; }
  getParticipant_situation() { return this.participant_situation; }
  getPsychologicalAspects() { return this.psychologicalAspects; }
  getBiologicalAspects() { return this.biologicalAspects; }
  getSocialAspects() { return this.socialAspects; }
  getMultidisciplinaryDomain() { return this.multidisciplinaryDomain; }
}
