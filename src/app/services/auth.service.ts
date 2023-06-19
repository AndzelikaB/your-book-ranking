import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  wrongData: boolean = false;
  signSuccess: boolean = false;

  get userIsLogged(): boolean {
    const localStorageData: string = localStorage.getItem(
      'userIsLogged'
    ) as string;
    const userIsLogged: boolean = JSON.parse(localStorageData);
    return localStorageData ? userIsLogged : false;
  }

  constructor(private router: Router, private http: HttpClient) {}

  userLogin(name: string, pass: string): void {
    this.http.get<any>('http://localhost:3000/signupUsersList').subscribe({
      next: (res) => {
        const userLogged: boolean = res.find((db: any) => {
          return (
            (db.username === name || db.email === name) && db.password === pass
          );
        });

        if (userLogged) {
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

  createUser(name: string, email: string, pass: string): void {
    const userData: AuthData = {
      id: '',
      username: name,
      email: email,
      password: pass,
    };

    this.http
      .post('http://localhost:3000/signupUsersList', userData)
      .subscribe({
        next: () => {
          this.signSuccess = true;
          setTimeout(() => {
            this.signSuccess = false;
          }, 5000);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  userLogout(): void {
    localStorage.setItem('userIsLogged', JSON.stringify(false));
    this.router.navigate(['/login']);
  }
}

interface AuthData {
  id: string;
  username: string;
  email: string;
  password: string;
}
