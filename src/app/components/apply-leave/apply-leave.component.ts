import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LeaveRequest } from 'src/app/model/leave-request';
import { EmployeeServiceService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  private username: string =''
  leaveForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    halfDay: new FormControl(''),
    reason: new FormControl('')
  });

  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem("USERNAME") || "";
  }

  errorMessage: string ='';

  onSubmit(){
    if (this.leaveForm.invalid) {
      this.errorMessage = "Please fill out all required fields.";
      return;
    }
  
    const leaveRequest: LeaveRequest = this.leaveForm.value as LeaveRequest;
    this.employeeService.applyLeave(this.username, leaveRequest).subscribe(
      () => {
        alert("leave applied successfully!");
        this.leaveForm.reset();
        this.router.navigate(['/myLeave']);
      },
      (error) => {
        console.error(error);
        alert("Failed to add leave. Please try again later.")
      }
    );
  }

}
