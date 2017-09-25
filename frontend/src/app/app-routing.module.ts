// ANGULAR MODULE
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENT
import { PortConnectionComponent } from './port-connection/port-connection.component';
import { PortHistoryComponent } from './port-history/port-history.component';
import { AlarmComponent } from './alarm/alarm.component';
import { AlarmHistoryComponent } from './alarm-history/alarm-history.component';
import { TestingModeComponent } from './testing-mode/testing-mode.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: PortConnectionComponent
  },
  {
    path: 'port_history',
    component: PortHistoryComponent
  },
  {
    path: 'alarm',
    component: AlarmComponent
  },
  {
    path: 'alarm_history',
    component: AlarmHistoryComponent
  },
  {
    path: 'testing_mode',
    component: TestingModeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // IF WANT TO USE #
    // RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
