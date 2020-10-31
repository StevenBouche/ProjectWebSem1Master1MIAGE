import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly jwtHelper : JwtHelperService;

  private isAuth: boolean;

  constructor() { 
    this.jwtHelper = new JwtHelperService();
    this.isAuth = false;
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return this.isAuth;
  }

  public setAuth(auth: boolean) : void{
    console.log(auth)
    this.isAuth = auth;
  }

}
