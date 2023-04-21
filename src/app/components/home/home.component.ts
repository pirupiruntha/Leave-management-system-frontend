import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    userData: any; 

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
    this.getEmployeeDataByUsername(this.username);
  }

  getEmployeeDataByUsername(username: string): void { 
    this.employeeService.getEmployeeDataByUsername(this.username).subscribe((data)=>{
      this.fullName = data.fullName;
      this.dob = data.dob.split('T')[0];
      this.gender = data.gender;
      this.education = data.education;
      this.jobTitle = data.jobTitle;
      this.startDate = data.startDate.split('T')[0];
      this.salary = data.salary;
    })
  }
}
