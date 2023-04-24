import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { LeaveRequest } from '../model/leave-request';
import { DeleteResponse } from '../model/deleteResponse';
import { UpdateLeaveRequest } from '../model/updateLeaveRequest';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService  {
  public getEmployeeDetails: any;

  ngOnInit(): void {
  }
  
  constructor(private http: HttpClient) { }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${environment.backendUrl}employees`, employee);
  }

  updateEmployee(username:string, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${environment.backendUrl}employees/${username}`, employee);
  }

  updateLeave(updateLeaveRequest: UpdateLeaveRequest): Observable<LeaveRequest> {
    return this.http.put<LeaveRequest>(`${environment.backendUrl}employee/leave`, updateLeaveRequest);
  }

  applyLeave(username: string, leaveRequest: LeaveRequest): Observable<LeaveRequest> {
    return this.http.post<LeaveRequest>(`${environment.backendUrl}employee/leave/${username}`, leaveRequest);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.backendUrl}employees`); 
  }

  getAllLeaves(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(`${environment.backendUrl}employee/leaves`); 
  }

  getEmployeeDataByUsername(username: string): Observable<Employee> {
    return this.http.get<Employee>(`${environment.backendUrl}employees/${username}`);
  }

  getLeaveRequestByUsername(username: string): Observable<LeaveRequest> {
    return this.http.get<LeaveRequest>(`${environment.backendUrl}employee/leave/${username}`);
  }

  deleteEmployeeByUsername(username: string): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${environment.backendUrl}employees/${username}`);
  }
  
}
