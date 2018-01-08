// ANGULAR Module
import { Component } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

// Third-party
import * as $ from 'jquery';

// Api Service
import { ApiService } from './services/api.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // USER DATA
  private user_data: object;
  private username: string;

  links = [
    {
      icon: 'settings_input_component',
      name: 'Port Connection',
      path: '/'
    },
    {
      icon: 'settings_input_component',
      name: 'Current Connection',
      path: '/current_connection'
    },
    {
      icon: 'history',
      name: 'Port History',
      path: '/port_history'
    },
    {
      icon: 'error_outline',
      name: 'Alarm',
      path: '/alarm'
    },
    {
      icon: 'history',
      name: 'Alarm History',
      path: '/alarm_history'
    }
  ];

  settinglinks = [
    {
      icon: 'settings',
      name: 'Parameter',
      path: '#'
    },
    {
      icon: 'build',
      name: 'Execution table',
      path: '#'
    },
    {
      icon: 'settings_applications',
      name: 'Testing mode',
      path: '/testing_mode'
    }
  ];

  constructor(
    private _http: Http,
    private _apiService: ApiService,
    private _authenticationService: AuthenticationService,
    private _userService: UserService,
    private _router: Router) { }

  // TOGGLE SETTINGS MENU
  toggleSettings() {

    $('#settings-list, #settings-drop-up, #settings-drop-down').toggle();

  }
  // TOGGLE MENU
  toggleMenu() {

    $('#menu-list, #menu-drop-down, #menu-drop-up').toggle();

  }
  // TOGGLE DOCUMENT MENU
  toggleDocument() {

    $('#documents-drop-down, #documents-drop-up').toggle();

  }
  // CLEAR DATABASE DATA
  clearDatabase() {

    this._apiService.clearDatabase('cleardatabase');
    // this.ApiService.clearDatabase('cleardatabase');

  }
  // CLEAR LATEST OPERATION
  clear_latest_operation() {

    this._apiService.clear_latest_operation('clear_latest_operation');

  }
  // SHOW NAVBAR
  showNavbar() {

    if (this._router.url === '/login' || this._router.url === '/register') {
      return false;

    } else {
      return true;
    }

  }
  // LOGOUT
  logOut() {

    // CALL LOGOUT FUNCTION
    this._authenticationService.logout();
    // RE ROUTE TO LOGIN
    this._router.navigateByUrl('/login');
    // MAKE CLICK EVENT TO CLOSE SIDEBAR
    document.getElementById('menu-icon').click();

  }
  // GET USERNAME
  getUserName() {

    // SET VARIABLE
    this.user_data = this._userService.getUsers();
    this.username = this.user_data['username'];

  }

}
