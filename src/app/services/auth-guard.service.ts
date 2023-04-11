import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private storageService: StorageService, private router: Router) { }

  canActivate(): boolean {
    if (this.storageService.isLoggedIn() == true) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}

