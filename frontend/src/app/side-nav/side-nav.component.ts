import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {

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
  ];

  constructor() { }

  ngOnInit() {
  }

}
