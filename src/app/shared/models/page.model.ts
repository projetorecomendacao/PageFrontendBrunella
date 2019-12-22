import { Participant, ParticipantSituation } from './participant.model';
import { PsychologicalAspects } from './psychological-aspects.model';
import { BiologicalAspects } from './biological-aspects.model';
import { SocialAspects } from './social-aspects.model';
import { MultidisciplinaryDomain } from './multidimentional-aspects';

export class Page {
  private id: number;
  private service: string;
  private entrance: Date;
  private interviewed: string;
  private interviewer: string;
  private avaliation_date: Date;
  private gerontologist: number;
  private participant: Participant;
  private participant_situation: ParticipantSituation;
  private psychologicalAspects: PsychologicalAspects;
  private biologicalAspects: BiologicalAspects;
  private socialAspects: SocialAspects;
  private multidisciplinaryDomain: MultidisciplinaryDomain;

  constructor(data: any = {}, participant?: Participant, participant_situation?: ParticipantSituation, psychologicalAspects?: PsychologicalAspects, biologicalAspects?: BiologicalAspects, socialAspects?: SocialAspects, multidisciplinaryDomain?: MultidisciplinaryDomain) {
    // tslint:disable-next-line:no-bitwise
    this.id = data.id | -1;
    this.service = data.service;
    if (data.entrance && !(data.entrance instanceof Date))
      this.entrance = new Date(data.entrance);
    else
      this.entrance = data.entrance;
    this.interviewed = data.interviewed;
    this.interviewer = data.interviewer;
    if (data.avaliation_date && !(data.avaliation_date instanceof Date))
      this.avaliation_date = new Date(data.avaliation_date);
    else
      this.avaliation_date = data.avaliation_date;
    this.gerontologist = data.gerontologist;
    this.participant = participant;
    this.participant_situation = participant_situation;
    this.psychologicalAspects = psychologicalAspects;
    this.biologicalAspects = biologicalAspects;
    this.socialAspects = socialAspects;
    this.multidisciplinaryDomain = multidisciplinaryDomain;
  }

  getId() { return this.id; }
  getService() { return this.service; }
  getEntrance() { return this.entrance; }
  getInterviewed() { return this.interviewed; }
  getInterviewer() { return this.interviewer; }
  getAvaliation_date() { return this.avaliation_date; }
  getGerontologist() { return this.gerontologist; }
  getParticipant() { return this.participant; }
  getParticipant_situation() { return this.participant_situation; }
  getPsychologicalAspects() { return this.psychologicalAspects; }
  getBiologicalAspects() { return this.biologicalAspects; }
  getSocialAspects() { return this.socialAspects; }
  getMultidisciplinaryDomain() { return this.multidisciplinaryDomain; }
  getRawValues() {
    const obj: any = {};
    if (this.service)
      obj.service = this.service;
    if (this.entrance)
      obj.entrance = `${this.entrance.getFullYear()}-${this.entrance.getMonth()}-${this.entrance.getDate()}`;
    if (this.interviewed)
      obj.interviewed = this.interviewed;
    if (this.interviewer)
      obj.interviewer = this.interviewer;
    if (this.avaliation_date)
      obj.avaliation_date = `${this.avaliation_date.getFullYear()}-${this.avaliation_date.getMonth()}-${this.avaliation_date.getDate()}`;
    if (this.gerontologist)
      obj.gerontologist = this.gerontologist;
    if (this.participant)
      obj.participant = this.participant.getId();
    if (this.participant_situation)
      obj.participant_situation = this.participant_situation.getId();
    if (this.psychologicalAspects)
      obj.psychologicalAspects = this.psychologicalAspects.getId();
    if (this.biologicalAspects)
      obj.biologicalAspects = this.biologicalAspects.getId();
    if (this.socialAspects)
      obj.socialAspects = this.socialAspects.getId();
    if (this.multidisciplinaryDomain)
      obj.multidisciplinaryDomain = this.multidisciplinaryDomain.getId();
    return obj;
  }

  setService(service: string) { this.service = service; }
  setEntrance(entrance: Date) { this.entrance = entrance; }
  setInterviewed(interviewed: string) { this.interviewed = interviewed; }
  setInterviewer(interviewer: string) { this.interviewer = interviewer; }
  setAvaliation_date(avaliation_date: Date) { this.avaliation_date = avaliation_date; }
  setGerontologist(gerontologist: number) { this.gerontologist = gerontologist; }
  setParticipant(participant: Participant) { this.participant = participant; }
  setParticipant_situation(participant_situation: ParticipantSituation) { this.participant_situation = participant_situation; }
  setPsychologicalAspects(psychologicalAspects: PsychologicalAspects) { this.psychologicalAspects = psychologicalAspects; }
  setBiologicalAspects(biologicalAspects: BiologicalAspects) { this.biologicalAspects = biologicalAspects; }
  setSocialAspects(socialAspects: SocialAspects) { this.socialAspects = socialAspects; }
  setMultidisciplinaryDomain(multidisciplinaryDomain: MultidisciplinaryDomain) { this.multidisciplinaryDomain = multidisciplinaryDomain; }
}
