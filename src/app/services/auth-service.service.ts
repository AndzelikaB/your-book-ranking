import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  data: any = localStorage.getItem('userIsLogged');
  userIsLogged: boolean = JSON.parse(this.data);
  wrongData: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}

  userLogin(name: any, pass: any): void {
    this.http.get<any>('http://localhost:3000/signupUsersList').subscribe({
      next: (res) => {
        const user: boolean = res.find((db: any) => {
          return db.username === name && db.password === pass;
        });
        if (user) {
          localStorage.setItem('userIsLogged', JSON.stringify(true));
          this.router.navigate(['/home']);
        } else {
          this.wrongData = true;
        }
      },
      error: (e) => {
        alert('Something went wrong: ' + e);
      },
    });
  }

  userLogout(): void {
    localStorage.setItem('userIsLogged', JSON.stringify(false));
    this.router.navigate(['/login']);
  }
}
