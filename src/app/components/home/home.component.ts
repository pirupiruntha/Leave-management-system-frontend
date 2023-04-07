import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeServiceService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    fullName?: string;
    dob?: string;
    gender?: string;
    startDate?: string;
    education?: string;
    jobTitle?: string;
    salary?: string;

  private username: string = "";

  constructor(private employeeService :EmployeeServiceService){}

  ngOnInit(): void {
    this.username = localStorage.getItem("USERNAME") || ""
    console.log(this.username)
    this.getEmployeeDataByUsername(this.username);
    
  }

  getEmployeeDataByUsername(username: string): void { 
    console.log("CALLING METHOD TO USER")
    this.employeeService.getEmployeeDataByUsername(this.username).subscribe((data)=>{
      console.log("data = ", data);
      this.fullName = data.fullName;
      this.dob = data.dob;
      this.gender = data.gender;
      this.education = data.education;
      this.jobTitle = data.jobTitle;
      this.startDate = data.startDate;
      this.salary = data.salary;
    })
  }
  

  // getEmployeeDataByUsername(): void { 
  //   this.employeeService 
  //     .getEmployeeDataByUsername()
  //     this.employee
  // }

}
