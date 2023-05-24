import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/app/services/auth-service.service';

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

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.userIsLogged = false;
  }

  signUp(user: any, email: any, pass: any): void {
    email = this.email.value;
    user = this.username.value;
    pass = this.password.value;

    this.authService.createUser(user, email, pass);
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
