import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DAOService {
    constructor(protected http: HttpClient) {
    }

    getObjects(urlObject: string) {
        return this.http.get(urlObject);
    }

    getObject(urlObject: string, id: string) {
        return this.http.get(urlObject + `${id}/`);
    }

    postObject(urlObject: string, object: any) {
      return this.http.post(urlObject, object);
    }

    patchObject(urlObject: string, object: any) {
      console.log(object);
      return this.http.patch(urlObject + `${object.id}/`,  object);
    }

    putObject(urlObject: string, object: any) {
        return this.http.put(urlObject + `${object.id}/`, object);
    }

    deleteObject(urlObject: string, id: string) {
        return this.http.delete(`${urlObject}${id}/`);
    }

}
