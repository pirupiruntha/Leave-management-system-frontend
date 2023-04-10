import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private route: Router,
    
  ) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const {username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        console.log("auth user",data)

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        console.log("roles", this.roles[0])

        localStorage.setItem("USERNAME", username);

        if (this.roles[0]==="ROLE_ADMIN"){
          this.route.navigate(['/adminDashboard']);
        } else {
          this.route.navigate(['/userDashboard'])
        }
          
      },
      error: err => {
        this.isLoginFailed = true;
      }
    });
  }

  logout(){
    this.route.navigate(['/login']);
    this.storageService.clean();
  }
  
}
