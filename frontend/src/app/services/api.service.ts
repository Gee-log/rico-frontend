import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import * as _ from 'lodash';

@Injectable()
export class ApiService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private ROOT_URL = `http://127.0.0.1:8000/`;

  constructor(private http: Http) { }

  // GET ALLPORT FROM API AND SEPERATE INTO TWO DIRECTION 'E' AND 'W'
  getAllPort() {

    let eports = []; // 144 EAST PORTS
    let wports = []; // 144 WEST PORTS
    let eportschunk = []; // 144 to [12,12,...]
    let wportschunk = []; // 144 to [12,12,...]
    let allPort = []; // ALL PORTS, 288 PORTS

    return this.http.get(this.ROOT_URL + 'ports/').toPromise().then((response: any) => {
      allPort = JSON.parse(response._body);
      _.each(allPort, (obj) => {
        // SEPERATE BY DIRECTION 'E'
        if (obj.direction === 'E') {
          eports.push(obj.direction + obj.number);
          eportschunk = _.chunk(eports, 12);

          // SEPERATE BY DIRECTION 'W'
        } else if (obj.direction === 'W') {
          wports.push(obj.direction + obj.number);
          wportschunk = _.chunk(wports, 12);
        }
      });
      return ({ allPort: allPort, eports: eports, wports: wports, eportschunk: eportschunk, wportschunk: wportschunk });
    })
  }
  // POST CONNECTION, DISCONNECTION, DEBUG API TO SERVER
  connectPort(east, west, action, stops?, number?) {
    // VARIABLE DETAILS
    // east = selectedEastPortID
    // west = selectedWestPortID
    // action = "connect" or "disconnect"
    // stops = stops
    // number = sequence

    // STOPS MODE
    // PAYLOAD { east, west, action, stops }
    if (stops && number === undefined) {
      return this.http.post(this.ROOT_URL + 'connections/', { east, west, action, stops }, this.options).toPromise().then((response: any) => {
        console.log(response._body);
        return response;
      }).catch(() => {
        console.log('error')
      });

      // DEBUG MODE
      // PAYLOAD { east, west, action, stops, number }
    } else if (stops && number) {
      return this.http.post(this.ROOT_URL + 'connections/', { east, west, action, stops, number }, this.options).toPromise().then((response: any) => {
        console.log(response._body);
        return response;
      }).catch(() => {
        console.log('error')
      });

      // NORMAL MODE
      // PAYLOAD { east, west, action }
    } else {
      return this.http.post(this.ROOT_URL + 'connections/', { east, west, action }, this.options).toPromise().then((response: any) => {
        console.log(response._body);
        return response;
      }).catch(() => {
        console.log('error')
      });
    }
  }
  // CHECK STATUS FROM CURRENT TASK
  checkStatus() {

    let status; // CURRENT STATUS
    let sequence; // CURRENT SEQUENCE
    let action; // CURRENT ACTION

    return this.http.get(this.ROOT_URL + 'checktask/').toPromise().then((response: any) => {
      response = JSON.parse(response._body);
      _.each(response, (obj) => {
        status = obj.status;
        sequence = obj.sequence;
        action = obj.action;
      });
      return ({ status: status, sequence: sequence, action: action });
    })
  }
  // CHECK CONNECTION STATUS ALL PORT
  setConnectedPort() {

    return this.http.get(this.ROOT_URL + 'connections/?action=connected').toPromise().then((response: any) => {
      response = JSON.parse(response._body);
      return (response)
    })
  }

}

