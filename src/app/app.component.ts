import { Component } from '@angular/core';
import { AuthService } from './services/auth-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {}
  check() {
    this.location.onUrlChange((url: string, state: unknown) => {
      console.log(this.authService.userIsLogged);
      return this.authService.userIsLogged;
    });
  }

  userIsLogged() {
    const data: any = localStorage.getItem('userIsLogged');
    const user: boolean = JSON.parse(data);
    // const user = this.authService.userIsLogged; // to co
    const isHomePage = this.router.url === '/home';

    if (user == true && isHomePage) {
      return true;
    } else return false;
  }
}
