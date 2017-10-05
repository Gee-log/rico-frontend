// ANGULAR MODULE
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENT
import { AlarmComponent } from './alarm/alarm.component';
import { AlarmHistoryComponent } from './alarm-history/alarm-history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortConnectionComponent } from './port-connection/port-connection.component';
import { PortConnectionMobileComponent } from './port-connection-mobile/port-connection-mobile.component';
import { PortHistoryComponent } from './port-history/port-history.component';
import { ServerStatusErrorComponent } from './server-status-error/server-status-error.component';
import { TestingModeComponent } from './testing-mode/testing-mode.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: PortConnectionComponent
  },
  {
    path: 'port_connection_mobile',
    component: PortConnectionMobileComponent
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
    path: 'port_history',
    component: PortHistoryComponent
  },

  {
    path: 'testing_mode',
    component: TestingModeComponent
  },
  // SERVER STATUS 500
  {
    path: '500',
    component: ServerStatusErrorComponent
  },
  // OUT OF PATH LIST WILL REDIRECT TO 404
  {
    path: '**',
    // redirectTo: '/',
    // pathMatch: 'full'
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: true }) // <-- debugging purposes only
    // RouterModule.forRoot(appRoutes, { useHash: true }) // <-- if want to use #
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
