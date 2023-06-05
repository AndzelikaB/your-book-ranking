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
    const data: any = localStorage.getItem('userIsLogged');
    const userIsLogged: boolean = JSON.parse(data);
    return data ? userIsLogged : false;
  }

  constructor(private router: Router, private http: HttpClient) {}

  userLogin(name: any, pass: any): void {
    this.http.get<any>('http://localhost:3000/signupUsersList').subscribe({
      next: (res) => {
        const user: boolean = res.find((db: any) => {
          return (
            (db.username === name || db.email === name) && db.password === pass
          );
        });

        console.log(user);
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

  createUser(name: any, email: any, pass: any) {
    const userData: AuthData = {
      id: '',
      username: name,
      email: email,
      password: pass,
    };

    this.http.post('http://localhost:3000/signupUsersList', userData).subscribe(
      (resp) => {
        this.signSuccess = true;
      },
      (err) => {
        console.log(err);
      }
    );
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
