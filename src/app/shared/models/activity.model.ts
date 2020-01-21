export class Activity {
  _id: number;
  _description: string;

  _characteristics: {id: number, description: string}[];
  _benefit: {id: number, description: string}[];
  _restriction: {id: number, description: string}[];
  _type: {id: number, description: string}[];

  constructor(data: any = {}) {
    this._id = data.id;
    this._description = data.description;
    this._characteristics = data.characteristic;
    this._benefit = data.benefit;
    this._restriction = data.restriction;
    this._type = data.type;
  }

  get id() { return this._id; }
  get title() { return ''; }
  get description() { return this._description; }
  set description(description: string) { this._description = description; }
  get characteristics() { return this._characteristics; }
  get benefit() { return this._benefit; }
  get restriction() { return this._restriction; }
  get type() { return this._type; }
}
