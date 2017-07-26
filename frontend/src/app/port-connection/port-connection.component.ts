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
  stops; // STOPS POINT ROBOT
  sequence; // SEQUENCE ROBOT

  constructor(private portService: PortService, private http: Http, private ApiService: ApiService) { }

  ngOnInit() {
    //  OLD VERSION GET ALL PORT
    this.portService.getPort().subscribe(
      (data) => {
        data.forEach((obj) => {
          if (obj.direction === 'E') {
            this.eports.push(obj.direction + obj.number)
            this.eportschunk = _.chunk(this.eports, 12)
          } else if (obj.direction === 'W') {
            this.wports.push(obj.direction + obj.number)
            this.wportschunk = _.chunk(this.wports, 12)
          }
        })
      }
    );
    // let allPort = this.ApiService.getAllPort();
    // let connects = this.ApiService.connectPort("33", "33", "connect");
  }

  // GET EASTPORT ID
  setEastID(eastID) {
    this.selectedEastPortID = eastID;
    console.log('Current East Port :', this.selectedEastPortID);
  }
  // GET WESTPORT ID
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
    if (this.stops) {
      this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), "connect", this.stops);
    } else {
      this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), "connect");
    }
  }
  // POST DISCONNECTION
  postDisconnection() {
    if (this.stops) {
      this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), "disconnect", this.stops);
    } else {
      this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), "disconnect");
    }
    // console.log('Disconnect : Port ', this.selectedEastPortID, ' : ', this.selectedWestPortID)
    // var link = 'http://127.0.0.1:8000/connections/';
    // var data = JSON.stringify({ east: this.selectedEastPortID.substring(1), west: this.selectedWestPortID.substring(1), action: "disconnect" });

    // var headers = new Headers();
    // headers.append('Content-Type', 'application/json');

    // this.http.post(link, data, { headers: headers })
    //   .map((res: Response) => res.json()).subscribe(res => {
    //     this.result = res;
    //     console.log(this.result);
    //   });
  }
  postDebug() {
    if (this.stops && this.sequence) {
      this.ApiService.connectPort(this.selectedEastPortID.substring(1), this.selectedWestPortID.substring(1), "connect", this.stops, this.sequence);
    } else {
      console.log("No stops or sequence value !")
    }
  }

  checkStatus() {
    this.portService.checkStatus().subscribe(
      (data) => {
        console.log(data);
      }
      // (data) => {
      //   data.forEach((obj) => {
      //     if (obj.direction === 'E') {
      //       this.eports.push(obj.direction + obj.number)
      //       this.eportschunk = _.chunk(this.eports, 12)
      //     } else if (obj.direction === 'W') {
      //       this.wports.push(obj.direction + obj.number)
      //       this.wportschunk = _.chunk(this.wports, 12)
      //     }
      //   })
      // }
    );
  }
}