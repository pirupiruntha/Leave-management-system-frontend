import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { LeaveRequest } from 'src/app/model/leave-request';
import { UpdateLeaveRequest } from 'src/app/model/updateLeaveRequest';


@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css']
})
export class LeaveRequestsComponent implements OnInit {
  allLeaveRequests: LeaveRequest[] = [];
  approvedLeaveRequests: LeaveRequest[] = [];
  rejectedLeaveRequests: LeaveRequest[] = [];

  username: string='';
  leaveId: string = '';

  empUsername?: string;
  empId?: string;
  id?: string;
  startDate?: string;
  endDate?: string;
  reason?: string;
  status?: string;

  constructor(private employeeService :EmployeeServiceService, private route: Router ){}

  ngOnInit(): void {
    this.getAllLeaves()
  }

  getAllLeaves(): void {
    this.employeeService.getAllLeaves().subscribe(data => {
      this.allLeaveRequests = data.filter(d => d.status === "PENDING");
      this.approvedLeaveRequests = data.filter(d => d.status === "APPROVED");
      this.rejectedLeaveRequests = data.filter(d => d.status === "REJECTED");
    });
  }

  updateLeaveRequest!: UpdateLeaveRequest;

  approveLeave(id: string){
    this.updateLeaveRequest = {leaveId: id, status: "APPROVED"}
    this.employeeService.updateLeave(this.updateLeaveRequest).subscribe((data)=>{
      alert("leave approved");
      window.location.reload();
    })
  }

  rejectLeave(id: string){
    this.updateLeaveRequest = {leaveId: id, status: "REJECTED"}
    this.employeeService.updateLeave(this.updateLeaveRequest).subscribe((data)=>{
      alert("leave rejected");
      window.location.reload();
    })
  }


}
