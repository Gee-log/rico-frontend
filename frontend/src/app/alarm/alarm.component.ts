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
import { Observable } from 'rxjs/Observable';
import { DatatableComponent } from '../../../node_modules/@swimlane/ngx-datatable/src/components/datatable.component';
import * as _ from 'lodash';
import * as $ from 'jquery';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {

  currentAlarmTime = new Date();
  patterns = [
    ['I', 'Robot standby', '1'],
    ['I', 'E1 connect to W7', '1'],
    ['I', 'E144 connect to W144', '1'],
    ['I', 'E20 connect to W50', '2'],
    ['I', 'E20 disconnect from W50', '2'],
    ['W', 'Arm slips 1 pulse', '2'],
    ['S', 'Arm slips 2 pulses', '3'],
    ['W', 'Rollback slips 2 pulses', '3'],
    ['S', 'Rollback slips 3 pulses', '3'],
    ['E', 'Gripper torque alarm', '4'],
    ['E', 'Power down', '4'],
    ['H', 'Missing connector', '4'],
  ];

  temp = [];
  rows = [];

  columns = [
    { prop: 'Alarm' },
    { name: 'Detail' },
    { name: 'Time' },
    { name: 'Severity' }
  ];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  ngOnInit() {

    // CHECK SERVER STATUS
    this.check_server_status();
    // FEETCH DATA
    this.fetchData();
    // setInterval(this.randomAlert(), this.randomTime());

  }

  constructor(
    private _apiService: ApiService,
    private _router: Router) {

    this.temp = this.rows;

  }

  // CHECK SERVER STATUS
  check_server_status() {

    this._apiService.check_server_status().then((status) => {
      if (status === 500) {
        this._router.navigateByUrl('/500');
      }
    });

  }
  // SET ALARM HISTORY DATA
  fetchData() {

    this._apiService.getAlarmHistory().then((data) => {
      _.each(data, (obj) => {
        console.log(obj);
        this.rows.push({ alarm: obj['alarm'], detail: obj['detail'], time: obj['timestamp'], severity: obj['severity'] });
      });
    });

  }
  // SAVE TIME IN .crf FILE
  updateSaveUrl(time) {

    console.log('updateSaveUrl', time);
    $('#save').prop('href', '/2/' + time);

  }
  // CLEAR TABLE
  clear() {

    $('#alarm').empty();
    this.currentAlarmTime = new Date();
    this.updateSaveUrl(this.currentAlarmTime.getTime());

  }
  // RANDOM MOCKUP DATA
  randomPattern() {

    const i = Math.floor(Math.random() * this.patterns.length);
    return this.patterns[i];

  }
  // RANDOM TIME
  randomTime() {

    /*return Math.floor((Math.random() * 5000) + 2000);*/
    return Math.floor((Math.random() * 10000) + 10000);

  }
  // RANDOM POST DATA
  randomAlert() {

    setTimeout(function () {
      const p = this.randomPattern();
      this.ApiService.connectPort(p[0], p[1], p[2]).then((data) => {
        console.log('randomAlert Success', data);
      });
      console.log('randomAlert', new Date(), p);
      this.randomAlert();
    }, this.randomTime());

  }
  // SEARCH FILTER
  updateFilter(event) {

    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

}
