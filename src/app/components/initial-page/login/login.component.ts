import { Component } from '@angular/core';
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  password = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private authService: AuthService) { }

  get wrongData(): boolean {
    return this.authService.wrongData;
  }

  public loginIn(): void {
    this.authService.userLogin(
      this.username.value as string,
      this.password.value as string
    );
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
