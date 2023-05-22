import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userIsLogged = false;
  userNameC: string = '11111';
  passwordC: string = '1';
}
