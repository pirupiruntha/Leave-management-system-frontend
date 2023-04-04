import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { EmployeeServiceService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public employees: any = [];
  public employee:any;
  public mainModel = new Employee();

  employeeForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    
  });

  constructor(private employeeService :EmployeeServiceService){}

  ngOnInit(): void {
    this.getEmployeeDataByUsername()
    
  }

  getEmployeeDataByUsername(): void { 
    this.employeeService 
      .getEmployeeDataByUsername()
      this.employee
  }

}
