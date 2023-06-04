import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  get userIsLogged(): boolean {
    return this.authService.userIsLogged;
  }

  constructor(private authService: AuthService) {}
}
