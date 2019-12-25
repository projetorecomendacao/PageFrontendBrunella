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
  private created_at: Date;
  private updated_at: Date;
  private gerontologist: number;
  private participant_id: number;
  private participant_situation_id: number;
  private psychologicalAspects_id: number;
  private biologicalAspects_id: number;
  private socialAspects_id: number;
  private multidisciplinaryDomain_id: number;

  private participant: Participant;
  private participant_situation: ParticipantSituation;
  private psychologicalAspects: PsychologicalAspects;
  private biologicalAspects: BiologicalAspects;
  private socialAspects: SocialAspects;
  private multidisciplinaryDomain: MultidisciplinaryDomain;

  constructor(data: any = {}, participant?: Participant, participant_situation?: ParticipantSituation, psychologicalAspects?: PsychologicalAspects, biologicalAspects?: BiologicalAspects, socialAspects?: SocialAspects, multidisciplinaryDomain?: MultidisciplinaryDomain) {
    this.id = data.id || -1;
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

    if (data.created_at && !(data.created_at instanceof Date))
      this.created_at = new Date(data.created_at);
    else
      this.created_at = data.created_at;

    if (data.updated_at && !(data.updated_at instanceof Date))
      this.updated_at = new Date(data.updated_at);
    else
      this.updated_at = data.updated_at;

    this.gerontologist = data.gerontologist;
    this.participant_id = data.participant;
    this.participant_situation_id = data.participant_situation;
    this.psychologicalAspects_id = data.psychologicalAspects;
    this.biologicalAspects_id = data.biologicalAspects;
    this.socialAspects_id = data.socialAspects;
    this.multidisciplinaryDomain_id = data.multidisciplinaryDomain;

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
  getUpdated_at() { return this.updated_at; }
  getGerontologist() { return this.gerontologist; }
  getParticipantId() { return this.participant_id; }
  getParticipant_situationId() { return this.participant_situation_id; }
  getPsychologicalAspectsId() { return this.psychologicalAspects_id; }
  getBiologicalAspectsId() { return this.biologicalAspects_id; }
  getSocialAspectsId() { return this.socialAspects_id; }
  getMultidisciplinaryDomainId() { return this.multidisciplinaryDomain_id; }

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
