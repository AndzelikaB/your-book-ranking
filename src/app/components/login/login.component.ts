import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

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
  userNameC: string = 'Andżelika';
  passwordC: string = 'zaq1';
  userName: string = '';
  password: string = '';
  loggedIn: boolean = false;

  loginForm: any = FormGroup;

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  passwordFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor(public router: Router) {}

  login() {
    if (
      this.usernameFormControl.value == this.userNameC &&
      this.passwordFormControl.value == this.passwordC
    ) {
      this.router.navigate(['home']);
    } else {
      this.loggedIn = true;
    }
  }
}
