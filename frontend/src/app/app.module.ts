import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import * as _ from 'lodash';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Component
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PortConnectionComponent } from './port-connection/port-connection.component';
import { PortHistoryComponent } from './port-history/port-history.component';
import { AlarmComponent } from './alarm/alarm.component';
import { AlarmHistoryComponent } from './alarm-history/alarm-history.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PortPipe } from './port.pipe';
import { HttpModule } from "@angular/http";

// Services
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    PortConnectionComponent,
    PortHistoryComponent,
    AlarmComponent,
    AlarmHistoryComponent,
    NavBarComponent,
    PortPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    CdkTableModule,
    NgxDatatableModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }