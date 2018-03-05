// ANGULAR MODULE
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// MATERIAL MODULE
import { DataSource } from '@angular/cdk/table';
import { MdPaginator } from '@angular/material';

// Api Service
import { ApiService } from '../services/api.service';

// ReactiveX
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Third-party
import { DatatableComponent } from '../../../node_modules/@swimlane/ngx-datatable/src/components/datatable.component';
import * as _ from 'lodash';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-current-connection',
  templateUrl: './current-connection.component.html',
  styleUrls: ['./current-connection.component.scss']
})

export class CurrentConnectionComponent implements OnInit {

  rows: any = [];
  temp: any = [];
  selected: any[] = [];

  // COLUMNS VARIABLES
  columns = [
    { name: 'East' },
    { name: 'West' },
    { name: 'Date' }
  ];

  @ViewChild('table') table: DatatableComponent;

  constructor(
    private _apiService: ApiService,
    private _router: Router) {

    this.temp = this.rows;

  }

  ngOnInit() {

    // CHECK SERVER STATUS
    this.checkServerStatus();
    // FETCH DATA
    this.fetchData();

  }

  // CHECK SERVER STATUS
  checkServerStatus() {

    this._apiService.checkServerStatus().then((status) => {

      if (status === 500) {
        this._router.navigateByUrl('/500');
      }

    });

  }
  // SET DATA TABLE
  fetchData() {

    this._apiService.getConnectedPort().then((data) => {
      _.each(data, (obj) => {

        const date = new Date(obj['connected_date']);
        const day = date.toString().substring(0, 15); // not using right now
        const time = date.toString().substring(15); // now using right now

        this.rows.push({
          east: 'E' + obj['east'], west: 'W' + obj['west'], date: date
        });

      });
    });

  }

}
