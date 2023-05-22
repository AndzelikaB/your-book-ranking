import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/app/services/auth-service.service';

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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loggedIn: boolean = false;

  loginForm: any = FormGroup;

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  password = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(public router: Router, private authService: AuthService) {}

  login(pass: any, userName: any) {
    if (
      userName == this.authService.userNameC &&
      pass == this.authService.passwordC
    ) {
      this.authService.userIsLogged = true;
      this.router.navigate(['home']);
    } else {
      this.loggedIn = true;
    }
  }
}
