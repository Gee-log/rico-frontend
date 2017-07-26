import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';


@Injectable()
export class ApiService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private ROOT_URL = `http://127.0.0.1:8000/`;

  constructor(
    private http: Http
  ) {

  }
  getAllPort() {
    return new Promise((resolve, reject) => {
      this.http.get(this.ROOT_URL + 'ports/').subscribe((response: any) => {
        let allPort = JSON.parse(response._body);
        // let router = new Router();
        resolve(allPort);
      })
    });
  }
  // POST Connetion API
  connectPort(east, west, action, stops?, number?) {
    if (stops && number === undefined) {
      return this.http.post(this.ROOT_URL + 'connections/', { east, west, action, stops }, this.options).toPromise().then((response: any) => {
        console.log(response._body);
        return response;
      }).catch(() => {
        console.log('error')
      });
    } else if (stops && number) {
      return this.http.post(this.ROOT_URL + 'connections/', { east, west, action, stops, number }, this.options).toPromise().then((response: any) => {
        console.log(response._body);
        return response;
      }).catch(() => {
        console.log('error')
      });
    } else {
      return this.http.post(this.ROOT_URL + 'connections/', { east, west, action }, this.options).toPromise().then((response: any) => {
        console.log(response._body);
        return response;
      }).catch(() => {
        console.log('error')
      });
    }
  }
  // POST Disconnection 
  // disconnectPort(east, west, action, stops?) {
  //   if (stops) {
  //     return this.http.post(this.ROOT_URL + 'connections/', { east, west, action, stops }, this.options)
  //   } else {

  //   }
  // }
}
