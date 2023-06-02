import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userIsLogged: boolean = false;
  wrongData: boolean = false;
  signSuccess: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}

  login(name: string, pass: string): void {
    this.http.get<any>('http://localhost:3000/signupUsersList').subscribe({
      next: (res) => {
        const user: boolean = res.find((db: any) => {
          return (
            (db.username === name || db.email === name) && db.password === pass
          );
        });

        console.log(user);
        if (user) {
          this.userIsLogged = true;
          this.router.navigate(['home']);
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
}

interface AuthData {
  id: string;
  username: string;
  email: string;
  password: string;
}
