import { Component } from '@angular/core';
import * as $ from 'jquery';
import { ApiService } from './services/api.service';
import { Http, Headers, Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  links = [
    {
      icon: 'settings_input_component',
      name: 'Port Connection',
      path: '/'
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
    }
  ];

  constructor(private http: Http, private ApiService: ApiService) {}

  // TOGGLE SETTINGS MENU
  toggleSettings() {

    $('#settings-list, #settings-drop-up, #settings-drop-down').toggle();

  }
  // TOGGLE MENU
  toggleMenu() {

    $('#menu-list, #menu-drop-down, #menu-drop-up').toggle();

  }
  // TOGGLE DOCUMENT MENUgot
  toggleDocument() {

    $('#documents-drop-down, #documents-drop-up').toggle();

  }
  // CLEAR DATABASE DATA
  clearDatabase() {
    this.ApiService.clearDatabase('cleardatabase');
    window.location.reload();
  }

}
