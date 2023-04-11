import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from 'src/app/model/leave-request';
import { EmployeeServiceService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.css']
})
export class MyLeaveComponent implements OnInit {
  userLeaveData: any =[]; 

  leaveAllowance ?: string;
  leaveBalance ?: string;
  id?: string;
  startDate ?: Date;
  endDate?: string;
  reason?: string;
  status?: string;

  private username: string='';

  constructor(private employeeService :EmployeeServiceService){}

  ngOnInit(): void {
    this.username = localStorage.getItem("USERNAME") || "" ;
    this.getLeavesByUsername(this.username)
    this.getEmployeeDataByUsername(this.username)
  }

  getLeavesByUsername(username: string): void{
    this.employeeService.getLeaveRequestByUsername(username).subscribe((data)=> {
      this.userLeaveData = data;
    })
  }

  getEmployeeDataByUsername(username: string): void { 
    this.employeeService.getEmployeeDataByUsername(this.username).subscribe((data)=>{
      this.leaveAllowance = data.leaveAllowance;
      this.leaveBalance = data.leaveBalance;
    })
  }

}
