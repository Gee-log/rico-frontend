import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { MdPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { ApiService } from '../services/api.service';
import { DatatableComponent } from '../../../node_modules/@swimlane/ngx-datatable/src/components/datatable.component';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Component({
  selector: 'app-port-history',
  templateUrl: './port-history.component.html',
  styleUrls: ['./port-history.component.scss']
})

export class PortHistoryComponent implements OnInit {

  rows = [];
  temp = [];
  selected: any[] = [];
  // COLUMNS VARIABLES
  columns = [
    { name: 'Date' },
    { name: 'Time' },
    { name: 'Type' },
    { prop: 'East' },
    { name: 'West' },
    { name: 'Status' },
    { name: 'RobotStatus' }
  ];

  @ViewChild('table') table: DatatableComponent;

  ngOnInit() {
    this.fetchData();
  }

  constructor(private http: Http, private ApiService: ApiService) {

    this.temp = this.rows;

  }
  // SET DATA TABLE
  fetchData() {

    this.ApiService.getConnectionHistory().then((data) => {
      _.each(data, (obj) => {
        console.log(obj);
        const date = new Date(obj.timestamp);
        const day = date.toString().substring(0, 15);
        const time = date.toString().substring(15);
        const status = obj.status.charAt(0).toUpperCase() + obj.status.slice(1);
        // IF SWITCHTING_TYPE IS CONNECT
        if (obj.switching_type === 'C') {
          this.rows.push({
            date: day, time: time, east: 'E' + obj.east, west: 'W' + obj.west, status: 'Connected', robotStatus: { 'status': status, 'id': obj.id }
          });
          // IF SWITCHING_TYPE IS DISCONNECT
        } else {
          this.rows.push({
            date: day, time: time, east: 'E' + obj.east, west: 'W' + obj.west, status: 'Disconnected', robotStatus: { 'status': status, 'id': obj.id }
          });
        }
      })
    });

  }
  // CANCEL TASK
  cancelTask(id) {

    this.ApiService.cancelTask(id, 'canceled');
    window.location.reload();

  }
  // SAVE DATA
  saveData() {

    this.ApiService.saveData_Connectionhistory('connectionhistory');

  }
  // FILTER SEARCH
  updateFilter(event) {

    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
