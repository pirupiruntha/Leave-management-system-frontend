import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:8080/';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(
    private httpClient: HttpClient,
    private authService:AuthService
    ) { }

  getPublicContent(): Observable<any> {
    return this.httpClient.get(API_URL + 'home', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.httpClient.get(API_URL + 'dashboard', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.httpClient.get(API_URL + 'manage', { responseType: 'text' });
  }

  public login(loginData:any){
    return this.httpClient.post(this.API_URL + 'login', loginData, {
      headers: this.requestHeader,
    });
  }

  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.authService.getRoles();
  
    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            break; // Exit inner loop when a match is found
          }
        }
        if (isMatch) {
          break; // Exit outer loop when a match is found
        }
      }
    }
  
    return isMatch;
  }
  
}
