// Angular Module
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

<<<<<<< HEAD
// Api Service
import { ApiService } from '../services/api.service';

=======
>>>>>>> 7a0edfd... Login work on frontend

@Injectable()
export class AuthenticationService {

  public token: string;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private ROOT_URL = `http://localhost:8000/`;

<<<<<<< HEAD
  constructor(private http: Http, private ApiService: ApiService) {
=======
  constructor(private http: Http) {
>>>>>>> 7a0edfd... Login work on frontend
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  // Login
  login(username: string, password: string) {
    return this.http.post(this.ROOT_URL + 'get_auth_token/', { username, password }, this.options).toPromise().then((response: any) => {
      response = JSON.parse(response._body);

      // login successful if there's a jwt token in the response
      const token = response && response['token'];
<<<<<<< HEAD

=======
>>>>>>> 7a0edfd... Login work on frontend
      if (token) {
        // set token property
        this.token = token;

        // store username and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

<<<<<<< HEAD
        // set token for Api Service
        localStorage.setItem('token', JSON.stringify({ token: token }));

=======
>>>>>>> 7a0edfd... Login work on frontend
        // return true to indicate successful login
        return true;
      } else {
        // return false to indicate failed login
        return false;
      }

    }).catch(() => {
      return { 'error': 'wrong username or password' };
    });

  }
  // Logout
  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
<<<<<<< HEAD
    localStorage.removeItem('token');
=======
>>>>>>> 7a0edfd... Login work on frontend
  }

}
