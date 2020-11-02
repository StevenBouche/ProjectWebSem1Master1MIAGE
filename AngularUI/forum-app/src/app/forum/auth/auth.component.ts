import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import LoginResult from 'src/models/auth/LoginResult';
import { RegisterView, LoginView, AccountView } from 'src/models/views/auth/AuthView';
import { AuthService } from 'src/services/auth/auth.service';
import { NotificationService } from 'src/services/notification/notification.service';
import { UserService } from 'src/services/user/user.service';

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
  registerForm : FormGroup;
  loginForm : FormGroup;
  registerData: RegisterView = new RegisterView();
  loginData: LoginView = new LoginView();
  isLoading: boolean;

  constructor(
    public auth: AuthService, 
    public user: UserService, 
    public router: Router, 
    private formBuilder: FormBuilder,
    private alert: NotificationService) {

    this.state = AuthState.REGISTER;
    this.isLoading = false;

    this.registerForm = formBuilder.group({
      firstName: [this.registerData.firstName, [Validators.required]],
      lastName: [this.registerData.lastName, [Validators.required]],
      email: [this.registerData.email, [Validators.required]], 
      password: [this.registerData.password, [Validators.required]]
    });

    this.loginForm = formBuilder.group({
      email: [this.loginData.email, [Validators.required]], 
      password: [this.loginData.password, [Validators.required]]
    });

  }

  ngOnInit(): void {

  }

  onClickLogin() : void {
    this.state = AuthState.LOGIN;
  }

  onClickRegister() : void {
    this.state = AuthState.REGISTER;
  }

  async onSubmitRegister(register: RegisterView) {
    this.isLoading = true;
    var user : AccountView = await this.user.registerUser(register);
    if(user!=undefined&&user._id!=undefined){
      this.alert.showSuccess("Success register","Success")
      this.state = AuthState.LOGIN;
      this.registerForm.reset();
    } else {
      this.alert.showError("Error on register","Error")
    }
    this.isLoading = false;
  }

  async onSubmitLogin(login : LoginView){
    this.isLoading = true;
    var loginResult : LoginResult = await this.auth.loginUser(login);
    if(loginResult!=undefined){
      this.alert.showSuccess("Success login - redirect","Success")
      this.loginForm.reset();
      this.router.navigate(['/']);
    } else {
      this.alert.showError("Error on login","Error")
    }
    this.isLoading = false;
  }

  isRegister() : boolean {
    return this.state == AuthState.REGISTER;
  }

  isLogin() : boolean {
    return this.state == AuthState.LOGIN;
  }

}
