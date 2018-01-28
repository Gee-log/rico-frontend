// ANGULAR MODULE
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core'; // <-- enable production mode .❨╯°□°❩╯︵┻━┻
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// Component
import { AppComponent } from './app.component';
import { AlarmComponent } from './alarm/alarm.component';
import { AlarmHistoryComponent } from './alarm-history/alarm-history.component';
import { CurrentConnectionComponent } from './current-connection/current-connection.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortConnectionComponent } from './port-connection/port-connection.component';
import { PortConnectionMobileComponent } from './port-connection-mobile/port-connection-mobile.component';
import { PortHistoryComponent } from './port-history/port-history.component';
import { PortPipe } from './port.pipe';
import { RegisterComponent } from './register/register.component';
import { ServerStatusErrorComponent } from './server-status-error/server-status-error.component';
import { TestingModeComponent } from './testing-mode/testing-mode.component';

// MATERIAL MODULE
import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Third-Party
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import 'hammerjs';
import * as _ from 'lodash';

// Services
import { ApiService } from './services/api.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Guard
import { AuthGuard } from './_guards/auth.guard';
import { RegisterGuard } from './_guards/register.guard';


enableProdMode(); // <-- enable production mode .❨╯°□°❩╯︵┻━┻

@NgModule({
  declarations: [
    AppComponent,
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
    NgxDatatableModule,
    ChartsModule
  ],
  providers: [ApiService, AuthGuard, RegisterGuard, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
