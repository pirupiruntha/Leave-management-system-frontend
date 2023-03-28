import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginUser } from 'src/app/model/login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username : string = '';
  password : string = '';
  role : string = '';

  user : LoginUser = new LoginUser();

  roles : string[];

  constructor(
    private authService: AuthService,
    private route: Router
  ) {
    this.roles = [
      'admin',
      'user'
    ]
  }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  login(){
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.role = this.role;

    this.authService.login(this.user).subscribe(res => {

      if(res == null) {
        alert("Uername or password is wrong");
        this.ngOnInit();
      }else {
        alert("Login successful");
        localStorage.setItem("token",res.token);
        this.route.navigate(['/home'])

        // if(this.role == 'user') {
        //   this.route.navigate(['/user']);
        // } 

        // if( this.role == 'admin') {
        //   this.route.navigate(['/admin']);
        // }

      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })

  }
  
}
