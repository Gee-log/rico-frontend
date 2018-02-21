// Angular Module
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// Third-Party
import * as _ from 'lodash';

@Injectable()
export class UserService {

  private username: string;
  private headers: any = new Headers({ 'Content-Type': 'application/json' });
  private options: any = new RequestOptions({ headers: this.headers });
  // private ROOT_URL: string = `http://192.168.60.73:80/`;
  private ROOT_URL: string = `http://localhost:8000/`;

  constructor(
    private _http: Http) { }

  // GET CONNECTION HISTORYS
  getUsers() {
    const currentUser: object = JSON.parse(localStorage.getItem('currentUser'));

    // IF currentUser no data
    if (currentUser === null) {
      return ({ 'username': null });

      //  IF currentUser have data
    } else {
      const username: string = currentUser['username'];
      const token: string = currentUser['token'];
      this.username = username;

      return ({ 'username': username });
    }

  }
  // GET USER'S ROLE
  getUserRoles() {
    const currentUser: object = JSON.parse(localStorage.getItem('currentUser'));
    const params: object = { 'username': currentUser['username'] };
    let username: string;
    let role: string;
    let email: string;

    return this._http.get(this.ROOT_URL + 'users/', { params: params }).toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);
      _.each(response_object, (obj) => {
        username = obj['username'];
        role = obj['role'];
        email = obj['email'];
      });

      return ({ 'username': username, 'role': role, 'email': email });

    });

  }

}
