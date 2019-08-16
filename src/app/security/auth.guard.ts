import {CanLoad, Route, UrlSegment} from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard implements CanLoad {

  private canLoadBool: boolean;

  constructor() { }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.canLoadBool;
  }

  setCanLoad(value: boolean) {
    this.canLoadBool = value;
  }
}
