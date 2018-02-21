// ANGULAR Module
import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {

  // USER'S VARIABLE
  private user_data: object; // PARAMETERS  {USERNAME, EMAIL, ROLE}
  private username: string; // USERNAME

  menulinks = [
    {
      icon: 'dashboard',
      name: 'Dashboard',
      path: '/'
    },
    {
      icon: 'settings_input_component',
      name: 'Port Connection',
      path: '/port_connection'
    },
    {
      icon: 'settings_input_component',
      name: 'Current Connection',
      path: '/current_connection'
    },
    {
      icon: 'history',
      name: 'Connection Log',
      path: '/port_history'
    },
    {
      icon: 'error_outline',
      name: 'Current Alarm',
      path: '/alarm'
    },
    {
      icon: 'history',
      name: 'Alarm Log',
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
    private _apiService: ApiService,
    private _authenticationService: AuthenticationService,
    private _userService: UserService,
    private _router: Router) { }

  ngOnInit() {

    // set mockup User_data variable
    localStorage.setItem('User_data', JSON.stringify({ 'username': 'Admin', 'email': 'admin@email.com', 'role': 'Admin' }));

  }

  // CLEAR DATABASE DATA
  clearDatabase() {

    this._apiService.clearDatabase('Cleardatabase');

  }
  // CLEAR LATEST OPERATION
  clearLatestOperation() {

    this._apiService.clearLatestOperation('clear_latest_operation');

  }
  // GET USERNAME
  getUsername() {

    const user_data: object = this._userService.getUsers();
    this.username = user_data['username'];

  }
  // LOGOUT
  logOut() {

    this._authenticationService.logout();
    this._router.navigateByUrl('/login');
    document.getElementById('menu-icon').click();

  }
  // REGISTER ROUTE
  registerRoute() {

    this._router.navigateByUrl('/register');

  }
  // VALIDATE URL TO DISPLAY NAVBAR OR HIDE NAVBAR
  showNavbar() {

    return (this._router.url === '/login' || this._router.url === '/login-dev') ? false : true;

  }
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
  // VALIDATE USER'S ROLE TO HIDE BUTTON
  validateUserRole() {

    const user_data: object = JSON.parse(localStorage.getItem('User_data'));
    const user_role: string = user_data['role'];

    return (user_data['role'] !== 'Admin') ? 'hide-element' : '';

  }

}
