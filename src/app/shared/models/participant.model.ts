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

  reconstructor(participant: any) {
    this.id = participant.id || this.id;
    this.p00_email = participant.p00_email || this.p00_email;
    this.p01_name = participant.p01_name || this.p01_name;
    this.p02_address = participant.p02_address || this.p02_address;
    this.p03_communication = participant.p03_communication || this.p03_communication;
    this.p04_birth_date = participant.p04_birth_date || this.p04_birth_date;
    this.p05_age = participant.p05_age || this.p05_age;
    this.p06_gender = participant.p06_gender || this.p06_gender;
    this.p20_profile_photo_URL = participant.p20_profile_photo_URL || this.p20_profile_photo_URL;
  }

  getId() {
    return this.id;
  }

  getName(): string {
    return this.p01_name;
  }

  getProfilePhotoURL(): string {
    return this.p20_profile_photo_URL;
  }

  getAge(): number {
    return this.p05_age;
  }

  getDescription() {
    return null;
  }
}
