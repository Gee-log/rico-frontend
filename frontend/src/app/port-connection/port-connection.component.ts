import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { ApiService } from '../services/api.service';
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

export class PortConnectionComponent implements OnInit {

  eports = []; // 144 EAST PORTS
  wports = []; // 144 WEST PORTS
  eportschunk = []; // 144 to [12,12,...]
  wportschunk = []; // 144 to [12,12,...]
  selectedEastPortID = ''; // CURRENT SELECTED EAST PORT
  selectedWestPortID = ''; // CURRENT SELECTED WEST PORT
  stops = JSON.parse(localStorage.getItem('stops')); // CURRENT STOPS POINT ROBOT IN DEBUG MODE
  sequence; // CURRENT SEQUENCE ROBOT IN DEBUG MODE
  status; // CURRENT STATUS TASK OF ROBOT
  action; // CURRENT ACTION IN DEBUG MODE
  connectedPair = []; // CONNECTED PAIR {east, west, status}
  eValue = 1; // VALUE OF EPORT
  wValue = 1; // VALUE OF WPORT
  pair = []; // PAIR OF CONNECTED PORT {[east, west]}
  availableEastPort = false; // SET DEFAULT CURRENT SELECTED EAST PORT TO FALSE
  availableWestPort = false; // SET DEFAULT CURRENT SELECTED WEST PORT TO FALSE
  toggleValue = false; // TOGGLE VALUE
  eportNote = []; // EAST PORT NOTE
  wportNote = []; // WEST PORT NOTE
  portID = []; // PORT ID
  unavailableports = 282; // UNAVAILABLEPORTS
  availableports = 288 - this.unavailableports; // AVAILABLEPORTS
  connectedports = 2; // CONNECTEDPORTS

  public timerInterval: any; // set public variable type any

  // Pie
  public pieChartLabels: string[] = ['connected', 'available', 'unavailable'];
  public pieChartData: number[] = [this.connectedports, this.availableports, this.unavailableports];
  public pieChartType: string = 'pie';

  // Radar
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType: string = 'radar';


  constructor(private http: Http, private ApiService: ApiService) { }


  ngOnInit() {

    // FETCH DATA
    this.fetchData();
    // SET COLOR OF PORT CONNECTION
    this.setConnectedPort();
    // CHECK STATUS EVERY 5 SEC.
    this.timerInterval = setInterval(() => {
      this.checkStatus();
    }, 3000);
    // OLD VERSION
    // setInterval(() => {
    //   this.checkStatus();
    // }, 5000);
    // setInterval(() => {
    //   this.test();
    // });

  }

  ngOnDestroy() {

    clearInterval(this.timerInterval); // CLEAR INTERVAL

  }

  // events
  public chartClicked(e: any): void {

    console.log(e);

  }

  public chartHovered(e: any): void {

    console.log(e);

  }
  // FETCH DATA
  fetchData(): void {

    this.ApiService.getAllPort().then((data) => {
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

    let i = id.substring(1);
    let index = parseInt(i) - 1;

    if (id == 'E' + id.substring(1)) {
      return this.eportNote[index]
    }

  }
  // PUSH WEST PORT NOTE
  pushWestNote(id) {

    let i = id.substring(1);
    let index = parseInt(i) - 1;

    if (id == 'W' + id.substring(1)) {
      return this.wportNote[index]
    }

  }
  // CHECK CURRENT ROBOT STATUS
  checkStatus() {

    this.ApiService.checkStatus().then((data) => {
      console.log(data);
      this.sequence = data.sequence;
      this.status = data.status;
      this.action = data.action;
      console.log('Cuurent sequence :', this.sequence, 'Current status :', this.status, 'Current action :', this.action);
      this.setConnectedPort(); // SET PORT COLOR BY STATUS
      this.unlockButton(this.eValue, this.wValue, this.status); // UNLOCK OR LOCK BUTTON BY CURRENT STATUS

      // CHECK CURRENT STATUS OF TASK
      // WHEN CURRENT STATUS IS SUCCESS
      if (this.status === 'success' || this.status === 'revoked' || this.status == 'failure' || this.status == 'canceled') {
        $('.East, .West').removeClass('unselectable'); // UNLOCK TABLE WHEN CURRENT STATUS IS SUCCESS
        $('#stops').removeAttr('disabled'); // UNLOCK STOPS INPUT WHEN CURRENT STATUS IS SUCCESS
        $('#sequence').attr('disabled', 'disabled'); // LOCK SEQUENCE INPUT
        // WHEN CURRENT STATUS IS BREAK, PENDING, STARTED
      } else if (this.status === 'break' || this.status === 'pending' || this.status === 'started') {
        $('.East, .West').addClass('unselectable'); // LOCK TABLE WHEN CURRENT STATUS IS BREAK, PENDING, STARTED
        $('#stops').attr('disabled', 'disabled'); // LOCK STOPS INPUT WHEN STATUS IS BREAK, PENDING, STARTED
        $('#sequence').attr('disabled', 'disabled'); // LOCK SEQUENCE INPUT
      }
    });

  }
  // CHECK CURRENT SELECTED FOR ADD RED BORDER
  checkCurrentSelected() {

    const east = this.selectedEastPortID;
    const west = this.selectedWestPortID;

    if (((east && west) !== '') && (!$('#' + east).hasClass('selected') || (!$('#' + west).hasClass('selected')))) {
      $('.East, .West').removeClass('current-selected');
      $('#' + east).addClass('current-selected');
      $('#' + west).addClass('current-selected');
    }

  }
  // GET EASTPORT ID ON CLICK
  setEastID(eastID) {

    this.selectedEastPortID = eastID; // SET EASTPORT ID
    this.checkCurrentSelected(); // SET BORDER COLOR TO CURRENT SELECTED EAST PORT
    localStorage.setItem('selectedEastPortID', JSON.stringify(eastID)); // SET LOCALSTORAGE VALUE OF selectedEastPortID

    console.log('Current East Port :', this.selectedEastPortID);

    // WHEN CLICK ON CONNECTED PORT
    if ($('#' + eastID).hasClass('connected')) {
      this.eValue = 1;
      this.unlockButton(this.eValue, this.wValue, this.status);
      $('.East, .West').removeClass('selected pair selected-pair');
      $('#Disconnect').attr('disabled', 'disabled');
      this.eastPair();
      this.availableEastPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
      this.availableWestPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT

      // WHEN NOT CLICK ON CONNECTED PORT
    } else {
      this.eValue = 0;
      this.availableEastPort = true;
      this.unlockConnection(this.availableEastPort, this.availableWestPort);
      this.unlockButton(this.eValue, this.wValue, this.status);
      $('.East, .West').removeClass('pair selected-pair');
      $('#Disconnect').attr('disabled', 'disabled');
    }

  }
  // GET WESTPORT ID ON CLICK
  setWestID(westID) {

    this.selectedWestPortID = westID; // SET WESTPORT ID
    this.checkCurrentSelected(); // SET BORDER COLOR TO CURRENT SELECTED WEST PORT
    localStorage.setItem('selectedWestPortID', JSON.stringify(westID)); // SET LOCALSTORAGE VALUE OF selectedWestPortID

    console.log('Current West Port :', this.selectedWestPortID);

    // WHEN CLICK ON CONNECTED PORT
    if ($('#' + westID).hasClass('connected')) {
      this.wValue = 1;
      this.unlockButton(this.eValue, this.wValue, this.status);
      $('.East, .West').removeClass('selected pair selected-pair');
      $('#Disconnect').attr('disabled', 'disabled');
      this.westPair();
      this.availableEastPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT
      this.availableWestPort = false; // SET TO FALSE WHEN CLICK UNAVAILABLE PORT

      // WHEN NOT CLICK ON CONNECTED PORT
    } else {
      this.wValue = 0;
      this.availableWestPort = true;
      this.unlockConnection(this.availableEastPort, this.availableWestPort);
      this.unlockButton(this.eValue, this.wValue, this.status);
      $('.East, .West').removeClass('pair selected-pair');
      $('#Disconnect').attr('disabled', 'disabled');
    }

  }
  // UNLOCK CONNECT BUTTON
  unlockConnection(availableEastPort, availableWestPort) {

    // IF TWO AVAILABLE PORTS ARE SELECTED
    if ((availableEastPort && availableWestPort) === true) {
      console.log('You are select available port!');
      $('#Connect').removeAttr('disabled');

      // IF TWO AVAILABLE PORTS ARE NOT SELECTED
    } else if ((availableEastPort && availableWestPort) === false) {
      console.log('You are not select available port!');
      $('#Connect').attr('disabled disabled');
    }

  }
  // SHOW HIS PAIR WHEN CLICK EAST PORT
  eastPair() {

    _.each(this.pair, (obj) => {
      let east = 'E' + obj.east;
      let west = 'W' + obj.west;
      if (this.selectedEastPortID === east && this.selectedWestPortID === west) {
        $('#' + east).addClass('selected-pair');
        $('#' + west).addClass('selected-pair');
        $('#Disconnect').removeAttr('disabled');
      } else if (east === this.selectedEastPortID) {
        $('#' + east).addClass('pair');
        $('#' + west).addClass('pair');
      }
    })

  }
  // SHOW HIS PAIR WHEN CLICK WEST PORT
  westPair() {

    _.each(this.pair, (obj) => {
      let east = 'E' + obj.east;
      let west = 'W' + obj.west;
      if (this.selectedEastPortID === east && this.selectedWestPortID === west) {
        $('#' + east).addClass('selected-pair');
        $('#' + west).addClass('selected-pair');
        $('#Disconnect').removeAttr('disabled');
      } else if (west === this.selectedWestPortID) {
        $('#' + east).addClass('pair');
        $('#' + west).addClass('pair');
      }
    })

  }
  // LOCK AND UNLOCK BUTTONS BY CHECKING CURRENT STATUS
  unlockButton(eValue, wValue, status) {

    let sumValue; // SUM OF wValue & eValue
    sumValue = eValue + wValue;

    /* SUM = 0, STATUS = SUCCESS OR SUM = 0, STATUS = 0 OR SUM = 0, STATUS = UNDEFINED
     UNLOCK CONNECT BUTTON
     LOCK CONTINUE */
    if (sumValue === 0 && status === 'success' || sumValue === 0 && status === 'error' || sumValue === 0 && status === undefined) {
      $('#stops').removeAttr('disabled');
      $('#Continue').attr('disabled', 'disabled');
      console.log('UNLOCK CONNECT BUTTON | STATUS: ', status);

      // SUM = 1 LOCK ALL BUTTONS
    } else if (sumValue === 1) {
      $('#Connect, #Disconnect, #Continue').attr('disabled', 'disabled');
      console.log('LOCK CONNECT & DISCONNECT & CONTINUE BUTTONS');

      // STATUS = STARTED OR STATUS = PENDING OR STATUS = UNDEFINED
    } else if (status === 'started' || status === 'pending' || status === undefined) {
      $('#Connect, #Disconnect, #Continue').attr('disabled', 'disabled');
      console.log('LOCK CONNECT & DISCONNECT & CONTINUE BUTTONS | STATUS: ', status);

      // STATUS = BREAK
    } else if (status === 'break' && this.sequence !== null && this.sequence !== undefined) {
      $('#Continue').removeAttr('disabled');
      $('#Connect, #Disconnect').attr('disabled', 'disabled');
      console.log('LOCK CONNECT & DISCONNECT | STATUS: ', status);
    }

  }
  // SELECTED EAST PORT AND CHANGE COLOR WHEN CLICK
  isSelectEast(Eport) {

    return (this.selectedEastPortID === Eport) ? 'selected' : '';

    // // TO DO
    // let classString = '';
    // if (this.selectedEastPortID === Eport) {
    //   classString = 'selected';

    // } else {
    //   classString = '';
    // }

    // return classString;

  }
  // SELECTED WEST PORT AND CHANGE COLOR WHEN CLICK
  isSelectWest(Wport) {

    return (this.selectedWestPortID === Wport) ? 'selected' : '';

    // TO DO
    // let classString = '';
    // if (this.selectedWestPortID === Wport) {
    //   classString = 'selected';

    // } else {
    //   classString = '';
    // }

    // return classString;

  }
  // POST CONNECTION
  postConnection() {

    // LOCK TABLE AFTER POST
    $('.East, .West').addClass('unselectable');
    // LOCK STOPS INPUT AFTER POST
    $('#stops').attr('disabled', 'disabled');
    // LOCK CONNECT BUTTON AFTER POST
    $('#Connect').attr('disabled', 'disabled');
    // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
    $('.East, .West').removeClass('selected pair selected-pair');

    // PAYLOAD { east, west, action, stops }
    if (this.stops) {
      // SET LOCALSTORAGE VALUE OF stops
      localStorage.setItem('stops', JSON.stringify(this.stops));
      // POST DATA
      this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'connect', this.stops);

      // PAYLOAD { east, west, action }
    } else {
      this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'connect');
      // LOCK CONTINUE BUTTON AFTER POST
      $('#Connect').attr('disabled', 'disabled');
    }

  }
  // POST DISCONNECTION
  postDisconnection() {

    // LOCK TABLE AFTER POST
    $('.East, .West').addClass('unselectable');
    // LOCK STOPS INPUT AFTER POST
    $('#stops').attr('disabled', 'disabled');
    // LOCK DISCONNECT BUTTON AFTER POST
    $('#Disconnect').attr('disabled', 'disabled');
    // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
    $('.East, .West').removeClass('selected pair selected-pair');

    // PAYLOAD { east, west, action, stops }
    if (this.stops) {
      // SET LOCALSTORAGE VALUE OF stops
      localStorage.setItem('stops', JSON.stringify(this.stops));
      // POST DATA
      this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'disconnect', this.stops);

      // PAYLOAD { east, west, action }
    } else {
      this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), 'disconnect');
      // LOCK DISCONTINUE BUTTON AFTER POST
      $('#Disconnect').attr('disabled', 'disabled');
    }

  }
  // POST DEBUG
  postDebug() {

    // LOCK TABLE AFTER POST
    $('.East, .West').addClass('unselectable');
    // LOCK CONTINUE BUTTON AFTER POST
    $('#Continue').attr('disabled', 'disabled');
    // LOCK STOPS INPUT AFTER POST
    $('#stops').attr('disabled', 'disabled');
    // REMOVE PAIR, SELECTED-PAIR AND SELECTED COLOR IN EACH TABLE AFTER POST
    $('.East, .West').removeClass('selected pair selected-pair');

    //  PAYLOAD { east, west, action, stops, number }
    if (this.stops && this.sequence) {
      // GET LOCALSTORAGE VALUE OF stops
      const stops = localStorage.getItem('stops');
      // GET LOCALSTORAGE VALUE OF selectedEastPortID
      const selectedEastPortID = localStorage.getItem('selectedEastPortID');
      // GET LOCALSTORAGE VALUE OF selectedWestPortID
      const selectedWestPortID = localStorage.getItem('selectedWestPortID');
      // POST DATA
      this.ApiService.connectPort(JSON.parse(selectedEastPortID).substring(1), JSON.parse(selectedWestPortID).substring(1),
        this.action, JSON.parse(stops), this.sequence);

      // NO stops, sequence VALUE IN PAYLOAD
    } else {
      console.log('No stops or sequence value !');
    }

  }
  // SET COLOR OF PORT CONNECTION
  setConnectedPort() {

    $('#sequence').attr('disabled', 'disabled'); // LOCK SEQUENCE INPUT

    this.ApiService.getConnectedPort().then((data) => {

      console.log('ALL PORT CONNECTION :', data);

      // SET PORT DATA IN PAIR
      this.pair = data;

      // LOCAL STORAGE VARIABLE
      const selectedEastPortID = JSON.parse(localStorage.getItem('selectedEastPortID'));
      const selectedWestPortID = JSON.parse(localStorage.getItem('selectedWestPortID'));

      $('.East, .West').removeClass('connected pending break');

      console.log('------------------------------- All Port Status -------------------------------');

      _.each(data, (obj) => {
        if (obj.status === 'success') {
          let east = 'E' + obj.east;
          let west = 'W' + obj.west;
          let status = obj.status;
          $('#' + east).addClass('connected'); // ADD GREEN COLOR
          $('#' + west).addClass('connected'); // ADD GREEN COLOR
          console.log(east + ' : ' + west + ' | ' + 'Status : ' + status);
        } else if (obj.status === 'started' || obj.status === 'pending') {
          let east = 'E' + obj.east;
          let west = 'W' + obj.west;
          let status = obj.status;
          $('#' + east).addClass('pending'); // ADD RED COLOR
          $('#' + west).addClass('pending'); // ADD RED COLOR
          console.log(east + ' : ' + west + ' | ' + 'Status : ' + status);
        } else if (obj.status === 'break') {
          let east = 'E' + obj.east;
          let west = 'W' + obj.west;
          let status = obj.status;
          $('#' + east).addClass('break'); // ADD YELLOW COLOR
          $('#' + west).addClass('break'); // ADD YELLOW COLOR
          console.log(east + ' : ' + west + ' | ' + 'Status : ' + status);
        }
      })

      console.log('-------------------------------------------------------------------------------');
    });

  }
  // CLEAR LOCAL STORAGE STOPS VALUE
  clearValue(stops) {

    // CLEAR STOPS LOCALSTORAGE VALUE
    if (stops === undefined || stops === null || stops === '') {
      stops = null;
      localStorage.setItem('stops', JSON.stringify(stops));
    }

    // LOCK CONNECT BUTTON WHEN INVALID STOPS INPUT
    else if ($('#stops').hasClass('ng-invalid')) {
      $('#Connect').attr('disabled', 'disabled');
    }

  }
  // TEST CONSOLE.LOG LOCAL STORAGE VALUE
  clear() {

    const selectedEastPortID = localStorage.getItem('selectedEastPortID');
    const selectedWestPortID = localStorage.getItem('selectedWestPortID');
    console.log(selectedEastPortID, selectedWestPortID, this.stops);
  }
  // PUSH CONNECTED PORT OF EAST TO EAST TOOLTIP
  tooltipEast(EastID) {

    for (const i in this.pair) {
      let east = 'E' + this.pair[i].east
      let west = 'W' + this.pair[i].west
      if (EastID == east) {
        return 'Connected to ' + west
      }
    }
  }
  // PUSH CONNECTED PORT OF WEST TO WEST TOOLTIP
  tooltipWest(WestID) {

    for (const i in this.pair) {
      let east = 'E' + this.pair[i].east
      let west = 'W' + this.pair[i].west
      if (WestID == west) {
        return 'Connected to ' + east
      }
    }

  }
  // CHANGE POSITION OF SECOND TOOLTIP
  etooltipPostion(EastID) {

    // IF CONNECTED PORT RETURN TOOLTIP POSTION = RIGHT
    for (const i in this.pair) {
      let east = 'E' + this.pair[i].east
      if (EastID === east) {
        return 'right'
      }
    }
    // ELSE RETURN TOOLTIP POSTION = ABOVE
    return 'above'
  }
  // CHANGE POSITION OF SECOND TOOLTIP
  wtooltipPostion(WestID) {

    // IF CONNECTED PORT RETURN TOOLTIP POSTION = LEFT
    for (const i in this.pair) {
      let west = 'W' + this.pair[i].west
      if (WestID === west) {
        return 'left'
      }
    }
    // ELSE RETURN TOOLTIP POSTION = ABOVE
    return 'above'
  }
  // TOGGLE DEBUG BUTTON
  toggleDebugMode() {

    if ($('#toggleDebugButton').hasClass('mat-checked')) {

      $('#stops, #sequence').toggle();

    }
  }
  // DISABLE NOT AVAILABLE EAST PORT
  disabledEastPort(id) {

    return (id !== 'E1' && id !== 'E2' && id != 'E3') ? 'port-unselectable' : '';

    // if (id !== 'E1' && id !== 'E2' && id !== 'E3') {
    //   return 'port-unselectable'
    // } else {
    //   return ''
    // }

  }
  // DISABLE NOT AVAILABLE WEST PORT
  disabledWestPort(id) {

    return (id !== 'W1' && id !== 'W2' && id != 'W3') ? 'port-unselectable' : '';

    // if (id !== 'W1' && id !== 'W2' && id !== 'W3') {
    //   return 'port-unselectable'
    // } else {
    //   return ''
    // }
  }

}
