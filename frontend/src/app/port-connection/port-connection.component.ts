import { Component, OnInit } from '@angular/core';
import { PortService } from '../port.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import * as _ from 'lodash';
import * as $ from 'jquery';
import 'rxjs/Rx';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-port-connection',
  templateUrl: './port-connection.component.html',
  styleUrls: ['./port-connection.component.scss'],
  providers: [PortService]
})

export class PortConnectionComponent implements OnInit {

  eports = []; // 144 EAST PORTS
  wports = []; // 144 WEST PORTS
  eportschunk = []; // 144 to [12,12,...]
  wportschunk = []; // 144 to [12,12,...]
  selectedEastPortID = ""; // CURRENT SELECTED EAST PORT
  selectedWestPortID = ""; // CURRENT SELECTED WEST PORT
  stops; // CURRENT STOPS POINT ROBOT IN DEBUG MODE
  sequence; // CURRENT SEQUENCE ROBOT IN DEBUG MODE
  status; // CURRENT STATUS TASK OF ROBOT
  action; // CURRENT ACTION IN DEBUG MODE


  constructor(private portService: PortService, private http: Http, private ApiService: ApiService) { }

  ngOnInit() {

    // FETCH DATA
    this.fetchData();
    // SET COLOR OF PORT CONNECTION
    this.setConnectedPort();
    // CHECK STATUS EVERY 5 SEC.
    setInterval(() => {
      this.checkStatus();
    }, 5000);

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
      this.setConnectedPort();
    });

  }
  // GET EASTPORT ID ON CLICK
  setEastID(eastID) {

    this.selectedEastPortID = eastID;
    console.log('Current East Port :', this.selectedEastPortID);

  }
  // GET WESTPORT ID ON CLICK
  setWestID(westID) {

    this.selectedWestPortID = westID;
    console.log('Current West Port :', this.selectedWestPortID);

  }
  // SELECTED EAST PORT AND CHANGE COLOR WHEN CLICK
  isSelectEast(Eport) {

    return this.selectedEastPortID === Eport;

  }
  // SELECTED WEST PORT AND CHANGE COLOR WHEN CLICK
  isSelectWest(Wport) {

    return this.selectedWestPortID === Wport;

  }
  // POST CONNECTION
  postConnection() {

    // PAYLOAD { east, west, action, stops }
    if (this.stops) {
      this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), "connect", this.stops);

      // PAYLOAD { east, west, action }
    } else {
      this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), "connect");
    }
  }
  // POST DISCONNECTION
  postDisconnection() {

    // PAYLOAD { east, west, action, stops }
    if (this.stops) {
      this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), "disconnect", this.stops);

      // PAYLOAD { east, west, action }
    } else {
      this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), "disconnect");
    }
  }
  // POST DEBUG
  postDebug() {

    //  PAYLOAD { east, west, action, stops, number }
    if (this.stops && this.sequence) {
      this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), this.action, this.stops, this.sequence);

      // stops and sequence are undefined or null 
    } else {
      console.log("No stops or sequence value !")
    }
  }
  // SET COLOR OF PORT CONNECTION
  setConnectedPort() {
    this.ApiService.setConnectedPort().then((data) => {
      let connected_port = data;
      console.log(data);
      for (let i = 0; i < 144; i++) {
        $("TE" + i).attr('data-original-title', '')
        $("TW" + i).attr('data-original-title', '')
      }

      for (let i in connected_port) {

        // IF STATUS IF SUCCESS
        if (connected_port[i][1] === 'success') {
          $('#' + i).removeClass('pending');
          $('#' + i).removeClass('break');
          $('#' + i).addClass('connected');
          $('#' + connected_port[i]).removeClass('pending');
          $('#' + connected_port[i]).removeClass('break');
          $('#' + connected_port[i]).addClass('connected');

          // IF STATUS IS STARTED OR PENDING
        } else if (connected_port[i][1] === 'started' || connected_port[i][1] === 'pending') {
          $('#' + i).addClass('pending');
          $('#' + connected_port[i]).addClass('pending');

          // IF STATUS IS BREAK
        } else if (connected_port[i][1] === 'break') {
          $('#' + i).removeClass('pending');
          $('#' + connected_port[i][0]).removeClass('pending');
          $('#' + i).addClass('break');
          $('#' + connected_port[i][0]).addClass('break');
        }
      }
    });
  }


}