// ANGULAR MODULE
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// MATERIAL MODULE
import { DataSource } from '@angular/cdk/table';
import { MdPaginator } from '@angular/material';

// Api Service
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';

// ReactiveX
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Third-party
import { DatatableComponent } from '../../../node_modules/@swimlane/ngx-datatable/src/components/datatable.component';
import * as _ from 'lodash';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { List } from 'lodash';

@Component({
  selector: 'app-port-history',
  templateUrl: './port-history.component.html',
  styleUrls: ['./port-history.component.scss']
})
export class PortHistoryComponent implements OnInit {

  // TABLE'S VARIABLES
  rows: any = [];
  temp: any = [];
  selected: any[] = [];

  // COLUMNS VARIABLES
  columns: Array<any> = [
    { name: 'Date' },
    { name: 'Time' },
    { name: 'User' },
    { name: 'East' },
    { name: 'West' },
    { name: 'Status' },
    { name: 'RobotStatus' }
  ];

  // USER'S VARIABLE
  role: string;

  @ViewChild('table') table: DatatableComponent;

  ngOnInit() {

    // CHECK SERVER STATUS
    this.checkServerStatus();
    // CHECK USER'S ROLE
    this.checkUserRole();
    // FETCH DATA
    this.fetchData();

  }

  constructor(
    private _apiService: ApiService,
    private _userService: UserService,
    private _router: Router) {

    this.temp = this.rows;

  }

  // CHECK SERVER STATUS
  checkServerStatus() {

    this._apiService.checkServerStatus().then((status) => {

      if (status === 500) {
        this._router.navigateByUrl('/500');
      }

    });

  }
  // CHECK USER'S ROLE
  checkUserRole() {

    this._userService.getUserRoles().then((data) => {

      this.role = data['role'];

    });

  }
  // SET DATA TABLE
  fetchData() {

    this._apiService.getConnectionHistory().then((data) => {
      _.each(data, (obj) => {

        console.log(obj);
        const date: Date = new Date(obj['timestamp']);
        const day: string = date.toString().substring(0, 15);
        const time: string = date.toString().substring(15);
        const status: string = obj['status'].charAt(0).toUpperCase() + obj['status'].slice(1);

        // IF SWITCHTING_TYPE IS CONNECT
        if (obj['switching_type'] === 'C') {
          this.rows.push({
            date: day, time: time, user: obj['username'].charAt(0).toUpperCase() + obj['username'].slice(1)
            , east: 'E' + obj['east'], west: 'W' + obj['west'],
            status: 'Connected', robotStatus: { 'status': status, 'id': obj['id'] }
          });

          // IF SWITCHING_TYPE IS DISCONNECT
        } else {
          this.rows.push({
            date: day, time: time, user: obj['username'].charAt(0).toUpperCase() + obj['username'].slice(1)
            , east: 'E' + obj['east'], west: 'W' + obj['west'],
            status: 'Disconnected', robotStatus: { 'status': status, 'id': obj['id'] }
          });
        }

      });
    });

  }
  // CANCEL TASK
  cancelTask(id: string) {

    this._apiService.cancelTask(id, 'canceled').then((data) => {

      if (data['status'] !== 'error' && data['historyid'] !== null) {
        location.reload();
      }

    });

  }
  // VALIDATE USER'S ROLE TO HIDE BUTTON
  validateUserRole_toHideButton() {

    return (this.role === 'User') ? 'hide-buttons' : '';

  }
  // SAVE DATA
  saveData() {

    // USING HTTP TO DOWLOAD
    // window.location.href = 'http://localhost:8000/connectionhistorys?type=connectionhistory';

    // USING API SERVICE TO DOWNLOAD
    this._apiService.downloadFile();

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
