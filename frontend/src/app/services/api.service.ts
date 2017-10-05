// ANGULAR MODULE
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType } from '@angular/http';

// Third-Party
import * as _ from 'lodash';
import * as FileSaver from 'file-saver';


@Injectable()
export class ApiService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private ROOT_URL = `http://localhost/`;

  constructor(private http: Http) { }

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
      return this.http.post(this.ROOT_URL + 'connections/', { east, west, action, stops },
        this.options).toPromise().then((response: any) => {

          response = JSON.parse(response._body);

          if (response.status === 'error' || response.status === 'alarm') {

            return (response);

          } else {

            return ({ 'status': undefined, 'error': undefined });

          }

        }).catch(() => {
          console.error('POST ERROR');
        });
      // DEBUG MODE
      // PAYLOAD { east, west, action, stops, number }
    } else if (stops && number) {
      return this.http.post(this.ROOT_URL + 'connections/', { east, west, action, stops, number },
        this.options).toPromise().then((response: any) => {

          response = JSON.parse(response._body);

          if (response.status === 'error' || response.status === 'alarm') {

            return (response);

          } else {

            return ({ 'status': undefined, 'error': undefined });

          }

        }).catch(() => {
          console.error('POST DEBUG MODE ERROR!');
        });
      // NORMAL MODE
      // PAYLOAD { east, west, action }
    } else {
      return this.http.post(this.ROOT_URL + 'connections/', { east, west, action }, this.options).toPromise().then((response: any) => {

        response = JSON.parse(response._body);

        if (response.status === 'error' || response.status === 'alarm') {

          return (response);

        } else {

          return ({ 'status': undefined, 'error': undefined });

        }

      }).catch(() => {
        console.error('POST NORMAL MODE ERROR!');
      });
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

    });

  }
  // CHECK CONNECTION STATUS ALL PORT
  getConnectedPort() {

    return this.http.get(this.ROOT_URL + 'connections/?action=connected').toPromise().then((response: any) => {
      response = JSON.parse(response._body);
      return (response);

    }).catch(() => {
      console.error('GET CONNECTED PORT ERROR!');
    });

  }
  // GET CONNECTION HISTORYS
  getConnectionHistory() {

    return this.http.get(this.ROOT_URL + 'connectionhistorys/').toPromise().then((response: any) => {
      response = JSON.parse(response._body);
      return (response);

    });

  }
  // GET ALARM HISTORY
  getAlarmHistory() {

    return this.http.get(this.ROOT_URL + 'alarms/').toPromise().then((response: any) => {
      response = JSON.parse(response._body);
      return (response);

    });

  }
  // POST ALARM
  postAlarm(alarm, detail, severity) {

    return this.http.post(this.ROOT_URL + 'alarms/', { alarm, detail, severity }, this.options).toPromise().then((response: any) => {
      console.log(response._body);
      return response;

    }).catch(() => {
      console.error('POST ERROR');
    });

  }
  // POST PENDING TASK
  pendingTask(id) {

    return this.http.post(this.ROOT_URL + 'pendingtask/', { id }, this.options).toPromise().then((response: any) => {
      console.log(response._body);
      return response;

    }).catch(() => {
      console.error('POST ERROR');
    });

  }
  // POST CANCEL TASK
  cancelTask(id, action) {

    return this.http.post(this.ROOT_URL + 'connectionhistorys/', { id, action }, this.options).toPromise().then((response: any) => {
      console.log(response._body);
      return response;

    }).catch(() => {
      console.error('POST ERROR');
    });

  }
  // CLEAR DATABASE DATA
  clearDatabase(action) {

    return this.http.post(this.ROOT_URL + 'connectionhistorys/', { action }, this.options).toPromise().then((response: any) => {
      console.log(response._body);
      return response;

    }).catch(() => {
      console.error('POST ERROR');
    });

  }
  // SAVE DATA (CSV FILE)
  saveData_Connectionhistory(type) {

    return this.http.post(this.ROOT_URL + 'connectionhistorys/', { type }, this.options).toPromise().then((response: any) => {
      console.log(response._body);
      return response;
    }).catch(() => {
      console.error('POST ERROR');
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

    return this.http.post(this.ROOT_URL + 'connections/', { east, west, action }, this.options).toPromise().then((response: any) => {
      response = JSON.parse(response._body);

      if (response.status === 'error') {
        console.error('status: ' + response.status + ', error_code: ' + response.error);
      } else {
        console.log('status: ' + response.status + ' east: ' + response.east + ' west: ' + response.west);
      }
      return (response);

    }).catch(() => {
      console.error('POST TESTING CONNECTION ERROR!');
    });
  }

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

}
