import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  isUser = false;
  isAdmin = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    
  }


    userRole: any;

  saveData(){
      localStorage.setItem('USER_ROLE', "ROLE_ADMIN");
  }
}
