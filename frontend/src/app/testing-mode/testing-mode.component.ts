import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-testing-mode',
  templateUrl: './testing-mode.component.html',
  styleUrls: ['./testing-mode.component.scss']
})

export class TestingModeComponent implements OnInit {

  east_port_number; // EAST PORT NUMBER
  west_port_number; // WEST PORT NUMBER
  stops; // STOP NUMBER
  sequence; // CURRENT SEQUENCE NUM

  // LOCK BUTTON UTILITIES
  debug_button;

  constructor(private http: Http, private ApiService: ApiService) { }

  ngOnInit() {

    this.debug_button = true;

  }
  // CREATE CONNECTION
  create_connection() {

    if (this.east_port_number && this.west_port_number) {
      this.ApiService.create_connection_in_database(this.east_port_number, this.west_port_number, 'test_connect').then((data) => {
        console.log(data);
      });
    } else {
      alert('error input !');
      console.error('error input !');
    }
  }
  // VALIDATE CONNECT BUTTON
  validate_connect_button() {

    if ((this.east_port_number <= 144 && this.west_port_number <= 144)
      && (!document.getElementById('east_port_input').classList.contains('ng-invalid')
        && !document.getElementById('west_port_input').classList.contains('ng-invalid'))
      && (this.east_port_number !== '' && this.west_port_number !== '')) {

      return true;

    } else {
      return false;
    }

  }
  // CREATE CONNECTION DEBUG MODE
  create_connection_debug_mode() {

    // TODO

  }
  // VALIDATE DEBUG BUTTON
  validate_debug_button() {

    if ((this.east_port_number <= 144 && this.west_port_number <= 144)
      && (!document.getElementById('east_port_input').classList.contains('ng-invalid')
        && !document.getElementById('west_port_input').classList.contains('ng-invalid'))
      && (this.east_port_number !== '' && this.west_port_number !== '')
      && (this.stops !== undefined && this.stops !== '' && !document.getElementById('stops').classList.contains('ng-invalid'))) {

      return true;

    } else {
      return false;
    }

  }

}
