// Angular Module
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

// ReactiveX
import { Observable } from 'rxjs/Observable'; // <-- Not using right now
import 'rxjs/add/operator/map'; // <-- Not using right now

// Service
import { AuthenticationService } from './authentication.service';

// Model
import { User } from '../_models/user'; // <-- Not using right now

@Injectable()
export class UserService {

  public username;

  private ROOT_URL = `http://192.168.60.76:80/`;
  // private ROOT_URL = `http://localhost:8000/`;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, private authenticationService: AuthenticationService) { }

  // getUsers(): Observable<User[]> {
  //   // add authorization header with jwt token
  //   const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
  //   const options = new RequestOptions({ headers: headers });

  //   // get users from api
  //   return this.http.get(this.ROOT_URL + 'get_auth_token/', options)
  //     .map((response: Response) => response.json());
  // }

  // GET CONNECTION HISTORYS
  getUsers() {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // IF currentUser no data
    if (currentUser === null) {

      return { 'username': null };

      //  IF currentUser have data
    } else {

      const username = currentUser['username'];
      const token = currentUser['token'];

      this.username = username;

      return { 'username': username };

    }

  }

}
