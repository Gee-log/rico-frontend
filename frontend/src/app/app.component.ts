import { Component } from '@angular/core';

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
      path: '/porthistory'
    },
    {
      icon: 'error_outline',
      name: 'Alarm',
      path: '/alarm'
    },
    {
      icon: 'history',
      name: 'Alarm History',
      path: '/alarmhistory'
    }
  ]

}

