import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  
  employeeForm = new FormGroup({

    fullName: new FormControl(''),
    employeeId: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    telNo: new FormControl(''),
    startDate: new FormControl(''),
    education: new FormControl(''),
    jobTitle: new FormControl(''),
    salary: new FormControl('')
  });

  constructor(private http: HttpClient) {}

  onSubmit() {
    const employeeData = this.employeeForm.value;
    console.log(this.employeeForm.value);
    this.http.post('http://localhost:8080/employees', employeeData).subscribe(response => {
      console.log(response);
    });
  }

  // onSubmit() {
  //   console.log(this.employeeForm.value);
  //   this.employeeService.addEmployeeData(this.employeeForm.value).subscribe((response) => {
  //     console.log(response);
  //   });
  // }
}
