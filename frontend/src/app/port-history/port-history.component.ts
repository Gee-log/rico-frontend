// ANGULAR MODULE
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// MATERIAL MODULE
import { DataSource } from '@angular/cdk/table';
import { MdPaginator } from '@angular/material';

// Api Service
import { ApiService } from '../services/api.service';

// Third-party
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DatatableComponent } from '../../../node_modules/@swimlane/ngx-datatable/src/components/datatable.component';
import * as _ from 'lodash';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

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

    // CHECK SERVER STATUS
    this.check_server_status();
    // FETCH DATA
    this.fetchData();

  }

  constructor(private ApiService: ApiService, private router: Router) {

    this.temp = this.rows;

  }

  // CHECK SERVER STATUS
  check_server_status() {

    this.ApiService.check_server_status().then((status) => {
      if (status === 500) {
        this.router.navigateByUrl('/500');
      }
    });

  }
  // SET DATA TABLE
  fetchData() {

    this.ApiService.getConnectionHistory().then((data) => {
      _.each(data, (obj) => {
        console.log(obj);
        const date = new Date(obj['timestamp']);
        const day = date.toString().substring(0, 15);
        const time = date.toString().substring(15);
        const status = obj['status'].charAt(0).toUpperCase() + obj['status'].slice(1);
        // IF SWITCHTING_TYPE IS CONNECT
        if (obj['switching_type'] === 'C') {
          this.rows.push({
            date: day, time: time, east: 'E' + obj['east'], west: 'W' + obj['west'],
            status: 'Connected', robotStatus: { 'status': status, 'id': obj['id'] }
          });
          // IF SWITCHING_TYPE IS DISCONNECT
        } else {
          this.rows.push({
            date: day, time: time, east: 'E' + obj['east'], west: 'W' + obj['west'],
            status: 'Disconnected', robotStatus: { 'status': status, 'id': obj['id'] }
          });
        }
      });
    });

  }
  // CANCEL TASK
  cancelTask(id) {

    this.ApiService.cancelTask(id, 'canceled');
    window.location.reload();

  }
  // SAVE DATA
  saveData() {

    // USING HTTP TO DOWLOAD
    // window.location.href = 'http://localhost:8000/connectionhistorys?type=connectionhistory';

    // USING API SERVICE TO DOWNLOAD
    this.ApiService.downloadFile();

    // USING ANGULAR2CSV PACKAGE TO DOWNLOAD
    // this.ApiService.getConnectionHistory().then((data) => {
    //    const x = new Angular2Csv(data, 'connect_log');
    // });

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
