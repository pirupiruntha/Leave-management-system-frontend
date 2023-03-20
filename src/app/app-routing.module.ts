import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyLeaveComponent } from './components/my-leave/my-leave.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"navbar", component:NavbarComponent},
  {path:"home", component:HomeComponent},
  {path:"applyLeave", component:ApplyLeaveComponent},
  {path:"myLeave", component:MyLeaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
