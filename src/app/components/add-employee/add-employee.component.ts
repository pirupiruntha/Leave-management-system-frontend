import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { EmployeeServiceService } from 'src/app/services/employee.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  existingEmployee: any ={};
  showText= false;

  constructor(private employeeService: EmployeeServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("initialize");
    this.route.queryParams.subscribe(params => {
      if (params['employee']) {
        this.existingEmployee = JSON.parse(params['employee']);
        this.showText=true;
      }
    });
    console.log("edit", this.existingEmployee)
  }

  employeeForm = new FormGroup({
    fullName: new FormControl(''),
    empId: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    telephoneNo: new FormControl(''),
    startDate: new FormControl(''),
    leaveAllowance: new FormControl(''),
    education: new FormControl(''),
    jobTitle: new FormControl(''),
    salary: new FormControl('')
  });

  errorMessage: string ='';
  successMessage: string ='';
  
  onSubmit() {
    if (this.employeeForm.invalid) {
      this.errorMessage = "Please fill out all required fields.";
      return ;
    }
  
    const employee: Employee = this.employeeForm.value as Employee;
    if(this.showText){
      this.employeeService.updateEmployee(this.existingEmployee.username, employee).subscribe(
        (response) => {
          console.log("res = ", response);
          alert("Employee update successfully!");
          this.successMessage = "Employee update successfully!";
          this.employeeForm.reset();
          this.router.navigate(['/employeedetails']);
        },
        (error) => {
          console.error(error);
          this.errorMessage = "Failed to update employee. Please try again later.";
        }
      );
    }else{
      this.employeeService.addEmployee(employee).subscribe(
        (response) => {
          console.log("res = ", response);
          alert("Employee added successfully!");
          this.successMessage = "Employee added successfully!";
          this.employeeForm.reset();
          this.router.navigate(['/employeedetails']);
        },
        (error) => {
          console.error(error);
          this.errorMessage = "Failed to add employee. Please try again later.";
        }
      );
    }
  }

}

