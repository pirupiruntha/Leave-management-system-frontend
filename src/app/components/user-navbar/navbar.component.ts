import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  isUser = false;
  isAdmin = false;
  roles: string[] = [];


  constructor(
    private storageService: StorageService,
    private route:Router ) {}

  ngOnInit() {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
    
  }
  changeNavbar(){
    localStorage.getItem("roles")
  }

  Logout(): void{
    this.storageService.clean();
    this.route.navigate([''])
  }

}
