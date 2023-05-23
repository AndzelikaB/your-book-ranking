import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  wrongData: boolean = false;
  loginForm: any = FormGroup;
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  password = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(
    public router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  login() {
    this.http.get<any>('http://localhost:3000/signupUsersList').subscribe({
      next: (res) => {
        const user: boolean = res.find((db: any) => {
          return (
            db.username === this.username.value &&
            db.password === this.password.value
          );
        });
        if (user) {
          this.authService.userIsLogged = true;
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
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
