// ANGULAR MODULE
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENT
import { AlarmComponent } from './alarm/alarm.component';
import { AlarmHistoryComponent } from './alarm-history/alarm-history.component';
import { CurrentConnectionComponent } from './current-connection/current-connection.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortConnectionComponent } from './port-connection/port-connection.component';
import { PortConnectionMobileComponent } from './port-connection-mobile/port-connection-mobile.component';
import { PortHistoryComponent } from './port-history/port-history.component';
import { ServerStatusErrorComponent } from './server-status-error/server-status-error.component';
import { TestingModeComponent } from './testing-mode/testing-mode.component';
import { LoginComponent } from './login/login.component';

// GUARD
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    component: PortConnectionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'port_connection_mobile',
    component: PortConnectionMobileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'alarm',
    component: AlarmComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'alarm_history',
    component: AlarmHistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'port_history',
    component: PortHistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'current_connection',
    component: CurrentConnectionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'testing_mode',
    component: TestingModeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // SERVER STATUS 500
  {
    path: '500',
    component: ServerStatusErrorComponent,
    canActivate: [AuthGuard]
  },
  // OUT OF PATH LIST WILL REDIRECT TO 404
  {
    path: '**',
    // redirectTo: '/',
    // pathMatch: 'full'
    component: PageNotFoundComponent,
    canActivate: [AuthGuard]
  },
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
