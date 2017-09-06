// ANGULAR MODULE
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";

// MATERIAL MODULE
import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Component 
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PortConnectionComponent } from './port-connection/port-connection.component';
import { PortHistoryComponent } from './port-history/port-history.component';
import { AlarmComponent } from './alarm/alarm.component';
import { AlarmHistoryComponent } from './alarm-history/alarm-history.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PortPipe } from './port.pipe';

// Third-Party
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import 'hammerjs';
import * as _ from 'lodash';

// Services
import { ApiService } from './services/api.service';

// Routing
import { AppRoutingModule } from './app-routing.module';

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
    NgxDatatableModule,
    ChartsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
