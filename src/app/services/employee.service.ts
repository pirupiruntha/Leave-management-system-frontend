import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
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
  
  constructor(private http: HttpClient, private storageService: StorageService) { }

  private getAuthTokenHeader(): HttpHeaders {
    const token = this.storageService.getUser().token;
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);  
  }

  addEmployee(employee: Employee): Observable<Employee> {
    const headers = this.getAuthTokenHeader();
    return this.http.post<Employee>(`${environment.backendUrl}employees`, employee, { headers });
  }

  updateEmployee(username:string, employee: Employee): Observable<Employee> {
    const headers = this.getAuthTokenHeader();
    return this.http.put<Employee>(`${environment.backendUrl}employees/${username}`, employee, { headers });
  }

  updateLeave(updateLeaveRequest: UpdateLeaveRequest): Observable<LeaveRequest> {
    const headers = this.getAuthTokenHeader();
    return this.http.put<LeaveRequest>(`${environment.backendUrl}employee/leave`, updateLeaveRequest, { headers });
  }

  applyLeave(username: string, leaveRequest: LeaveRequest): Observable<LeaveRequest> {
    const headers = this.getAuthTokenHeader();
    return this.http.post<LeaveRequest>(`${environment.backendUrl}employee/leave/${username}`, leaveRequest, { headers });
  }

  getAllEmployees(): Observable<Employee[]> {
    const headers = this.getAuthTokenHeader();
    return this.http.get<Employee[]>(`${environment.backendUrl}employees`, { headers }); 
  }

  getAllLeaves(): Observable<LeaveRequest[]> {
    const headers = this.getAuthTokenHeader();
    return this.http.get<LeaveRequest[]>(`${environment.backendUrl}employee/leaves`, { headers }); 
  }

  getEmployeeDataByUsername(username: string): Observable<Employee> {
    const headers = this.getAuthTokenHeader();
    return this.http.get<Employee>(`${environment.backendUrl}employees/${username}`, { headers });
  }

  getLeaveRequestByUsername(username: string): Observable<LeaveRequest> {
    const headers = this.getAuthTokenHeader();
    return this.http.get<LeaveRequest>(`${environment.backendUrl}employee/leave/${username}`, { headers });
  }

  deleteEmployeeByUsername(username: string): Observable<DeleteResponse> {
    const headers = this.getAuthTokenHeader();
    return this.http.delete<DeleteResponse>(`${environment.backendUrl}employees/${username}`, { headers });
  }
  
}
