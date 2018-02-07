// ANGULAR MODULE
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Api Service
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-testing-mode',
  templateUrl: './testing-mode.component.html',
  styleUrls: ['./testing-mode.component.scss']
})

export class TestingModeComponent implements OnInit {

  east_port_number: any; // EAST PORT NUMBER
  west_port_number: any; // WEST PORT NUMBER
  stops: any; // STOP NUMBER
  sequence: any; // CURRENT SEQUENCE NUM
  continue_mode: string; // CONTINUE MODE
  smu_no: number; // SMU NUMBER
  connect: boolean = false; // SELF CONNECTION ACTION CONNECT
  disconnect: boolean = false; // SELF CONNECTION ACTION DISCONNECT

  // LOCK BUTTON UTILITIES
  debug_button: boolean; // DEBUG BUTTON

  constructor(
    private _apiService: ApiService,
    private _router: Router) { }

  ngOnInit() {

    // CHECK SERVER STATUS
    this.check_server_status();
    // SET debug_button is true
    this.debug_button = true;

  }

  // CHECK SERVER STATUS
  check_server_status() {

    this._apiService.check_server_status().then((status) => {

      if (status === 500) {
        this._router.navigateByUrl('/500');
      }
    });

  }
  // CREATE CONNECTION
  create_connection() {

    const action: string = 'create_connection';

    if (this.east_port_number && this.west_port_number) {
      this._apiService.create_connection_in_database(this.east_port_number, this.west_port_number, action).then((data) => {
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
  // VALIDATE ROLLBACK BUTTON
  validate_rollback_button() {

    if ((this.smu_no <= 144) && (!document.getElementById('smu_no').classList.contains('ng-invalid')) && this.smu_no) {

      return true;

    } else {
      return false;
    }

  }
  // VALIDATE SELF CONNECTION BUTTON
  validate_self_connection_button() {

    if ((this.connect === true || this.disconnect === true) && this.smu_no && this.smu_no <= 144
      && (!document.getElementById('smu_no').classList.contains('ng-invalid'))) {

      return true;

    } else {
      return false;
    }

  }
  // HOMING MOTOR
  home_motor() {

    this._apiService.home_robot_axes().then((data) => {
      if (data['status'] === 'success') {
        console.log(data);

      } else {
        console.error(data);
      }
    });

  }
  // ROLLBACK SMU POSITION
  rollback() {

    this._apiService.rollback(this.smu_no).then((data) => {
      if (data['uuid']) {
        this.smu_no = null;
        alert('Command send successful, start rollback...');

      } else {
        this.smu_no = null;
        alert('Error rollback.');
      }
    });

  }
  // SELF CONNECTION SMU
  self_connection() {

    if (this.validate_self_connection_button() === true) {
      this._apiService.self_connection(this.smu_no, this.connect, this.disconnect).then((data) => {
        if (data['uuid']) {
          this.smu_no = null;
          this.connect = false;
          this.disconnect = false;
          alert('Command send successful, start self connection...');

        } else {
          this.smu_no = null;
          alert('Error self connection');
        }
      });
    }

  }

}
