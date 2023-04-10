import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { LeaveRequestsComponent } from './components/leave-requests/leave-requests.component';
import { LoginComponent } from './components/login/login.component';
import { MyLeaveComponent } from './components/my-leave/my-leave.component';
import { NavbarComponent } from './components/user-navbar/navbar.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"user-navbar", component:NavbarComponent},
  {path:"userDashboard", component:UserDashboardComponent},
  {path:"applyLeave", component:ApplyLeaveComponent},
  {path:"myLeave", component:MyLeaveComponent},
  {path:"addEmployee", component:AddEmployeeComponent},
  {path:"employeedetails", component:EmployeeDetailsComponent},
  {path:"leaveRequests", component:LeaveRequestsComponent},
  {path:"adminDashboard", component:AdminDashboardComponent},
  {path:"home", component:UserDashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
