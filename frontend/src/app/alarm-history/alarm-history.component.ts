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
  selector: 'app-alarm-history',
  templateUrl: './alarm-history.component.html',
  styleUrls: ['./alarm-history.component.scss']
})
export class AlarmHistoryComponent implements OnInit {


  ngOnInit() {
    this.fetchData();
  }


  rows = [
    // { name: obj.alarm, gender: 'Male', company: 'Swimlane' }, 
  ];

  temp = [];

  columns = [
    { prop: 'Alarm' },
    { name: 'Detail' },
    { name: 'Time' },
    { name: 'Sererity' }
  ];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private http: Http, private ApiService: ApiService) {

    this.temp = this.rows;

  }

  fetchData() {

    this.ApiService.getAlarmHistory().then((data) => {
      _.each(data, (obj) => {
        console.log(obj);
        this.rows.push({ alarm: obj.alarm, detail: obj.detail, time: obj.timestamp, severity: obj.severity })
      });
    });

  }


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