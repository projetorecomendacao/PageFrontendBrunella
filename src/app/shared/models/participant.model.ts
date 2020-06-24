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

  public getId () {return this.id;}
  public getEmail() {return this.p00_email;}
  public getName() {return this.p01_name;}
  public getAddress() {return this.p02_address;}
  public getCommunication() {return this.p03_communication;}
  public getBirth_date() {return this.p04_birth_date;}
  public getAge() {return this.p05_age;}
  public getGender() {return this.p06_gender;}
  public getProfile_photo_URL() {return this.p20_profile_photo_URL;}
}

export class ParticipantSituation {
  private id: number;
  private p01_name: string;
  private p02_address: string;
  private p03_communication: string;
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
  private p30_car: string;
  private p30_bus: string;
  private p30_uber: string;
  private p30_ride: string;
  private p30_ride_with: string;
  private p31_comments: String;




  constructor(data: any) {
    this.id = data.id || -1;
    this.p02_address = data.p02_address;
    this.p03_communication = data.p03_communication;
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
    this.p30_car = data.p30_car;
    this.p30_bus = data.p30_bus;
    this.p30_uber = data.p30_uber;
    this.p30_ride = data.p30_ride;
    this.p30_ride_with = data.p30_ride_with;
    this.p31_comments = data.p31_comments;
  }

  public getId() { return this.id; }
  public getAddress() {return this.p02_address;}
  public getCommunication() {return this.p03_communication;}
  public getMarital_status() { return this.p07_marital_status; }
  public getSchooling() { return this.p08_schooling; }
  public getStudy_time() { return this.p09_study_time; }
  public getIs_retired() { return this.p10_is_retired; }
  public getRetired_profession() { return this.p10_retired_profession; }
  public getActual_profession() { return this.p10_actual_profession; }
  public getRetire_more_time_activity() { return this.p11_retire_more_time_activity; }
  public getIs_working_professionals_activities() { return this.p12_is_working_professionals_activities; }
  public getProfessional_activities() { return this.p12_professional_activities; }
  public getIncome_I() { return this.p13_income_I; }
  public getIncome_F() { return this.p13_income_F; }
  public getLives_with() { return this.p14_lives_with; }
  public getHas_religion() { return this.p15_has_religion; }
  public getReligion() { return this.p15_religion; }
  public getHealth_self_report() { return this.p16_health_self_report; }
  public getWeight() { return this.p20_weight; }
  public getHeight() { return this.p20_height; }
  public getIMC() { return this.p20_IMC; }
  public getCar() { return this.p30_car;}
  public getBus() { return this.p30_bus;}
  public getUber() { return this.p30_uber;}
  public getRide() { return this.p30_ride;}
  public getRide_with() { return this.p30_ride_with;}
  public getComments() { return this.p31_comments;}
}
