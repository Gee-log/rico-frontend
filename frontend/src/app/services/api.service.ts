// ANGULAR MODULE
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType } from '@angular/http';

// Api Service
import { AuthenticationService } from '../services/authentication.service';

// Reactive
import { Observable } from 'rxjs/Rx';

// Third-Party
import * as _ from 'lodash';
import * as FileSaver from 'file-saver';
import { error } from 'selenium-webdriver';

@Injectable()
export class ApiService {

  private authToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'; // <-- Set fake token
  private headers: any = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.authToken });
  private options: any = new RequestOptions({ headers: this.headers });
  // private ROOT_URL = `http://192.168.60.73:80/`;
  private ROOT_URL: string = `http://localhost:8000/`;

  constructor(
    private _http: Http) { }

  // GET ALLPORT FROM API AND SEPERATE INTO TWO DIRECTION 'E' AND 'W'
  getAllPort() {

    const eports: Array<string> = []; // 144 EAST PORTS
    const wports: Array<string> = []; // 144 WEST PORTS
    let eportschunk: Array<object> = []; // 144 to [12,12,...]
    let wportschunk: Array<object> = []; // 144 to [12,12,...]
    let allPort: object = []; // ALL PORTS, 288 PORTS
    const eportNote: Array<string> = []; // EAST PORT NOTE
    const wportNote: Array<string> = []; // WEST PORT NOTE
    const id: Array<string> = []; // OBJECT ID

    return this._http.get(this.ROOT_URL + 'ports/').toPromise().then((response: any) => {
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
        eports: eports, wports: wports, eportschunk: eportschunk,
        wportschunk: wportschunk, eportNote: eportNote, wportNote: wportNote, id: id
      });

    });

  }
  // GET USERNAME
  getUsername() {

    if (localStorage.getItem('currentUser') !== null && localStorage.getItem('currentUser') !== undefined) {
      const user_data: object = JSON.parse(localStorage.getItem('currentUser'));
      return user_data['username'];
    }

  }
  // POST CONNECTION, DISCONNECTION, DEBUG API TO SERVER
  connectPort(east: string, west: string, action: string, stops?: string, number?: number) {
    // VARIABLE DETAILS
    // east = selectedEastPortID
    // west = selectedWestPortID
    // action = "connect" or "disconnect"
    // stops = stops
    // number = sequence

    // STOPS MODE
    // PAYLOAD { east, west, action, stops }

    // set local authToken, header, options
    const authToken: string = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers: any = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options: any = new RequestOptions({ headers: headers });
    const username: string = this.getUsername();

    // START DEBUG MODE
    if (stops && number === undefined) {
      return this._http.post(this.ROOT_URL + 'connections/', { east, west, action, stops, username },
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
      return this._http.post(this.ROOT_URL + 'connections/', { east, west, action, stops, number },
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
      return this._http.post(this.ROOT_URL + 'connections/', { east, west, action, username }, options).toPromise()
        .then((response: any) => {

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
  parseErrorBody(error: any) {

    try {
      const response: any = JSON.parse(error._body);
      return response;

    } catch (e) {

      if (e instanceof SyntaxError) {
        const parse: any = new DOMParser();
        const htmlData: any = parse.parseFromString(error._body, 'text/html');
        const title: any = htmlData.getElementsByTagName('title')[0].textContent;
        const error_message: any = htmlData.getElementsByClassName('exception_value')[0].textContent;

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

    return this._http.get(this.ROOT_URL + 'checktask/').toPromise().then((response: any) => {
      response = JSON.parse(response._body);
      // OLD VERSION
      // _.each(response, (obj) => {
      //   status = obj.status;
      //   sequence = obj.sequence;
      //   action = obj.action;
      // });
      // NEW VERSION
      const status: string = response.status; // CURRENT STATUS
      const sequence: number = response.sequence; // CURRENT SEQUENCE
      const action: string = response.action; // CURRENT ACTION

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

    // set local authToken, header, options
    const authToken: string = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers: any = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options: any = new RequestOptions({ headers: headers });
    const params: object = { 'action': 'connected' };

    return this._http.get(this.ROOT_URL + 'connections/', { headers: headers, params: params }).toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);
      return response_object;

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

    return this._http.get(this.ROOT_URL + 'connectionhistorys/').toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      return response_object;

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

    return this._http.get(this.ROOT_URL + 'alarms/').toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      return response_object;

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
  // GET CURRENT ALARM
  getCurrentAlarm() {

    // set local authToken, header, options
    const authToken: string = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers: any = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options: any = new RequestOptions({ headers: headers });

    return this._http.get(this.ROOT_URL + 'alarms/', { headers: headers }).toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      return response_object;

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
  // GET LATEST FIVE CONNECTION
  getLatestFiveConnection() {

    // set local authToken, header, options
    const authToken: string = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers: any = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options: any = new RequestOptions({ headers: headers });
    const params: object = { 'action': 'latest_five_connection' };

    return this._http.get(this.ROOT_URL + 'connectionhistorys/', { headers: headers, params: params }).toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      return response_object;

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
  postAlarm(alarm: string, detail: string, severity: number) {

    return this._http.post(this.ROOT_URL + 'alarms/', { alarm, detail, severity }, this.options).toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      console.log(response_object);

      return response_object;

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
  // POST CANCEL TASK
  cancelTask(id: string, action: string) {

    // set local authToken, header, options
    const authToken: string = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers: any = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options: any = new RequestOptions({ headers: headers });

    return this._http.post(this.ROOT_URL + 'connectionhistorys/', { id, action }, options).toPromise().then((response: any) => {

      const response_object = JSON.parse(response._body);

      console.log(response_object);

      return response_object;

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
    const authToken: string = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers: any = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options: any = new RequestOptions({ headers: headers });

    return this._http.post(this.ROOT_URL + 'connectionhistorys/', { action }, options).toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      return response_object;

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
  // CLEAR DATABASE DATA
  clearLatestOperation(action: string) {

    // set local authToken, header, options
    const authToken: string = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers: any = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options: any = new RequestOptions({ headers: headers });

    return this._http.post(this.ROOT_URL + 'operations/', { action }, options).toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      return response_object;

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
  saveDataConnectionHistory(type: string) {

    return this._http.post(this.ROOT_URL + 'connectionhistorys/', { type }, this.options).toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      console.log(response_object);

      return response_object;

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
  // -------------------------- //
  // DO NOT DELETE, FOR READING //
  // -------------------------- //

  // downloadFile() {
  //   let i = {'id': '1'};
  //   const api = `http://127.0.0.1:8000/connectionhistorys/?type=connecthistorys`;
  //   const fileName = `connection_log.csv`;

  //   this._http.get(api, { responseType: ResponseContentType.Blob })
  //     .subscribe((response: any) => {

  //       // FileSaver.saveAs(response.blob(), fileName);
  //     });

  // }

  // TEST DOWLOAD (CSV FILE)
  downloadFile() {

    const path = `connectionhistorys/?type=connecthistorys`;

    return this._http.get(this.ROOT_URL + path, { responseType: ResponseContentType.Blob })
      .subscribe(
        (res: any) => {
          const blob = res.blob();
          console.log(res);
          const filename = 'connection_log.json';
          FileSaver.saveAs(blob, filename);
        }
      );

  }
  // CREATE DUMMY CONNECTION IN CONNECTION TABLE
  createDummyConnection(east: string, west: string, action: string) {

    // set local authToken, header, options
    const authToken: string = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers: any = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options: any = new RequestOptions({ headers: headers });

    return this._http.post(this.ROOT_URL + 'connections/', { east, west, action }, options).toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      if (response.status !== 200) {
        console.error('status code: ' + response.status + ' status: ' + response_object['status'] + ' error_code: ' + response.error);
      }

      return response_object;

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
  checkServerStatus() {

    let status: number;

    return this._http.get(this.ROOT_URL).toPromise().then((response: any) => {

      return (response.status);

      // IF CANNOT GET RESPONSE FROM SERVER
    }).catch(() => {

      status = 500;

      return status;

    });

  }
  // HOMING ROBOT
  homeRobotAxes() {

    return this._http.get(this.ROOT_URL + 'utilities/homes/').toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      response_object['status'] = 'success';

      return response_object;

      // IF CANNOT GET RESPONSE FROM SERVER
    }).catch((error) => {
      return { 'status': 'error', 'error': error };
    });

  }
  // ROLLBACK SMU POSITION
  rollBack(smu_no) {

    return this._http.post(this.ROOT_URL + 'utilities/rollback/', { smu_no },
      this.options).toPromise().then((response: any) => {
        const response_object = JSON.parse(response._body);

        return response_object;

      }).catch((error: any) => {
        const response = this.parseErrorBody(error);
        return response;
      });

  }
  // SELF CONNECTION SMU
  selfConnection(smu_no, connect, disconnect) {

    return this._http.post(this.ROOT_URL + 'utilities/self_connect/', { smu_no, connect, disconnect },
      this.options).toPromise().then((response: any) => {
        const response_object = JSON.parse(response._body);

        return response_object;

      }).catch((error: any) => {
        const response = this.parseErrorBody(error);
        return response;
      });

  }
  // CONTINUE OPERATION CONTINUE MODE
  continueRobotOperations() {

    const mode: string = 'robot';
    const continue_mode: string = 'continue';

    return this._http.post(this.ROOT_URL + 'taskcancelations/', { mode, continue_mode },
      this.options).toPromise().then((response: any) => {
        const response_object = JSON.parse(response._body);

        return response_object;

      }).catch((error: any) => {
        const response = this.parseErrorBody(error);
        return response;
      });

  }
  // RELOAD OPERATION CONTINUE MODE
  reloadRobotOperations() {

    const mode: string = 'robot';
    const continue_mode: string = 'reload';

    return this._http.post(this.ROOT_URL + 'taskcancelations/', { mode, continue_mode },
      this.options).toPromise().then((response: any) => {
        const response_object = JSON.parse(response._body);

        return response_object;

      }).catch((error: any) => {
        const response = this.parseErrorBody(error);
        return response;
      });

  }
  // RESTART OPERATION CONTINUE MODE
  restartRobotOperations() {

    const mode: string = 'robot';
    const continue_mode: string = 'restart';

    return this._http.post(this.ROOT_URL + 'taskcancelations/', { mode, continue_mode },
      this.options).toPromise().then((response: any) => {
        const response_object = JSON.parse(response._body);

        return response_object;

      }).catch((error: any) => {
        const response = this.parseErrorBody(error);
        return response;
      });

  }
  // GET LATEST CONNECTION
  getLatestConnection() {

    // set local authToken, header, options
    const authToken: string = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers: any = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options: any = new RequestOptions({ headers: headers });

    const params: object = { 'action': 'latest_connection' };

    return this._http.get(this.ROOT_URL + 'connectionhistorys/', { headers: headers, params: params }).toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      return response_object;
    });

  }

  // GET OPERATION TASK TIME
  getOperationTaskTime() {

    // set local authToken, header, options
    const authToken: string = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers: any = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options: any = new RequestOptions({ headers: headers });

    const params: object = { 'action': 'connection_time' };

    return this._http.get(this.ROOT_URL + 'operationhistorys/', { headers: headers, params: params }).toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      return response_object;
    });

  }
  // GET OPERATION SEQUENCE
  getOperationSequence() {

    // set local authToken, header, options
    const authToken: string = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers: any = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options: any = new RequestOptions({ headers: headers });

    let operation_sequence: number;
    let total_sequence: number;
    let operation_task_completed: number;

    return this._http.get(this.ROOT_URL + 'operationsequences/', { headers: headers }).toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);
      // const response_object = response;
      _.each(response_object, (obj) => {

        operation_sequence = obj['sequence_number'];
        total_sequence = obj['total_sequence'];

      });

      operation_task_completed = (operation_sequence / total_sequence);
      operation_task_completed = Math.round(operation_task_completed * 100);

      return { 'operation_task_completed': operation_task_completed };

    });

  }
  // GET SYSTEM UPTIME
  getSystemUptime() {

    return this._http.get(this.ROOT_URL + 'dashboard/uptime').toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      return response_object;

      // IF CANNOT GET RESPONSE FROM SERVER
    }).catch((error) => {
      return { 'status': 'error', 'error': error };
    });

  }
  // GET DASHBOARD DATA
  getDashboardData() {

    return this._http.get(this.ROOT_URL + 'dashboard/').toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      return response_object;

      // IF CANNOT GET RESPONSE FROM SERVER
    }).catch((error) => {
      return { 'status': 'error', 'error': error };
    });

  }
  // VERIFY USER WITH CURRENT BACKEND
  verifyUserWithBackend() {

    let token: string = JSON.parse(localStorage.getItem('token')); // Set sample token
    token = token['token'];

    return this._http.post(this.ROOT_URL + 'verify_user/', { token }, this.options).toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);

      console.warn('Client status: ' + response_object['status']);

      return response_object;
    });

  }
  // CREATE USER IN DATABASE
  createUser(email: string, username: string, password: string, role: string) {

    // set local authToken, header, options
    const authToken: string = JSON.parse(localStorage.getItem('token')); // Set sample token
    const headers: any = new Headers({ 'Content-Type': 'application/json', 'Authorization': authToken['token'] });
    const options: any = new RequestOptions({ headers: headers });

    return this._http.post(this.ROOT_URL + 'create_user/', { email, username, password, role }, options)
      .toPromise().then((response: any) => {
        const response_object = JSON.parse(response._body);

        console.log(response_object);

        return response_object;
      });

  }

}
