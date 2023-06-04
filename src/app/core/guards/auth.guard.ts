import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const loggedUser = this.authService.userIsLogged;
    if (loggedUser) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
