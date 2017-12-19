import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';

const API_URL = environment.apiUrl;

@Injectable()
export class PortService {

  constructor(private _http: Http) { }

  public getPorts(): Observable<any> {

    return this._http
      .get(API_URL + 'ports/')
      .map(response => {
        return response.json();
      });
  }

}
