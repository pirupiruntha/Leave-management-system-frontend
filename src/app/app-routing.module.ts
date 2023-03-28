import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { HomeComponent } from './components/home/home.component';
import { LeaveRequestsComponent } from './components/leave-requests/leave-requests.component';
import { LoginComponent } from './components/login/login.component';
import { MyLeaveComponent } from './components/my-leave/my-leave.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"navbar", component:NavbarComponent},
  {path:"home", component:HomeComponent},
  {path:"applyLeave", component:ApplyLeaveComponent},
  {path:"myLeave", component:MyLeaveComponent},
  {path:"addEmployee", component:AddEmployeeComponent},
  {path:"employeedetails", component:EmployeeDetailsComponent},
  {path:"leaveRequests", component:LeaveRequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
