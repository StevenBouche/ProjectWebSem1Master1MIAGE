import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

enum AuthState {
  LOGIN,
  REGISTER
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private state: AuthState;

  constructor(public auth: AuthService, public router: Router) {
    this.state = AuthState.REGISTER;
  }

  ngOnInit(): void {

  }

  onClickLogin() : void {
    this.state = AuthState.LOGIN;
  }

  onClickRegister() : void {
    this.state = AuthState.REGISTER;
  }

  onSubmitRegister(): void {
    
  }

  onSubmitLogin(): void {
    this.auth.setAuth(true);
    this.router.navigate(['/']);
  }

  isRegister() : boolean {
    return this.state == AuthState.REGISTER;
  }

  isLogin() : boolean {
    return this.state == AuthState.LOGIN;
  }

}
