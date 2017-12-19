// ANGULAR MODULE
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { enableProdMode } from '@angular/core'; // <-- enable production mode .❨╯°□°❩╯︵┻━┻
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// MATERIAL MODULE
import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Component
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PortConnectionComponent } from './port-connection/port-connection.component';
import { PortConnectionMobileComponent } from './port-connection-mobile/port-connection-mobile.component';
import { PortHistoryComponent } from './port-history/port-history.component';
import { AlarmComponent } from './alarm/alarm.component';
import { AlarmHistoryComponent } from './alarm-history/alarm-history.component';
import { PortPipe } from './port.pipe';
import { TestingModeComponent } from './testing-mode/testing-mode.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerStatusErrorComponent } from './server-status-error/server-status-error.component';

// Third-Party
import { ChartsModule } from 'ng2-charts';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDatatableStubModule } from '../ngx-datatable';
// import { DatatableRowDetailTemplateDirectiv } from ''
import 'hammerjs';
import * as _ from 'lodash';

// Services
import { ApiService } from './services/api.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { PortService } from './services/port.service';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

// Guard
import { AuthGuard } from './_guards/auth.guard';
import { CurrentConnectionComponent } from './current-connection/current-connection.component';
import { RegisterComponent } from './register/register.component';

// enableProdMode(); // <-- enable production mode .❨╯°□°❩╯︵┻━┻

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    PortConnectionComponent,
    PortHistoryComponent,
    AlarmComponent,
    AlarmHistoryComponent,
    PortPipe,
    TestingModeComponent,
    PortConnectionMobileComponent,
    PageNotFoundComponent,
    ServerStatusErrorComponent,
    LoginComponent,
    CurrentConnectionComponent,
    RegisterComponent,
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
    NgxDatatableStubModule,
    ChartsModule
  ],
  providers: [ApiService, AuthGuard, AuthenticationService, UserService, PortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
