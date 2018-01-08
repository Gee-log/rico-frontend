// ANGULAR MODULE
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// Api Service
import { ApiService } from '../services/api.service';

// Third-party
import { ChartsModule } from 'ng2-charts';
import * as _ from 'lodash';
import * as $ from 'jquery';
import 'rxjs/Rx';

@Component({
  selector: 'app-port-connection',
  templateUrl: './port-connection.component.html',
  styleUrls: ['./port-connection.component.scss'],
  providers: []
})
export class PortConnectionComponent implements OnInit, OnDestroy {

  // PORTS DATA
  eports: Object = []; // 144 EAST PORTS
  wports: Object = []; // 144 WEST PORTS
  eportschunk: Object = []; // 144 to [12,12,...]
  wportschunk: Object = []; // 144 to [12,12,...]
  portID: Object = []; // PORT ID
  eportNote: Object = []; // EAST PORT NOTE
  wportNote: Object = []; // WEST PORT NOTE

  // CONNECTION DATA
  pair: Object = []; // PAIR OF CONNECTED PORT {[east, west]}

  // LOCAL & USER EVENT DATA
  selectedEastPortID: string = ''; // CURRENT SELECTED EAST PORT
  selectedWestPortID: string = ''; // CURRENT SELECTED WEST PORT
  stops = JSON.parse(localStorage.getItem('stops')); // CURRENT STOPS POINT ROBOT IN DEBUG MODE
  eValue: number = 1; // VALUE OF EPORT
  wValue: number = 1; // VALUE OF WPORT
  debugMode: boolean = false; // DEBUG MODE

  // DATA FROM CELERY
  sequence: string; // CURRENT SEQUENCE ROBOT IN DEBUG MODE
  status: string; // CURRENT STATUS TASK OF ROBOT
  action: string; // CURRENT ACTION IN DEBUG MODE
  error_message: string = undefined; // ERROR MESSAGE
  operation_task_time: string;

  // DISABLE ULITIES
  unselectable_table: boolean = false; // DISABLED TABLE
  disable_stops_input: boolean = false; // DISABLED STOPS INPUT
  disable_sequence_input: boolean = false; // DISABLED SEQUENCE INPUT
  disabled_connect_button: boolean = false; // DISABLED CONNECT BUTTON
  disabled_disconnect_button: boolean = false; // DISABLED DISCONNECT BUTTON
  disabled_continue_button: boolean = false; // DISABLED CONTINUE BUTTON
  disabled_cancel_button: boolean = false; // DISABLED CANCEL BUTTON
  disabled_continue_mode_all_button: boolean = false;
  availableEastPort: boolean = false; // SET DEFAULT CURRENT SELECTED EAST PORT TO FALSE
  availableWestPort: boolean = false; // SET DEFAULT CURRENT SELECTED WEST PORT TO FALSE
  disableEastPortArray = []; // SET UNVAILABLE EAST PORT ARRAY
  disableWestPortArray = []; // SET UNVAILABLE WEST PORT ARRAY

  // DATA FROM DOM
  all_east: Object = document.getElementsByClassName('East');
  all_west: Object = document.getElementsByClassName('West');

  // FOR ngOnDestroy
  public timerInterval: any; // set public variable type any

  constructor(
    private _apiService: ApiService,
    private _router: Router) { }

  ngOnInit() {
    // CHECK SERVER STATUS
    this.check_server_status();
    // VERIFY USER
    this.verify_user();
    // DEVICE DETECT
    this.deviceDetect();
    // FETCH DATA
    this.fetchData();
    // SET COLOR OF PORT CONNECTION
    this.setConnectedPort();
    // CHECK STATUS EVERY 5 SEC.
    this.timerInterval = setInterval(() => {
      this.checkStatus();
    }, 5000);

  }

  ngOnDestroy() {

    clearInterval(this.timerInterval); // <-- CLEAR INTERVAL

  }

  // CHECK SERVER STATUS
  check_server_status() {

    this._apiService.check_server_status().then((status) => {

      // CHECK TOKEN
      this.check_token();

      if (status === 500) {
        this._router.navigateByUrl('/500');
      }
    });

  }
  // VERIFY USER WITH CURRENT BACKEND
  verify_user() {

    this._apiService.verify_user_with_backend().then((data) => {

      if (data['status'] === 'unverified') {
        localStorage.setItem('currentUser', null);
        this._router.navigateByUrl('/login');
      }

    });

  }
  // VERIFY THAT USER CARRYING TOKEN
  check_token() {

    const token = JSON.parse(localStorage.getItem('token')); // Set sample token

    if (token === null) {
      this._router.navigateByUrl('/login');
    }

  }
  // DEVICE DETECT
  deviceDetect() {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this._router.navigateByUrl('/port_connection_mobile');
    }

  }
  // FETCH DATA
  fetchData() {

    this._apiService.getAllPort().then((data) => {
      this.eports = data.eports;
      this.eportschunk = data.eportschunk;
      this.wports = data.wports;
      this.wportschunk = data.wportschunk;
      this.eportNote = data.eportNote;
      this.wportNote = data.wportNote;
      this.portID = data.id;
    });

  }
  // PUSH EAST PORT NOTE
  pushEastNote(id) {

    const i = id.substring(1);
    const index = parseInt(i, 10) - 1;

    if (id === 'E' + id.substring(1)) {
      return this.eportNote[index];
    }

  }
  // PUSH WEST PORT NOTE
  pushWestNote(id) {

    const i = id.substring(1);
    const index = parseInt(i, 10) - 1;

    if (id === 'W' + id.substring(1)) {
      return this.wportNote[index];
    }

  }
  // CHECK CURRENT ROBOT STATUS
  checkStatus() {

    this._apiService.checkStatus().then((data) => {

      this.sequence = data.sequence;
      this.status = data.status;
      this.action = data.action;
      localStorage.setItem('action', JSON.stringify({ action: this.action }));
      console.log('Cuurent sequence :', this.sequence, 'Current status :', this.status, 'Current action :', this.action);
      this.setConnectedPort(); // SET PORT COLOR BY STATUS
      this.unlockButton(this.eValue, this.wValue, this.status); // UNLOCK OR LOCK BUTTON BY CURRENT STATUS

      // CHECK CURRENT STATUS OF TASK
      // WHEN CURRENT STATUS IS SUCCESS
      if (this.status === 'success' || this.status === 'revoked' || this.status === 'failure' || this.status === 'canceled') {
        this.unselectable_table = false; // UNLOCK TABLE WHEN CURRENT STATUS IS SUCCESS
        this.disable_stops_input = false; // UNLOCK STOPS INPUT WHEN CURRENT STATUS IS SUCCESS
        this.disable_sequence_input = true; // LOCK SEQUENCE INPUT
        document.getElementById('error-dialog').classList.add('hide');  // <-- remove class hide
        this.disabled_continue_mode_all_button = false; // LOCK ALL CONTINUE MODE BUTTONS
        this.get_lastest_task_time(); // GET AVERAGE LASTEST TASK TIME

        // WHEN CURRENT STATUS IS BREAK, PENDING, STARTED
      } else if (this.status === 'break' || this.status === 'pending' || this.status === 'started') {
        this.unselectable_table = true; // LOCK TABLE WHEN CURRENT STATUS IS BREAK, PENDING, STARTED
        this.disable_stops_input = true; // LOCK STOPS INPUT WHEN STATUS IS BREAK, PENDING, STARTED
        this.disable_sequence_input = true; // LOCK SEQUENCE INPUT
        this.disabled_continue_mode_all_button = false; // LOCK ALL CONTINUE MODE BUTTONS

        // WHEN CURRENT STATUS IS ERRROR
      } else if (this.status === 'error') {
        this.unselectable_table = true; // LOCK TABLE WHEN CURRENT STATUS IS BREAK, PENDING, STARTED
        this.disable_stops_input = true; // LOCK STOPS INPUT WHEN STATUS IS BREAK, PENDING, STARTED
        this.disable_sequence_input = true; // LOCK SEQUENCE INPUTF

        // IF data['code'] is not null
        if (data['code'] !== null) {
          this.error_message = data['status'] + ' ' + data['error'] + ', Code ' + data['code'];  // <-- set error_message
          this.checkMessageLength(); // <-- check message length

          // IF data['code] is null
        } else {
          this.error_message = data['status'] + ' ' + data['error'];  // <-- set error_message
          this.checkMessageLength(); // <-- check message length
        }

        // WHEN CURRENT STATUS IS ALARM
      } else if (this.status === 'alarm') {
        this.unselectable_table = true; // LOCK TABLE WHEN CURRENT STATUS IS BREAK, PENDING, STARTED
        this.disable_stops_input = true; // LOCK STOPS INPUT WHEN STATUS IS BREAK, PENDING, STARTED
        this.disable_sequence_input = true; // LOCK SEQUENCE INPUTF
        this.disabled_continue_mode_all_button = true; // LOCK ALL CONTINUE MODE BUTTONS

        // IF data['code'] is not null
        if (data['code'] !== null) {
          this.error_message = data['status'] + ' ' + data['error'] + ', Code ' + data['code'];  // <-- set error_message
          this.checkMessageLength(); // <-- check message length

          // IF data['code] is null
        } else {
          this.error_message = data['status'] + ' ' + data['error'];  // <-- set error_message
          this.checkMessageLength(); // <-- check message length
        }

      }

    });

  }
  // CHECK CURRENT SELECTED FOR ADD RED BORDER
  checkCurrentSelected() {

    const east = this.selectedEastPortID;
    const west = this.selectedWestPortID;


    if (((east && west) !== '') && (!document.getElementById(east).classList.contains('selected')
      || (!document.getElementById(west).classList.contains('selected')))) {

      for (let i = 0; i < 144; i++) {
        this.all_east[i].classList.remove('current-selected', 'Blink');
        this.all_west[i].classList.remove('current-selected', 'Blink');
      }

      document.getElementById(east).classList.add('current-selected', 'Blink');
      document.getElementById(west).classList.add('current-selected', 'Blink');

    }

  }
  // GET EASTPORT ID ON CLICK
  setEastID(eastID) {

    this.selectedEastPortID = eastID; // SET EASTPORT ID
    this.checkCurrentSelected(); // SET BORDER COLOR TO CURRENT SELECTED EAST PORT
    localStorage.setItem('selectedEastPortID', JSON.stringify(eastID)); // SET LOCALSTORAGE VALUE OF selectedEastPortID

    console.log('Current East Port :', this.selectedEastPortID);

    // WHEN CLICK ON CONNECTED PORT
    if (document.getElementById(eastID).classList.contains('connected')) {

      for (let i = 0; i < 144; i++) {
        this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
        this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
      }

      this.eValue = 1;
      this.unlockButton(this.eValue, this.wValue, this.status);
      this.disabled_disconnect_button = true;
      this.eastPair();
      this.availableEastPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
      this.availableWestPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT

      // WHEN NOT CLICK ON CONNECTED PORT
    } else {

      for (let i = 0; i < 144; i++) {
        this.all_east[i].classList.remove('pair', 'selected-pair');
        this.all_west[i].classList.remove('pair', 'selected-pair');
      }

      this.eValue = 0;
      this.availableEastPort = true;
      this.unlockConnection(this.availableEastPort, this.availableWestPort);
      this.unlockButton(this.eValue, this.wValue, this.status);
      this.disabled_disconnect_button = true;
    }

  }
  // GET WESTPORT ID ON CLICK
  setWestID(westID) {

    this.selectedWestPortID = westID; // SET WESTPORT ID
    this.checkCurrentSelected(); // SET BORDER COLOR TO CURRENT SELECTED WEST PORT
    localStorage.setItem('selectedWestPortID', JSON.stringify(westID)); // SET LOCALSTORAGE VALUE OF selectedWestPortID

    console.log('Current West Port :', this.selectedWestPortID);

    // WHEN CLICK ON CONNECTED PORT
    if (document.getElementById(westID).classList.contains('connected')) {

      for (let i = 0; i < 144; i++) {
        this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
        this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
      }

      this.wValue = 1;
      this.unlockButton(this.eValue, this.wValue, this.status);
      this.disabled_disconnect_button = true;
      this.westPair();
      this.availableEastPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
      this.availableWestPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT

      // WHEN NOT CLICK ON CONNECTED PORT
    } else {

      for (let i = 0; i < 144; i++) {
        this.all_east[i].classList.remove('pair', 'selected-pair');
        this.all_west[i].classList.remove('pair', 'selected-pair');
      }

      this.wValue = 0;
      this.availableWestPort = true;
      this.unlockConnection(this.availableEastPort, this.availableWestPort);
      this.unlockButton(this.eValue, this.wValue, this.status);
      this.disabled_disconnect_button = true;
    }

  }
  // UNLOCK CONNECT BUTTON
  unlockConnection(availableEastPort, availableWestPort) {

    // IF TWO AVAILABLE PORTS ARE SELECTED
    if ((availableEastPort && availableWestPort) === true) {
      console.log('You are select available port!');
      this.disabled_connect_button = false;

      // IF TWO AVAILABLE PORTS ARE NOT SELECTED
    } else if ((availableEastPort && availableWestPort) === false) {
      console.log('You are not select available port!');
      this.disabled_connect_button = true;
    }

  }
  // SHOW HIS PAIR WHEN CLICK EAST PORT
  eastPair() {

    _.each(this.pair, (obj) => {
      const east = 'E' + obj.east;
      const west = 'W' + obj.west;

      if (this.selectedEastPortID === east && this.selectedWestPortID === west) {
        document.getElementById(east).classList.add('selected-pair');
        document.getElementById(west).classList.add('selected-pair');
        this.disabled_disconnect_button = false;

      } else if (east === this.selectedEastPortID) {
        document.getElementById(east).classList.add('pair');
        document.getElementById(west).classList.add('pair');
      }

    });

  }
  // SHOW HIS PAIR WHEN CLICK WEST PORT
  westPair() {

    _.each(this.pair, (obj) => {
      const east = 'E' + obj.east;
      const west = 'W' + obj.west;

      if (this.selectedEastPortID === east && this.selectedWestPortID === west) {
        document.getElementById(east).classList.add('selected-pair');
        document.getElementById(west).classList.add('selected-pair');
        this.disabled_disconnect_button = false;

      } else if (west === this.selectedWestPortID) {
        document.getElementById(east).classList.add('pair');
        document.getElementById(west).classList.add('pair');
      }

    });

  }
  // LOCK AND UNLOCK BUTTONS BY CHECKING CURRENT STATUS
  unlockButton(eValue, wValue, status) {

    let sumValue; // SUM OF wValue & eValue
    sumValue = eValue + wValue;

    /* SUM = 0, STATUS = SUCCESS OR SUM = 0, STATUS = 0 OR SUM = 0, STATUS = UNDEFINED
     UNLOCK CONNECT BUTTON
     LOCK CONTINUE */
    if (sumValue === 0 && status === 'success' || sumValue === 0 && status === 'error' || sumValue === 0 && status === undefined) {
      this.disable_stops_input = false;
      this.disabled_continue_button = true;
      console.log('UNLOCK CONNECT BUTTON | STATUS: ', status);

      // SUM = 1 LOCK ALL BUTTONS
    } else if (sumValue === 1) {
      this.disabled_connect_button = true;
      this.disabled_disconnect_button = true;
      this.disabled_continue_button = true;
      console.log('LOCK CONNECT & DISCONNECT & CONTINUE BUTTONS');

      // STATUS = STARTED OR STATUS = PENDING OR STATUS = UNDEFINED
    } else if (status === 'started' || status === 'pending' || status === undefined) {
      this.disabled_connect_button = true;
      this.disabled_disconnect_button = true;
      this.disabled_continue_button = true;
      console.log('LOCK CONNECT & DISCONNECT & CONTINUE BUTTONS | STATUS: ', status);

      // STATUS = BREAK
    } else if (status === 'break' && this.sequence !== null && this.sequence !== undefined) {
      this.disabled_connect_button = true;
      this.disabled_disconnect_button = true;
      this.disabled_continue_button = false;
      console.log('LOCK CONNECT & DISCONNECT | STATUS: ', status);
    }

  }
  // SELECTED EAST PORT AND CHANGE COLOR WHEN CLICK
  isSelectEast(Eport) {

    return (this.selectedEastPortID === Eport) ? 'selected' : '';

  }
  // SELECTED WEST PORT AND CHANGE COLOR WHEN CLICK
  isSelectWest(Wport) {

    return (this.selectedWestPortID === Wport) ? 'selected' : '';

  }
  // POST CONNECTION
  postConnection() {

    // LOCK STOPS INPUT AFTER POST
    this.disable_stops_input = true;
    // LOCK CONNECT BUTTON AFTER POST
    this.disabled_connect_button = true;

    // PAYLOAD { east, west, action, stops }
    if (this.debugMode && this.stops) {
      // SET LOCALSTORAGE VALUE OF stops
      localStorage.setItem('stops', JSON.stringify(this.stops));
      // POST DATA
      this._apiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'connect', this.stops)
        .then((data) => {

          // IF CELERY'S CURRENT STATUS IS ERROR
          if (data.status === 'error') {
            this.error_message = data.status + ' ' + data.error;  // <-- set error_message
            this.checkMessageLength();  // <-- check message length

            // IF CELERY'S CURRENT STATUS IS NOT ERROR
          } else {
            return;
          }

        });
      // PAYLOAD { east, west, action }
    } else {
      this._apiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'connect')
        .then((data) => {

          // IF CELERY'S CURRENT STATUS IS ERROR
          if (data.status === 'error') {
            this.error_message = data.status + ' ' + data.error;  // <-- set error_message
            this.checkMessageLength();  // <-- check message length

            // IF CELERY'S CURRENT STATUS IS NOT ERROR
          } else {
            return;
          }

        });
      // LOCK CONTINUE BUTTON AFTER POST
      this.disabled_connect_button = true;
    }

    // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
    for (let i = 0; i < 144; i++) {
      this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
      this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
    }

  }
  // POST DISCONNECTION
  postDisconnection() {
    // LOCK STOPS INPUT AFTER POST
    this.disable_stops_input = true;
    // LOCK DISCONNECT BUTTON AFTER POST
    this.disabled_disconnect_button = true;

    // PAYLOAD { east, west, action, stops }
    if (this.debugMode && this.stops) {
      // SET LOCALSTORAGE VALUE OF stops
      localStorage.setItem('stops', JSON.stringify(this.stops));
      // POST DATA
      this._apiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'disconnect', this.stops)
        .then((data) => {

          // IF CELERY'S CURRENT STATUS IS ERROR
          if (data.status === 'error') {
            this.error_message = data.status + ' ' + data.error;  // <-- set error_message
            this.checkMessageLength();  // <-- check message length

            // IF CELERY'S CURRENT STATUS IS NOT ERROR
          } else {
            return;
          }

        });
      // PAYLOAD { east, west, action }
    } else {
      this._apiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'disconnect')
        .then((data) => {

          // IF CELERY'S CURRENT STATUS IS ERROR
          if (data.status === 'error') {
            this.error_message = data.status + ' ' + data.error;
            this.checkMessageLength();  // <-- check message length

            // IF CELERY'S CURRENT STATUS IS NOT ERROR
          } else {
            return;
          }

        });
      // LOCK DISCONTINUE BUTTON AFTER POST
      this.disabled_disconnect_button = true;
    }

    // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
    for (let i = 0; i < 144; i++) {
      this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
      this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
    }

  }
  // POST DEBUG
  postDebug() {

    // LOCK CONTINUE BUTTON AFTER POST
    this.disabled_continue_button = true;
    // LOCK STOPS INPUT AFTER POST
    this.disable_stops_input = true;

    //  PAYLOAD { east, west, action, stops, number }
    if (this.stops && this.sequence) {
      // GET LOCALSTORAGE VALUE OF stops
      const stops = localStorage.getItem('stops');
      // GET LOCALSTORAGE VALUE OF selectedEastPortID
      const selectedEastPortID = localStorage.getItem('selectedEastPortID');
      // GET LOCALSTORAGE VALUE OF selectedWestPortID
      const selectedWestPortID = localStorage.getItem('selectedWestPortID');
      // POST DATA
      this._apiService.connectPort(JSON.parse(selectedEastPortID).substring(1), JSON.parse(selectedWestPortID).substring(1),
        this.action, JSON.parse(stops), this.sequence)
        .then((data) => {

          // IF CELERY'S CURRENT STATUS IS ERROR
          if (data.status === 'error') {
            this.error_message = data.status + ' ' + data.error;  // <-- set error_message
            this.checkMessageLength();  // <-- check message length

            // IF CELERY'S CURRENT STATUS IS NOT ERROR
          } else {
            return;
          }

        });
      // NO stops, sequence VALUE IN PAYLOAD
    } else {
      console.log('No stops or sequence value !');
    }

    // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
    for (let i = 0; i < 144; i++) {
      this.all_east[i].classList.remove('selected', 'pair', 'selected-pair');
      this.all_west[i].classList.remove('selected', 'pair', 'selected-pair');
    }

  }
  // SET COLOR OF PORT CONNECTION
  setConnectedPort() {

    this.disable_sequence_input = true; // LOCK SEQUENCE INPUT

    this._apiService.getConnectedPort().then((data) => {

      console.log('ALL PORT CONNECTION :', data);

      // SET PORT DATA IN PAIR
      this.pair = data;

      // LOCAL STORAGE VARIABLE
      const selectedEastPortID = JSON.parse(localStorage.getItem('selectedEastPortID'));
      const selectedWestPortID = JSON.parse(localStorage.getItem('selectedWestPortID'));

      // REMOVE ALL PORT COLOR BEFORE SET PORT COLOR
      const east_td = document.getElementsByClassName('West');
      const west_td = document.getElementsByClassName('East');

      for (let i = 0; i < 144; i++) {

        if (this.all_east[0] === undefined) {
          console.log('Element are not ready !');
          return;

        } else {
          this.all_east[i].classList.remove('connected', 'pending', 'break');
          this.all_west[i].classList.remove('connected', 'pending', 'break');
        }

      }

      console.log('------------------------------- All Port Status -------------------------------');

      // IF STATUS IS ERROR SHOW ERROR DIALOG
      if (data['status'] === 'error') {
        this.error_message = data.status + ' ' + data.error;  // <-- set error_message
        this.checkMessageLength();  // <-- check message length
      }

      _.each(data, (obj) => {

        if (obj['status'] === 'success') {
          const east = 'E' + obj['east'];
          const west = 'W' + obj['west'];
          const status = obj['status'];
          document.getElementById(east).classList.add('connected'); // ADD GREEN COLOR
          document.getElementById(west).classList.add('connected'); // ADD GREEN COLOR
          console.log(east + ' : ' + west + ' | ' + 'Status : ' + status);

        } else if (obj['status'] === 'started' || obj['status'] === 'pending') {
          const east = 'E' + obj['east'];
          const west = 'W' + obj['west'];
          const status = obj['status'];
          document.getElementById(east).classList.add('pending'); // ADD RED COLOR
          document.getElementById(west).classList.add('pending'); // ADD RED COLOR
          console.log(east + ' : ' + west + ' | ' + 'Status : ' + status);

        } else if (obj['status'] === 'break') {
          const east = 'E' + obj['east'];
          const west = 'W' + obj['west'];
          const status = obj['status'];
          document.getElementById(east).classList.add('break'); // ADD YELLOW COLOR
          document.getElementById(west).classList.add('break'); // ADD YELLOW COLOR
          console.log(east + ' : ' + west + ' | ' + 'Status : ' + status);
        }

      });

      console.log('-------------------------------------------------------------------------------');

    });

  }
  // CLEAR LOCAL STORAGE STOPS VALUE
  clearValue(stops) {

    // CLEAR STOPS LOCALSTORAGE VALUE
    if (stops === undefined || stops === null || stops === '') {
      stops = null;
      localStorage.setItem('stops', JSON.stringify(stops));

      // LOCK CONNECT BUTTON WHEN INVALID STOPS INPUT
    } else if (document.getElementById('stops').classList.contains('ng-invalid')) {
      this.disabled_connect_button = true;
    }

  }
  // PUSH CONNECTED PORT OF EAST TO EAST TOOLTIP
  tooltipEast(EastID) {

    for (const i of Object.keys(this.pair)) {
      const east = 'E' + this.pair[i].east;
      const west = 'W' + this.pair[i].west;

      if (EastID === east) {
        return 'Connected to ' + west;
      }
    }

  }
  // PUSH CONNECTED PORT OF WEST TO WEST TOOLTIP
  tooltipWest(WestID) {

    for (const i of Object.keys(this.pair)) {
      const east = 'E' + this.pair[i].east;
      const west = 'W' + this.pair[i].west;

      if (WestID === west) {
        return 'Connected to ' + east;
      }
    }

  }
  // CHANGE POSITION OF SECOND TOOLTIP
  etooltipPostion(EastID) {

    // IF CONNECTED PORT RETURN TOOLTIP POSTION = RIGHT
    for (const i of Object.keys(this.pair)) {
      const east = 'E' + this.pair[i].east;

      if (EastID === east) {
        return 'right';
      }
    }
    // ELSE RETURN TOOLTIP POSTION = ABOVE
    return 'above';

  }
  // CHANGE POSITION OF SECOND TOOLTIP
  wtooltipPostion(WestID) {

    // IF CONNECTED PORT RETURN TOOLTIP POSTION = LEFT
    for (const i of Object.keys(this.pair)) {
      const west = 'W' + this.pair[i].west;

      if (WestID === west) {
        return 'left';
      }
    }
    // ELSE RETURN TOOLTIP POSTION = ABOVE
    return 'above';

  }
  // TOGGLE DEBUG BUTTON
  toggleDebugMode() {

    $('#stops, #sequence, #input-container').toggle();
    this.debugMode = !this.debugMode;
    console.log('toggleDebugMode ' + this.debugMode);

  }
  // DISABLE NOT AVAILABLE EAST PORT
  disabledEastPort(id) {

    return (this.disableEastPortArray.includes(id)) ? 'port-unselectable' : '';

  }
  // DISABLE NOT AVAILABLE WEST PORT
  disabledWestPort(id) {

    return (this.disableWestPortArray.includes(id)) ? 'port-unselectable' : '';

  }
  // CHECK MESSAGE LENGTH FOR ADJUST DIALOG BOX HEIGHT
  checkMessageLength() {

    const message_length = this.error_message.length; // <-- set message length

    // CHECK MESSAGE LENGTH FOR ADJUST DIALOG HEIGHT
    if (message_length <= 30) {
      const card = document.getElementsByTagName('md-card');
      card[0].setAttribute('style', 'height: 20px');  // <-- set height 20px

      // CHECK MESSAGE LENGTH FOR ADJUST DIALOG HEIGHT
    } else {
      const card = document.getElementsByTagName('md-card');
      card[0].setAttribute('style', 'height: 80px');  // <-- set height 80px
    }

  }
  // CONTINUE ROBOBT OPERATION TASK
  continueRobotOperation() {

    this._apiService.continue_robot_operations().then((data) => {

      if (data.status !== 'success') {
        this.error_message = data.status + ' ' + data.error;
        this.checkMessageLength();  // <-- check message length
      }

    });

  }
  // RELOAD ROBOT OPERATION TASK
  reloadRobotOperation() {

    this._apiService.reload_robot_operations().then((data) => {

      if (data.status !== 'success') {
        this.error_message = data.status + ' ' + data.error;
        this.checkMessageLength();  // <-- check message length
      }

    });

  }
  // RESTART ROBOT OPERATION TASK
  restartRobotOperation() {

    this._apiService.restart_robot_operations().then((data) => {

      if (data.status !== 'success') {
        this.error_message = data.status + ' ' + data.error;
        this.checkMessageLength();  // <-- check message length
      }

    });

  }
  // FORCE DISABLE CONTINUE BUTTON
  force_disable_continue_button() {

    document.getElementById('Continue').setAttribute('disabled', 'disabled');

  }
  // FORCE DISABLE CONTINUE_MODE BUTTONS
  foruce_disable_continue_mode_button() {

    document.getElementById('Cancel').setAttribute('disabled', 'disabled');
    document.getElementById('Restart').setAttribute('disabled', 'disabled');
    document.getElementById('Reload').setAttribute('disabled', 'disabled');

  }
  // VALIDATION TO ENABLE OR DISABLE BUTTONS
  validate_continue_mode_all_button() {

    if (this.status === 'alarm') {
      document.getElementById('Cancel').removeAttribute('disabled');
      document.getElementById('Restart').removeAttribute('disabled');
      document.getElementById('Reload').removeAttribute('disabled');

    } else {
      return;
    }

  }
  // CHECK STATUS FOR VALIDATION TO ADD CLASS TO ERROR DIALOG
  check_status_for_hide_dialog() {

    if (this.status === 'alarm' || this.status === 'error') {
      return null;

    } else {
      return 'hide';
    }

  }
  // GET LASTEST TASK TIME
  get_lastest_task_time() {

    this._apiService.get_operation_task_time().then((data) => {

      if (data['average_minute'] === 0 && data['average_second'] !== 0) {
        this.operation_task_time = data['average_second'] + 'sec';

      } else if ((data['average_minute'] === 0 && data['average_second'] === 0)
        || ((data['average_minute'] === undefined && data['average_second'] === undefined))) {

          this.operation_task_time = 'empty task';

      } else {
        this.operation_task_time = data['average_minute'] + 'min ' + data['average_second'] + 'sec';
      }

    });

  }

}
