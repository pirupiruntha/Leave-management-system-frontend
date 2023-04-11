import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { LeaveRequestsComponent } from './components/leave-requests/leave-requests.component';
import { LoginComponent } from './components/login/login.component';
import { MyLeaveComponent } from './components/my-leave/my-leave.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"userDashboard", component:UserDashboardComponent, canActivate: [AuthGuardService]}, 
  {path:"adminDashboard", component:AdminDashboardComponent, canActivate: [AuthGuardService]},
  {path:"applyLeave", component:ApplyLeaveComponent, canActivate: [AuthGuardService]},
  {path:"myLeave", component:MyLeaveComponent, canActivate: [AuthGuardService]},
  {path:"addEmployee", component:AddEmployeeComponent, canActivate: [AuthGuardService]},
  {path:"employeedetails", component:EmployeeDetailsComponent, canActivate: [AuthGuardService]},
  {path:"leaveRequests", component:LeaveRequestsComponent, canActivate: [AuthGuardService]},
  {path:"home", component:UserDashboardComponent, canActivate: [AuthGuardService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
