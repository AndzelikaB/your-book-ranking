import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  canActivate() {
    const user = this.authService.userIsLogged;
    if (user) {
      this.location.replaceState('/login');
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
