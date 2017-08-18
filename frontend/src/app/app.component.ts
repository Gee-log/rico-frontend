import { Component } from '@angular/core';
import * as $ from 'jquery';

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

  toggleSettings() {

    $('#settings-list, #settings-drop-up, #settings-drop-down').toggle();

  }

  toggleMenu() {

    $('#menu-list, #menu-drop-down, #menu-drop-up').toggle();

  }

  toggleDocument() {

    $('#documents-drop-down, #documents-drop-up').toggle();

  }

}
