import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { LeaveRequest } from '../model/leave-request';


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
    return new HttpHeaders().set('Authorization', `Bearer ${token}`).append('Access-Control-Allow-Origin',"*");  
  }

  addEmployee(employee: Employee): Observable<Employee> {
    const headers = this.getAuthTokenHeader();
    return this.http.post<Employee>(`${this.baseUrl}employees`, employee, { headers });
  }

  applyLeave(leaveRequest: LeaveRequest, username: string): Observable<LeaveRequest> {
    const headers = this.getAuthTokenHeader();
    return this.http.post<LeaveRequest>(`${this.baseUrl}employee/leave/${username}`, leaveRequest, { headers });
  }

  getAllEmployees(): Observable<Employee[]> {
    const headers = this.getAuthTokenHeader();
    return this.http.get<Employee[]>(`${this.baseUrl}employees`, { headers });
    
  }

  getEmployeeDataByUsername(username: string): Observable<Employee> {
    const headers = this.getAuthTokenHeader();
    return this.http.get<Employee>(`${this.baseUrl}employees/${username}`, { headers });
  }
  
}
