export class Participant {
  private id: number;
  private p00_email: string;
  private p01_name: string;
  private p02_address: string;
  private p03_communication: string;
  private p04_birth_date: string;
  private p05_age: number;
  private p06_gender: string;
  private p20_profile_photo_URL: string;

  constructor(participant: any) {
    this.id = participant.id;
    this.p00_email = participant.p00_email;
    this.p01_name = participant.p01_name;
    this.p02_address = participant.p02_address;
    this.p03_communication = participant.p03_communication;
    this.p04_birth_date = participant.p04_birth_date;
    this.p05_age = participant.p05_age;
    this.p06_gender = participant.p06_gender;
    this.p20_profile_photo_URL = participant.p20_profile_photo_URL;
  }

  getId() { return this.id; }
  getName(): string { return this.p01_name; }
  getProfilePhotoURL(): string { return this.p20_profile_photo_URL; }
  getAge(): number { return this.p05_age; }
  getDescription() { return null; }
}

export class ParticipantSituation {
  private id: number;
  private p07_marital_status: string;
  private p08_schooling: string;
  private p09_study_time: number;
  private p10_is_retired: string;
  private p10_retired_profession: string;
  private p10_actual_profession: string;
  private p11_retire_more_time_activity: string;
  private p12_is_working_professionals_activities: string;
  private p12_professional_activities: string;
  private p13_income_I: string;
  private p13_income_F: string;
  private p14_lives_with: string;
  private p15_has_religion: string;
  private p15_religion: string;
  private p16_health_self_report: string;
  private p20_weight: number;
  private p20_height: number;
  private p20_IMC: number;

  constructor(data) {
    this.id = data.id;
    this.p07_marital_status = data.p07_marital_status;
    this.p08_schooling = data.p08_schooling;
    this.p09_study_time = data.p09_study_time;
    this.p10_is_retired = data.p10_is_retired;
    this.p10_retired_profession = data.p10_retired_profession;
    this.p10_actual_profession = data.p10_actual_profession;
    this.p11_retire_more_time_activity = data.p11_retire_more_time_activity;
    this.p12_is_working_professionals_activities = data.p12_is_working_professionals_activities;
    this.p12_professional_activities = data.p12_professional_activities;
    this.p13_income_I = data.p13_income_I;
    this.p13_income_F = data.p13_income_F;
    this.p14_lives_with = data.p14_lives_with;
    this.p15_has_religion = data.p15_has_religion;
    this.p15_religion = data.p15_religion;
    this.p16_health_self_report = data.p16_health_self_report;
    this.p20_weight = data.p20_weight;
    this.p20_height = data.p20_height;
    this.p20_IMC = data.p20_IMC;
  }

  public getId() { return this.id; }
  public getQ7() { return this.p07_marital_status; }
  public getQ8() { return this.p08_schooling; }
  public getQ9() { return this.p09_study_time; }
  public getQ10A() { return this.p10_is_retired; }
  public getQ10B() { return this.p10_retired_profession; }
  public getQ10C() { return this.p10_actual_profession; }
  public getQ11() { return this.p11_retire_more_time_activity; }
  public getQ12A() { return this.p12_is_working_professionals_activities; }
  public getQ12B() { return this.p12_professional_activities; }
  public getQ13A() { return this.p13_income_I; }
  public getQ13B() { return this.p13_income_F; }
  public getQ14() { return this.p14_lives_with; }
  public getQ15A() { return this.p15_has_religion; }
  public getQ15B() { return this.p15_religion; }
  public getQ16() { return this.p16_health_self_report; }
  public getQ20A() { return this.p20_weight; }
  public getQ20B() { return this.p20_height; }
  public getQ20C() { return this.p20_IMC; }
}
