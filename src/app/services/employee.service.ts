import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/employees"

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService implements OnInit {
  public getEmployeeDetails: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEmployeesData();
    this.addEmployeeData();
  }
  public getEmployeesData(){
    return this.http.get(API_URL);

    // this.http.get(API_URL).subscribe((data) => {
    //   console.log(data);
    //   this.getEmployeeDetails= data;
    // });
  }

  public getEmployeeDataByUsername(){
    return this.http.get(API_URL +`${'username'}`).subscribe((data) => {
      console.log(data);
      this.getEmployeeDetails= data;
    });
  }


  public addEmployeeData(){
    return this.http.post(API_URL, Employee);

    // this.http.post(API_URL, Employee).subscribe((data) => {
    //   console.log(data);
    // })
  }

  


}
