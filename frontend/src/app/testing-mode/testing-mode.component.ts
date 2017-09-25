import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-testing-mode',
  templateUrl: './testing-mode.component.html',
  styleUrls: ['./testing-mode.component.scss']
})
export class TestingModeComponent implements OnInit {

  east_port_number; // EAST PORT NUMBER
  west_port_number; // WEST PORT NUMBER

  constructor(private http: Http, private ApiService: ApiService) { }

  ngOnInit() {
  }

  create_connection() {
    if (this.east_port_number && this.west_port_number && this.east_port_number[0] !== '0' && this.west_port_number[0] !== '0'
      && !document.getElementById('east_port_input').classList.contains('ng-invalid')
      && !document.getElementById('west_port_input').classList.contains('ng-invalid')) {
      this.ApiService.create_connection_in_database(this.east_port_number, this.west_port_number, 'test_connect').then((data) => {
        console.log(data);
      });
    } else {
      alert('error input !');
      console.log('error input !');
    }
  }

}
