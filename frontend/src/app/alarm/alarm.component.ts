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

  ngOnInit() {
    this.fetchData();
    setInterval(this.randomAlert(), this.randomTime());
  }

  rows = [
    // { name: obj.alarm, gender: 'Male', company: 'Swimlane' }, 
  ];

  temp = [];

  columns = [
    { prop: 'Alarm' },
    { name: 'Detail' },
    { name: 'Time' },
    { name: 'Severity' }
  ];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private http: Http, private ApiService: ApiService) {

    this.temp = this.rows;

  }
  // SET ALARM HISTORY DATA
  fetchData() {

    // this.currentAlarmTime.setMinutes(this.currentAlarmTime.getMinutes() - 1);

    // setInterval(function () {

    // console.log('polling', new Date())

    // let since = this.currentAlarmTime.getTime() / 1000

    this.ApiService.getAlarmHistory().then((data) => {
      _.each(data, (obj) => {
        console.log(obj);
        this.rows.push({ alarm: obj.alarm, detail: obj.detail, time: obj.timestamp, severity: obj.severity })
      })
    })
    // }, 4000)

    // this.updateSaveUrl(this.currentAlarmTime.getTime())
    // this.randomAlert()

  }
  // SAVE TIME IN .crf FILE
  updateSaveUrl(time) {

    console.log('updateSaveUrl', time);
    $("#save").prop("href", "/2/" + time);

  }
  // CLEAR TABLE
  clear() {
    $('#alarm').empty();
    this.currentAlarmTime = new Date();
    this.updateSaveUrl(this.currentAlarmTime.getTime());
  }
  // RANDOM MOCKUP DATA
  randomPattern() {
    let i = Math.floor(Math.random() * this.patterns.length);
    return this.patterns[i]
  }
  // RANDOM TIME
  randomTime() {
    /*return Math.floor((Math.random() * 5000) + 2000);*/
    return Math.floor((Math.random() * 10000) + 10000);
  }
  // RANDOM POST DATA
  randomAlert() {
    setTimeout(function () {
      let p = this.randomPattern();
      this.ApiService.connectPort(p[0], p[1], p[2]).then((data) => {
        console.log('randomAlert Success', data)
        // createTable(data)
      })
      console.log('randomAlert', new Date(), p)
      this.randomAlert()
    }, this.randomTime())

  }
  // TEST FUNCTION
  clickme(row) {
    console.log(row);
  }
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