import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/user-navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { MyLeaveComponent } from './components/my-leave/my-leave.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { LeaveRequestsComponent } from './components/leave-requests/leave-requests.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}


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
    AddEmployeeComponent,
    ProfileComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:3000']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
