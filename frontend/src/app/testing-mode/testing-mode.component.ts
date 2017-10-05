// ANGULAR MODULE
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';

// Api Service
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

  errorRobot: string = '';

  constructor(private ApiService: ApiService, private router: Router) { }

  ngOnInit() {

    // CHECK SERVER STATUS
    this.check_server_status();
    // SET debug_button = true
    this.debug_button = true;

  }

  // CHECK SERVER STATUS
  check_server_status() {

    this.ApiService.check_server_status().then((status) => {
      if (status === 500) {
        this.router.navigateByUrl('/500');
      }
    });

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

  home_motor() {
    this.ApiService.home_robot_axes().then((data) => {
      if (data['status'] === 'success') {
        console.log(data);
      } else {
        console.error(data);
        this.errorRobot = data['status'];
      }
    });
  }
}
