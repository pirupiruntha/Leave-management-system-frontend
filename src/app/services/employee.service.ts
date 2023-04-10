import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { LeaveRequest } from '../model/leave-request';
import { DeleteResponse } from '../model/deleteResponse';
import { UpdateLeaveRequest } from '../model/updateLeaveRequest';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService  {
  public getEmployeeDetails: any;

  ngOnInit(): void {
  }

  private baseUrl = "http://localhost:8080/"
  
  constructor(private http: HttpClient, private storageService: StorageService) { }

  private getAuthTokenHeader(): HttpHeaders {
    const token = this.storageService.getUser().token;
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);  
  }

  addEmployee(employee: Employee): Observable<Employee> {
    const headers = this.getAuthTokenHeader();
    return this.http.post<Employee>(`${this.baseUrl}employees`, employee, { headers });
  }

  updateEmployee(username:string, employee: Employee): Observable<Employee> {
    const headers = this.getAuthTokenHeader();
    return this.http.put<Employee>(`${this.baseUrl}employees/${username}`, employee, { headers });
  }

  updateLeave(updateLeaveRequest: UpdateLeaveRequest): Observable<LeaveRequest> {
    const headers = this.getAuthTokenHeader();
    return this.http.put<LeaveRequest>(`${this.baseUrl}employee/leave`, updateLeaveRequest, { headers });
  }

  applyLeave(username: string, leaveRequest: LeaveRequest): Observable<LeaveRequest> {
    const headers = this.getAuthTokenHeader();
    return this.http.post<LeaveRequest>(`${this.baseUrl}employee/leave/${username}`, leaveRequest, { headers });
  }

  getAllEmployees(): Observable<Employee[]> {
    const headers = this.getAuthTokenHeader();
    return this.http.get<Employee[]>(`${this.baseUrl}employees`, { headers }); 
  }

  getAllLeaves(): Observable<LeaveRequest[]> {
    const headers = this.getAuthTokenHeader();
    return this.http.get<LeaveRequest[]>(`${this.baseUrl}employee/leaves`, { headers }); 
  }

  getEmployeeDataByUsername(username: string): Observable<Employee> {
    const headers = this.getAuthTokenHeader();
    return this.http.get<Employee>(`${this.baseUrl}employees/${username}`, { headers });
  }

  getLeaveRequestByUsername(username: string): Observable<LeaveRequest> {
    const headers = this.getAuthTokenHeader();
    return this.http.get<LeaveRequest>(`${this.baseUrl}employee/leave/${username}`, { headers });
  }

  deleteEmployeeByUsername(username: string): Observable<DeleteResponse> {
    const headers = this.getAuthTokenHeader();
    console.log("e delere");
    return this.http.delete<DeleteResponse>(`${this.baseUrl}employees/${username}`, { headers });
  }
  
}
