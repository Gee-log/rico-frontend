import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { ApiService } from '../services/api.service';
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

  constructor(private http: Http, private ApiService: ApiService) { }

  ngOnInit() {

    // FETCH DATA
    this.fetchData();
    // SET COLOR OF PORT CONNECTION
    this.setConnectedPort();
    // CHECK STATUS EVERY 5 SEC.
    setInterval(() => {
      this.checkStatus();
    }, 5000);
    // setInterval(() => {
    //   this.test();
    // });
  }

  // FETCH DATA
  fetchData() {

    this.ApiService.getAllPort().then((data) => {
      this.eports = data.eports;
      this.eportschunk = data.eportschunk;
      this.wports = data.wports;
      this.wportschunk = data.wportschunk;
    });

  }
  // CHECK CURRENT ROBOT STATUS
  checkStatus() {

    this.ApiService.checkStatus().then((data) => {
      this.sequence = data.sequence;
      this.status = data.status;
      this.action = data.action;
      console.log('Cuurent sequence :', this.sequence, 'Current status :', this.status, 'Current action :', this.action);
      this.setConnectedPort(); // SET PORT COLOR BY STATUS
      this.unlockButton(this.eValue, this.wValue, this.status); // UNLOCK OR LOCK BUTTON BY CURRENT STATUS

      // CHECK CURRENT STATUS OF TASK
      // WHEN CURRENT STATUS IS SUCCESS
      if (this.status === 'success') {
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
  // GET EASTPORT ID ON CLICK
  setEastID(eastID) {

    this.selectedEastPortID = eastID; // SET EASTPORT ID
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
  unlockConnection(x, y) {

    if ((x && y) === true) {
      console.log('You are select available port!');
      $('#Connect').removeAttr('disabled');

    } else if ((x && y) === false) {
      console.log('You are not select available port!');
      $('#Connect').attr('disabled disabled');
    }

  }
  // SHOW HIS PAIR WHEN CLICK EAST PORT
  eastPair() {

    // QUERY VALUE IN PAIR AND WHEN CLICK SHOW IT'S PAIR
    for (const i in this.pair) {

      // IF SELECT CORRECT PAIR UNLOCK DISCONNECT BUTTON
      if (this.pair[i][0] === this.selectedWestPortID && i === this.selectedEastPortID) {
        $('#' + i).addClass('selected-pair');
        $('#' + this.pair[i][0]).addClass('selected-pair');
        $('#Disconnect').removeAttr('disabled');

        // SHOW IT'S PAIR WHEN CLICK EAST PORT
      } else if (i === this.selectedEastPortID) {
        $('#' + i).addClass('pair');
        $('#' + this.pair[i][0]).addClass('pair');
      }
    }

    // QUERY VALUE IN PAIR AND WHEN CLICK SHOW HIS PAIR
    // _.each(this.pair, (obj) => {
    //   console.log(this.pair[obj]);
    //   if (this.selectedEastPortID === obj[0]['E']) {
    //     $('.East, .West').removeClass('selected');
    //     $('#' + obj[0]).addClass('pair');
    //     $('#' + obj[1]).addClass('pair');
    //     console.log('His pair : ' + obj[1]);
    //   }
    //   // IF CLICKED ON HIS PAIR UNLOCK DISCONNECT BUTTON
    //   if (this.selectedEastPortID === obj[0] && this.selectedWestPortID === obj[1]) {
    //     console.log('Correct pair');
    //     $('#Disconnect').removeAttr('disabled');
    //   }
    // });

  }
  // SHOW HIS PAIR WHEN CLICK WEST PORT
  westPair() {

    // QUERY VALUE IN PAIR AND WHEN CLICK SHOW IT'S PAIR
    for (const i in this.pair) {

      // IF SELECT CORRECT PAIR UNLOCK DISCONNECT BUTTON
      if (this.pair[i][0] === this.selectedWestPortID && i === this.selectedEastPortID) {
        $('#' + i).addClass('selected-pair');
        $('#' + this.pair[i][0]).addClass('selected-pair');
        $('#Disconnect').removeAttr('disabled');

        // SHOW IT'S PAIR WHEN CLICK EAST PORT
      } else if (this.pair[i][0] === this.selectedWestPortID) {
        $('#' + i).addClass('pair');
        $('#' + this.pair[i][0]).addClass('pair');
      }
    }

    // QUERY VALUE IN PAIR AND WHEN CLICK SHOW HIS PAIR
    // _.each(this.pair, (obj) => {
    //   if (this.selectedWestPortID === obj[1]) {
    //     $('.East, .West').removeClass('selected');
    //     $('#' + obj[0]).addClass('pair');
    //     $('#' + obj[1]).addClass('pair');
    //     console.log('His pair : ' + obj[0]);
    //   }
    //   // IF CLICKED ON HIS PAIR UNLOCK DISCONNECT BUTTON
    //   if (this.selectedEastPortID === obj[0] && this.selectedWestPortID === obj[1]) {
    //     console.log('Correct pair');
    //     $('#Disconnect').removeAttr('disabled');
    //   }
    // });

  }
  // LOCK AND UNLOCK BUTTONS BY CHECKING CURRENT STATUS
  unlockButton(eValue, wValue, status) {

    let sumValue; // SUM OF wValue AND eValue
    sumValue = eValue + wValue;

    /* SUM = 0, STATUS = SUCCESS OR SUM = 0, STATUS = 0 OR SUM = 0, STATUS = UNDEFINED
     UNLOCK CONNECT BUTTON
     LOCK CONTINUE */
    if (sumValue === 0 && status === 'success' || sumValue === 0 && status === 'error' || sumValue === 0 && status === undefined) {
      // $('#Connect').removeAttr('disabled');
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

    let classString = '';
    // TO DO
    // return (this.selectedEastPortID === Eport) ? 'selected' : '';
    if (this.selectedEastPortID === Eport) {
      classString = 'selected';
    } else {
      classString = '';
    }
    return classString;

  }
  // SELECTED WEST PORT AND CHANGE COLOR WHEN CLICK
  isSelectWest(Wport) {

    let classString = '';
    // TO DO
    // return (this.selectedEastPortID === Eport) ? 'selected' : '';
    if (this.selectedWestPortID === Wport) {
      classString = 'selected';
    } else {
      classString = '';
    }
    return classString;

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
      // LOCK STOPS INPUT
      $('#stops').attr('disabled', 'disabled');
      // LOCK CONTINUE BUTTON AFTER POST
      $('#Connect').attr('disabled', 'disabled');

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
      // LOCK STOPS INPUT
      $('#stops').attr('disabled', 'disabled');
      // LOCK DISCONTINUE BUTTON AFTER POST
      $('#Disconnect').attr('disabled', 'disabled');

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
      // LOCK CONTINUE BUTTON AFTER POST
      $('#Continue').attr('disabled', 'disabled');
      // STOPS AND SEQUNCE ARE UNDEFINED OR NULL
      $('#stops').attr('disabled', 'disabled');

      // NO stops, sequence VALUE IN PAYLOAD
    } else {
      console.log('No stops or sequence value !');
    }

  }
  // SET COLOR OF PORT CONNECTION
  setConnectedPort() {

    $('#sequence').attr('disabled', 'disabled'); // LOCK SEQUENCE INPUT

    this.ApiService.getConnectedPort().then((data) => {
      const connected_port = data;
      this.pair = data;
      // var no_data = true; // VARIABLE FOR CHECK WHEN NO DATA IN TABLE

      console.log('ALL PORT CONNECTION :', data);

      // LOCAL STORAGE VARIABLE
      const selectedEastPortID = JSON.parse(localStorage.getItem('selectedEastPortID'));
      const selectedWestPortID = JSON.parse(localStorage.getItem('selectedWestPortID'));

      // CHECK IF CURRENT SELECTED PORT HAVE CONNECTED ON CLICK
      // LOCK CONNECTION BUTTON
      // for (let i in data) {

      //   if (this.selectedEastPortID === i || this.selectedWestPortID === data[i][0]) {
      //     $('#Connect').attr('disabled', 'disabled');
      //     no_data = false;
      //   }
      // }
      // QUERY REMOVE ALL COLOR IN TABLE
      // NEED TO IMPROVE !

      $('.East, .West').removeClass('connected pending break');

      // $("TE" + i).attr('data-original-title', '')
      // $("TW" + i).attr('data-original-title', '')

      // NO CONECTED PORT AT ALL
      // if (no_data) {
      //   $('#stops').removeAttr('disabled'); // UNLOCK STOPS INPUT WHEN STATUS SUCCESS
      //   $('.East, .West').removeClass('unselectable'); // UNLOCK TABLE WHEN STATUS SUCCESS
      //   $('.East, .West').removeClass('break'); // REMOVE BREAK COLOR IN TABLE
      // }

      console.log('------------------------------- All Port Status -------------------------------');

      for (const i in connected_port) {

        // IF STATUS IS SUCCESS
        if (connected_port[i][1] === 'success') {
          // $('#' + selectedEastPortID).removeClass('break'); // REMOVE CLASS 'BREAK' FROM LAST PORT VALUE
          // $('#' + selectedWestPortID).removeClass('break'); // REMOVE CLASS 'BREAK' FROM LAST PORT VALUE
          $('#' + i).addClass('connected'); // ADD GREEN COLOR
          $('#' + connected_port[i]).addClass('connected'); // ADD GREEN COLOR
          console.log(i + ' : ' + connected_port[i][0] + ' | ' + 'Status : ' + connected_port[i][1]);
          // this.pair.push([i, connected_port[i][0]]); // PUSH PAIR FOR QUERY IN SHOWING PAIR COLOR

          // IF STATUS IS STARTED OR PENDING
        } else if (connected_port[i][1] === 'started' || connected_port[i][1] === 'pending') {
          $('#' + i).addClass('pending'); // ADD RED COLOR
          $('#' + connected_port[i]).addClass('pending'); // ADD RED COLOR
          console.log(i + ' : ' + connected_port[i][0] + ' | ' + 'Status : ' + connected_port[i][1]);
          // this.pair.push([i, connected_port[i][0]]); // PUSH PAIR FOR QUERY IN SHOWING PAIR COLOR

          // IF STATUS IS BREAK
        } else if (connected_port[i][1] === 'break') {
          $('#' + i).addClass('break'); // ADD YELLOW COLOR
          $('#' + connected_port[i][0]).addClass('break'); // ADD YELLOW COLOR
          console.log(i + ' : ' + connected_port[i][0] + ' | ' + 'Status : ' + connected_port[i][1]);
          // this.pair.push([i, connected_port[i][0]]); // PUSH PAIR FOR QUERY IN SHOWING PAIR COLOR
        }
      }

      console.log('-------------------------------------------------------------------------------');
    });

  }
  // CLEAR LOCAL STORAGE STOPS VALUE
  clearValue(stops) {

    if (stops === undefined || stops === null || stops === '') {
      stops = null;
      localStorage.setItem('stops', JSON.stringify(stops));
    }

  }
  // TEST CONSOLE.LOG LOCAL STORAGE VALUE
  clear() {

    const selectedEastPortID = localStorage.getItem('selectedEastPortID');
    const selectedWestPortID = localStorage.getItem('selectedWestPortID');
    console.log(selectedEastPortID, selectedWestPortID, this.stops);
  }

}


  // setEastID(eastID) {

  //   let sumValue = this.eValue + this.wValue // FOR CHECK VALUE OF EACH PORT TABLE

  //   this.selectedEastPortID = eastID;
  //   console.log('Current East Port :', this.selectedEastPortID);
  //   console.log(sumValue);
  //   /* LOCK CONNECT, CONTINUE BUTTON
  //     UNLOCK DISCONNECT BUTTON
  //     WHEN CLICK ON CONNECTED PORT */
  //   if (!$('#' + eastID).hasClass('connected')) {
  //     $("#Connect").attr('disabled', 'disabled');
  //     $("#Continue").attr('disabled', 'disabled');
  //     $("#Disconnect").removeAttr('disabled');
  //     this.eValue = 2;
  //     /* LOCK CONNECT, DISCONNECT, CONTINUE BUTTON
  //       WHEN CLICK ON PENDING PORT */
  //   } else if ($('#' + eastID).hasClass('pending')) {
  //     $("#Connect").attr('disabled', 'disabled');
  //     $("#Continue").attr('disabled', 'disabled');
  //     $("#Disconnect").attr('disabled', 'disabled');
  //     this.eValue = 2;
  //     /* LOCK CONNECT BUTTON, DISCONNECT BUTTON
  //       UNLOCK CONTINUE BUTTON
  //       WHEN CLICK ON BREAK PORT */
  //   } else if ($('#' + eastID).hasClass('break')) {
  //     $("#Connect").attr('disabled', 'disabled');
  //     $("#Disconnect").attr('disabled', 'disabled');
  //     $("#Continue").removeAttr('disabled');
  //     this.eValue = 2;
  //     /* LOCK DISCONNECT, CONTINUE BUTTON
  //       UNLOCK CONNECT BUTTON
  //       WHEN CLICK ON AVALIABLE PORT */
  //   } else if (!$('#' + eastID).hasClass("'break', 'connected', 'pending'")) {
  //     $("#Disconnect").attr('disabled', 'disabled');
  //     $("#Continue").attr('disabled', 'disabled');
  //     $("#Connect").removeAttr('disabled');

  //   } else {
  //     $("#Disconnect").attr('disabled', 'disabled');
  //     $("#Continue").attr('disabled', 'disabled');
  //     $("#Connect").attr('disabled', 'disabled');
  //   }
