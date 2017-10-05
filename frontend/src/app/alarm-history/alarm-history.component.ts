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

@Component({
  selector: 'app-alarm-history',
  templateUrl: './alarm-history.component.html',
  styleUrls: ['./alarm-history.component.scss']
})
export class AlarmHistoryComponent implements OnInit {

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
  // FETCH DATA
  fetchData() {

    this.ApiService.getAlarmHistory().then((data) => {
      _.each(data, (obj) => {
        console.log(obj);
        this.rows.push({ alarm: obj['alarm'], detail: obj['detail'], time: obj['timestamp'], severity: obj['severity'] });
      });
    });

  }
  // TEST FUNCTION
  clickme(row) {

    console.log(row);

  }
  // FILTER <-- Need to fix bug
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
