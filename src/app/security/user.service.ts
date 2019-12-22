import { Injectable } from '@angular/core';
import { DAOService } from '../shared/dao.service';
import { SocialUser } from 'angularx-social-login';
import { REST_URL_EXPERTS } from '../shared/REST_API_URLs';

@Injectable()
export class UserService {

  private _user: User = new User();

  constructor(protected dao: DAOService) {
    dao.postObject(REST_URL_EXPERTS + 'getSelf/', {}).subscribe(data => this._user = new User(data));
  }

  get user(): User { return this._user; }
  getId() { return this.user.getId(); }
  getName() { return this.user.getName(); }
}

export class User {
  private id: number;
  private name: string;

  constructor(data: any = {}) {
    this.id = data.id;
    this.name = data.name;
  }

  getId() { return this.id; }
  getName() { return this.name; }

  setId(id: number) { this.id = id; }
  setName(name: string) { this.name = name; }
}
