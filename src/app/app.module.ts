import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { MyLeaveComponent } from './components/my-leave/my-leave.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { LeaveRequestsComponent } from './components/leave-requests/leave-requests.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ApplyLeaveComponent,
    MyLeaveComponent,
    EmployeeDetailsComponent,
    LeaveRequestsComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
