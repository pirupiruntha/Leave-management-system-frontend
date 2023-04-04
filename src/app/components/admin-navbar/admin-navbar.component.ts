import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private storageService: StorageService, private route: Router){}
  ngOnInit(): void {
  }

  Logout(): void{
    this.storageService.clean();
    this.route.navigate([''])
  }
}
