import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  password = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  @ViewChild('signupNgForm') signupNgForm!: NgForm;

  constructor(private authService: AuthService) {}

  signUp(s: NgForm): void {
    this.authService.createUser(
      this.username.value as string,
      this.email.value as string,
      this.password.value as string
    );

    // this.username.reset();
    // this.email.reset();
    // this.password.reset();
    s.resetForm();
  }

  get signSuccess(): boolean {
    return this.authService.signSuccess;
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl,
    form: FormGroupDirective | NgForm
  ): boolean {
    const isSubmitted = form && form.submitted;
    return (
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
