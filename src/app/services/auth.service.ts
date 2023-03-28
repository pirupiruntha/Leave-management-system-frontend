import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '../model/login-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl : string = '';
  signUpUrl : string = '';

  constructor(private http : HttpClient) {

    this.loginUrl = "http://localhost:8080/user/authenticate";
    this.signUpUrl = "http://localhost:8080/user";

  }

  login(user : LoginUser) : Observable<any> {
    return this.http.post<any>(this.loginUrl,user);
  }

  signUp(user : LoginUser) : Observable<any> {
    return this.http.post<any>(this.signUpUrl,user);
  }

}