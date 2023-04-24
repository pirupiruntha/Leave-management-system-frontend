import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';

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
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AuthInterceptor } from './helpers/auth-interceptor';

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
    AdminNavbarComponent,
    FooterComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:3000']
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
