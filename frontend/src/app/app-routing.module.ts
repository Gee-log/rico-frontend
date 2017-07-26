import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortConnectionComponent } from './port-connection/port-connection.component';
import { PortHistoryComponent } from './port-history/port-history.component';
import { AlarmComponent } from './alarm/alarm.component';
import { AlarmHistoryComponent } from './alarm-history/alarm-history.component';


export const appRoutes: Routes = [
  {
    path: '',
    component: PortConnectionComponent
  },
  {
    path: 'porthistory',
    component: PortHistoryComponent
  },
  {
    path: 'alarm',
    component: AlarmComponent
  },
  {
    path: 'alarmhistory',
    component: AlarmHistoryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
