export class Activity {
  _id: number;
  _title: string;
  _description: string;
  _imageURL: string;
  _author: any;

  _characteristic: {id: number, description: string}[];
  _benefit: {id: number, description: string}[];
  _restriction: {id: number, description: string}[];
  _type: {id: number, description: string}[];

  constructor(data: any = {}) {
    this._id = data.id;
    this._title = data.title;
    this._description = data.description;
    this._imageURL = data.image;
    this._author = data.author;

    this._characteristic = data.characteristic;
    this._benefit = data.benefit;
    this._restriction = data.restriction;
    this._type = data.type;
  }

  get id() { return this._id; }

  get title() { return this._title; }
  set title(title: string) { this._title = title; }

  get description() { return this._description; }
  set description(description: string) { this._description = description; }

  get image() { return this._imageURL; }
  set image(imageURL: string) { this._imageURL = imageURL; }

  get characteristic() { return this._characteristic || []; }
  get benefit() { return this._benefit || []; }
  get restriction() { return this._restriction || []; }
  get type() { return this._type || []; }
}
