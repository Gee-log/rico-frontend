// ANGULAR MODULE
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType } from '@angular/http';

import { AuthenticationService } from '../services/authentication.service';

// Reactive
import { Observable } from 'rxjs/Rx';

// Third-Party
import * as _ from 'lodash';
import * as FileSaver from 'file-saver';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';


@Injectable()
export class ApiService {

  private authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'; // <-- Set fake token
  private headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.authToken });
  private options = new RequestOptions({ headers: this.headers });
  // private ROOT_URL = `http://192.168.60.103:8000/`;
  private ROOT_URL = `http://localhost:8000/`;

  constructor(private http: Http) {

    localStorage.setItem('robot', '1');
    localStorage.setItem('continue_mode', 'reload');

  }

  // GET ALLPORT FROM API AND SEPERATE INTO TWO DIRECTION 'E' AND 'W'
  getAllPort() {

    const eports = []; // 144 EAST PORTS
    const wports = []; // 144 WEST PORTS
    let eportschunk = []; // 144 to [12,12,...]
    let wportschunk = []; // 144 to [12,12,...]
    let allPort = []; // ALL PORTS, 288 PORTS
    const eportNote = []; // EAST PORT NOTE
    const wportNote = []; // WEST PORT NOTE
    const id = []; // OBJECT ID

    return this.http.get(this.ROOT_URL + 'ports/').toPromise().then((response: any) => {
      allPort = JSON.parse(response._body);
      _.each(allPort, (obj) => {

        // SEPERATE BY DIRECTION 'E'
        if (obj.direction === 'E') {

          eports.push(obj.direction + obj.number);
          eportschunk = _.chunk(eports, 12);
          eportNote.push(obj.note);
          id.push(obj.id);

          // SEPERATE BY DIRECTION 'W'
        } else if (obj.direction === 'W') {

          wports.push(obj.direction + obj.number);
          wportschunk = _.chunk(wports, 12);
          wportNote.push(obj.note);
          id.push(obj.id);

        }
      });

      return ({
        allPort: allPort, eports: eports, wports: wports,
        eportschunk: eportschunk, wportschunk: wportschunk, eportNote: eportNote, wportNote: wportNote, id: id
      });

    });

  }
  // GET USERNAME
  getUsername() {

    if (localStorage.getItem('currentUser') !== null && localStorage.getItem('currentUser') !== undefined) {
      const user_data = JSON.parse(localStorage.getItem('currentUser'));
      return user_data['username'];
    }

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

    // set local authToken, header, options
    const authToken = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options = new RequestOptions({ headers: headers });
    const username = this.getUsername();

    // START DEBUG MODE
    if (stops && number === undefined) {
      return this.http.post(this.ROOT_URL + 'connections/', { east, west, action, stops, username },
        options).toPromise().then((response: any) => {

          response = JSON.parse(response._body);

          if (response.status === 'error' || response.status === 'alarm') {

            return (response);

          } else {

            return ({ 'status': undefined, 'error': undefined });

          }

        }).catch((error: any) => {
          // ERROR FROM SERVER
          if (error.status && error.status !== 0) {

            console.error('POST START DEBUG MODE ERROR ' + error.status, Observable.throw(new Error(error.status)));
            return ({ status: 'error', error: 'ERROR ' + error.status });

            // ERROR FROM CLIENT
          } else {
            console.error('POST START DEBUG MODE ERROR 500 Internal Server');
            return ({ status: 'error', error: 'ERROR 500' });
          }

        });
      // DEBUG MODE
      // PAYLOAD { east, west, action, stops, number }
    } else if (stops && number) {
      return this.http.post(this.ROOT_URL + 'connections/', { east, west, action, stops, number },
        options).toPromise().then((response: any) => {

          response = JSON.parse(response._body);

          if (response.status === 'error' || response.status === 'alarm') {

            return (response);

          } else {

            return ({ 'status': undefined, 'error': undefined });

          }

        }).catch((error: any) => {
          // ERROR FROM SERVER
          if (error.status && error.status !== 0) {

            console.error('POST DEBUG MODE ERROR ' + error.status, Observable.throw(new Error(error.status)));
            return ({ status: 'error', error: 'ERROR ' + error.status });

            // ERROR FROM CLIENT
          } else {
            console.error('POST DEBUG MODE ERROR 500 Internal Server');
            return ({ status: 'error', error: 'ERROR 500' });
          }

        });
      // NORMAL MODE
      // PAYLOAD { east, west, action }
    } else {
      return this.http.post(this.ROOT_URL + 'connections/', { east, west, action, username }, options).toPromise().then((response: any) => {

        response = JSON.parse(response._body);

        if (response.status === 'error' || response.status === 'alarm') {

          return (response);

        } else {

          return ({ 'status': undefined, 'error': undefined });

        }

      }).catch((error: any) => {
        // ERROR FROM SERVER
        if (error.status && error.status !== 0) {

          console.error('POST NORMAL MODE ERROR ' + error.status, Observable.throw(new Error(error.status)));
          return ({ status: 'error', error: 'ERROR ' + error.status });

          // ERROR FROM CLIENT
        } else {
          console.error('POST NORMAL MODE ERROR 500 Internal Server');
          return ({ status: 'error', error: 'ERROR 500' });
        }

      });
    }

  }
  // PARSE AN ERROR HTTPRESPONSE BODY
  parseErrorBody(error) {

    try {

      const response = JSON.parse(error._body);

      return response;

    } catch (e) {

      if (e instanceof SyntaxError) {

        const parse = new DOMParser();
        const htmlData = parse.parseFromString(error._body, 'text/html');
        const title = htmlData.getElementsByTagName('title')[0].textContent;
        const error_message = htmlData.getElementsByClassName('exception_value')[0].textContent;

        const obj: any = {
          'status': 'error',
          'action': '-',
          'sequence': '-',
          'error': title,
          'code': error_message
        };

        return <JSON>obj;

      } else {

        console.log('parseErrorBody', e);

      }
    }

  }
  // CHECK STATUS FROM CURRENT TASK
  checkStatus() {

    return this.http.get(this.ROOT_URL + 'checktask/').toPromise().then((response: any) => {
      response = JSON.parse(response._body);
      // OLD VERSION
      // _.each(response, (obj) => {
      //   status = obj.status;
      //   sequence = obj.sequence;
      //   action = obj.action;
      // });
      // NEW VERSION
      const status = response.status; // CURRENT STATUS
      const sequence = response.sequence; // CURRENT SEQUENCE
      const action = response.action; // CURRENT ACTION

      return ({ status: status, sequence: sequence, action: action });

    }).catch((error: any) => {

      if (error.status === 500) {

        const response = this.parseErrorBody(error);
        const status = response.status;
        const action = response.action;
        const sequence = response.sequence;
        const error_detail = response.error;
        const error_code = response.code;

        console.error('CHECK STATUS ERROR ' + error.status, Observable.throw(new Error(error.status)));
        return ({ status: status, action: action, sequence: sequence, error: error_detail, code: error_code });

      } else if (error.status === 400) {

        console.error('CHECK STATUS ERROR ' + error.status, Observable.throw(new Error(error.status)));

      } else if (error.status === 409) {

        console.error('CHECK STATUS ERROR ' + error.status, Observable.throw(new Error(error.status)));

      } else if (error.status === 406) {

        console.error('CHECK STATUS ERROR ' + error.status, Observable.throw(new Error(error.status)));

      } else {
        console.error('CHECK STATUS ERROR 500 Internal Server');
        return ({ status: 'error', sequence: null, action: null, error: 'ERROR 500', code: null });

      }
    });

  }
  // CHECK CONNECTION STATUS ALL PORT
  getConnectedPort() {

    return this.http.get(this.ROOT_URL + 'connections/?action=connected').toPromise().then((response: any) => {
      response = JSON.parse(response._body);
      return (response);

    }).catch((error: any) => {
      // ERROR FROM SERVER
      if (error.status && error.status !== 0) {

        console.error('GET CONNECTED PORT ERROR ' + error.status, Observable.throw(new Error(error.status)));
        return ({ status: 'error', error: 'ERROR ' + error.status });

        // ERROR FROM CLIENT
      } else {
        console.error('GET CONNECTED PORT ERROR 500 Internal Server');
        return ({ status: 'error', error: 'ERROR 500' });
      }

    });

  }
  // GET CONNECTION HISTORYS
  getConnectionHistory() {

    return this.http.get(this.ROOT_URL + 'connectionhistorys/').toPromise().then((response: any) => {
      response = JSON.parse(response._body);
      return (response);

    }).catch((error: any) => {
      // ERROR FROM SERVER
      if (error.status && error.status !== 0) {

        console.error('GET CONNECTION HISTORY ERROR ' + error.status, Observable.throw(new Error(error.status)));
        return ({ status: 'error', error: 'ERROR ' + error.status });

        // ERROR FROM CLIENT
      } else {
        console.error('GET CONNECTION HISTORY ERROR 500 Internal Server');
        return ({ status: 'error', error: 'ERROR 500' });
      }

    });

  }
  // GET ALARM HISTORY
  getAlarmHistory() {

    return this.http.get(this.ROOT_URL + 'alarms/').toPromise().then((response: any) => {
      response = JSON.parse(response._body);
      return (response);

    }).catch((error: any) => {
      // ERROR FROM SERVER
      if (error.status && error.status !== 0) {

        console.error('GET ALARM HISTORY ERROR ' + error.status, Observable.throw(new Error(error.status)));
        return ({ status: 'error', error: 'ERROR ' + error.status });

        // ERROR FROM CLIENT
      } else {
        console.error('GET ALARM HISTORY ERROR 500 Internal Server');
        return ({ status: 'error', error: 'ERROR 500' });
      }

    });

  }
  // POST ALARM
  postAlarm(alarm, detail, severity) {

    return this.http.post(this.ROOT_URL + 'alarms/', { alarm, detail, severity }, this.options).toPromise().then((response: any) => {
      console.log(response._body);
      return response;

    }).catch((error: any) => {
      // ERROR FROM SERVER
      if (error.status && error.status !== 0) {

        console.error('GET ALARM ERROR ' + error.status, Observable.throw(new Error(error.status)));
        return ({ status: 'error', error: 'ERROR ' + error.status });

        // ERROR FROM CLIENT
      } else {
        console.error('GET ALARM ERROR 500 Internal Server');
        return ({ status: 'error', error: 'ERROR 500' });
      }

    });

  }
  // POST PENDING TASK
  pendingTask(id) {

    return this.http.post(this.ROOT_URL + 'pendingtask/', { id }, this.options).toPromise().then((response: any) => {
      console.log(response._body);
      return response;

    }).catch((error: any) => {
      // ERROR FROM SERVER
      if (error.status && error.status !== 0) {

        console.error('PENDING TASK ERROR ' + error.status, Observable.throw(new Error(error.status)));
        return ({ status: 'error', error: 'ERROR ' + error.status });

        // ERROR FROM CLIENT
      } else {
        console.error('PENDING TASK ERROR 500 Internal Server');
        return ({ status: 'error', error: 'ERROR 500' });
      }

    });
  }
  // POST CANCEL TASK
  cancelTask(id, action) {

    // set local authToken, header, options
    const authToken = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.ROOT_URL + 'connectionhistorys/', { id, action }, options).toPromise().then((response: any) => {
      console.log(response._body);

      return response;

    }).catch((error: any) => {
      // ERROR FROM SERVER
      if (error.status && error.status !== 0) {

        console.error('CANCELED TASK ERROR ' + error.status, Observable.throw(new Error(error.status)));
        return ({ status: 'error', error: 'ERROR ' + error.status });

        // ERROR FROM CLIENT
      } else {
        console.error('CANCELED TASK ERROR 500 Internal Server');
        return ({ status: 'error', error: 'ERROR 500' });
      }

    });
  }
  // CLEAR DATABASE DATA
  clearDatabase(action) {

    // set local authToken, header, options
    const authToken = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.ROOT_URL + 'connectionhistorys/', { action }, options).toPromise().then((response: any) => {
      console.log(response._body);
      return response;

    }).catch((error: any) => {
      // ERROR FROM SERVER
      if (error.status && error.status !== 0) {

        console.error('CLEAR DATABASE TASK ERROR ' + error.status, Observable.throw(new Error(error.status)));
        return ({ status: 'error', error: 'ERROR ' + error.status });

        // ERROR FROM CLIENT
      } else {
        console.error('CLEAR DATABASE ERROR 500 Internal Server');
        return ({ status: 'error', error: 'ERROR 500' });
      }

    });

  }
  // SAVE DATA (CSV FILE)
  saveData_Connectionhistory(type) {

    return this.http.post(this.ROOT_URL + 'connectionhistorys/', { type }, this.options).toPromise().then((response: any) => {
      console.log(response._body);
      return response;

    }).catch((error: any) => {
      // ERROR FROM SERVER
      if (error.status && error.status !== 0) {

        console.error('SAVE DATA ERROR ' + error.status, Observable.throw(new Error(error.status)));
        return ({ status: 'error', error: 'ERROR ' + error.status });

        // ERROR FROM CLIENT
      } else {
        console.error('SAVE DATA ERROR 500 Internal Server');
        return ({ status: 'error', error: 'ERROR 500' });
      }

    });

  }

  // downloadFile() {
  //   let i = {'id': '1'};
  //   const api = `http://127.0.0.1:8000/connectionhistorys/?type=connecthistorys`;
  //   const fileName = `connection_log.csv`;

  //   this.http.get(api, { responseType: ResponseContentType.Blob })
  //     .subscribe((response: any) => {

  //       // FileSaver.saveAs(response.blob(), fileName);
  //     });

  // }

  // TEST DOWLOAD (CSV FILE)
  downloadFile() {

    const path = `connectionhistorys/?type=connecthistorys`;

    return this.http.get(this.ROOT_URL + path, { responseType: ResponseContentType.Blob })
      .subscribe(
      (res: any) => {
        const blob = res.blob();
        console.log(res);
        const filename = 'connection_log.json';
        FileSaver.saveAs(blob, filename);
      }
      );

  }
  // CREATE CONNECTION IN CONNECTION TABLE
  create_connection_in_database(east, west, action) {

    // set local authToken, header, options
    const authToken = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.ROOT_URL + 'connections/', { east, west, action }, options).toPromise().then((response: any) => {
      response = JSON.parse(response._body);

      if (response.status === 'error') {
        console.error('status: ' + response.status + ', error_code: ' + response.error);
      } else {
        console.log('status: ' + response.status + ' east: ' + response.east + ' west: ' + response.west);
      }
      return (response);

    }).catch((error: any) => {
      // ERROR FROM SERVER
      if (error.status && error.status !== 0) {

        console.error('TESTING CONNECTION ERROR ' + error.status, Observable.throw(new Error(error.status)));
        return ({ status: 'error', error: 'ERROR ' + error.status });

        // ERROR FROM CLIENT
      } else {
        console.error('TESTING CONNECTION ERROR 500 Internal Server');
        return ({ status: 'error', error: 'ERROR 500' });
      }

    });

  }
  // CHECK SERVER IS ONLINE OR NOT
  check_server_status() {

    let status;

    return this.http.get(this.ROOT_URL).toPromise().then((response: any) => {

      return (response.status);

      // IF CANNOT GET RESPONSE FROM SERVER
    }).catch(() => {
      status = 500;
      return status;
    });

  }

  home_robot_axes() {
    return this.http.get(this.ROOT_URL + 'homes/').toPromise().then((response: any) => {

      const resp = JSON.parse(response._body);
      resp['status'] = 'success';
      return resp;

      // IF CANNOT GET RESPONSE FROM SERVER
    }).catch((error) => {
      return { 'status': 'error', 'error': error };
    });
  }

  continue_robot_operations() {

    const mode = 'robot';
    // const robot = localStorage.getItem('robot');
    const robot = '3';
    const continue_mode = 'continue';
    const action = JSON.parse(localStorage.getItem('action'))['action'];
    const east = JSON.parse(localStorage.getItem('selectedEastPortID')).substring(1);
    const west = JSON.parse(localStorage.getItem('selectedWestPortID')).substring(1);

    // const continue_mode = localStorage.getItem('continue_mode');

    return this.http.post(this.ROOT_URL + 'taskcancelations/', { mode, robot, continue_mode, action, east, west },
      this.options).toPromise().then((response: any) => {
        response = JSON.parse(response._body);
        // response = response;
        console.log(response);

        // return response;
        // console.log(mode, robot, continue_mode);

      }).catch((error: any) => {

        const response = this.parseErrorBody(error);

        return response;

      });

  }

  reload_robot_operations() {

    const mode = 'robot';
    // const robot = localStorage.getItem('robot');
    const robot = '3';
    const continue_mode = 'reload';
    const action = JSON.parse(localStorage.getItem('action'))['action'];
    const east = JSON.parse(localStorage.getItem('selectedEastPortID')).substring(1);
    const west = JSON.parse(localStorage.getItem('selectedWestPortID')).substring(1);

    // const continue_mode = localStorage.getItem('continue_mode');

    return this.http.post(this.ROOT_URL + 'taskcancelations/', { mode, robot, continue_mode, action, east, west },
      this.options).toPromise().then((response: any) => {
        response = JSON.parse(response._body);
        // response = response;
        console.log(response);

        // return response;
        // console.log(mode, robot, continue_mode);

      }).catch((error: any) => {

        const response = this.parseErrorBody(error);

        return response;

      });

  }

  restart_robot_operations() {

    const mode = 'robot';
    // const robot = localStorage.getItem('robot');
    const robot = '3';
    const continue_mode = 'restart';
    const action = JSON.parse(localStorage.getItem('action'))['action'];
    const east = JSON.parse(localStorage.getItem('selectedEastPortID')).substring(1);
    const west = JSON.parse(localStorage.getItem('selectedWestPortID')).substring(1);

    // const continue_mode = localStorage.getItem('continue_mode');

    return this.http.post(this.ROOT_URL + 'taskcancelations/', { mode, robot, continue_mode, action, east, west },
      this.options).toPromise().then((response: any) => {
        response = JSON.parse(response._body);
        // response = response;
        console.log(response);

        // return response;
        // console.log(mode, robot, continue_mode);

      }).catch((error: any) => {

        const response = this.parseErrorBody(error);

        return response;

      });

  }

}
