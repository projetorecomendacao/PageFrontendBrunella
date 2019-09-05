export class Participant {
  private id: number;
  private name: string;
  private email: string;
  private profilePhotoURL: string;
  private age: number;
  private communication: string;
  private birthDate: string;
  private gender: string;
  private weight: number;
  private height: number;

  constructor(participant: any) {
    this.id = participant.id;
    this.name = participant.name;
    this.email = participant.email;
    this.profilePhotoURL = participant.profilePhotoURL;
    this.age = participant.age;
    this.communication = participant.communication;
    this.birthDate = participant.birthDate;
    this.gender = participant.gender;
    this.weight = participant.weight;
    this.height = participant.height;
  }

  reconstructor(participant: any) {
    this.id = participant.id ? participant.id : this.id;
    this.name = participant.name ? participant.name : this.name;
    this.email = participant.email ? participant.email : this.email;
    this.profilePhotoURL = participant.profilePhotoURL ? participant.profilePhotoURL : this.profilePhotoURL;
    this.age = participant.age ? participant.age : this.age;
    this.communication = participant.communication ? participant.communication : this.communication;
    this.birthDate = participant.birthDate ? participant.birthDate : this.birthDate;
    this.gender = participant.gender ? participant.gender : this.gender;
    this.weight = participant.weight ? participant.weight : this.weight;
    this.height = participant.height ? participant.height : this.height;
  }

  getId() {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getProfilePhotoURL(): string {
    return this.profilePhotoURL;
  }

  getAge(): number {
    return this.age;
  }

  getDescription() {
    return null;
  }
}
