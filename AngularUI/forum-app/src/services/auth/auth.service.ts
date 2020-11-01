import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import LoginResult from 'src/models/auth/LoginResult';
import { AccountView, LoginView } from 'src/models/views/auth/AuthView';
import { RequestService } from '../request/RequestService';

enum MethodsAuth {
  LOGIN = "login",
  REFRESH = "refresh",
  LOGOUT = "logout"
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly jwtHelper : JwtHelperService;
  private readonly keyStorage = "auth";
  private readonly apiUrl = "http://localhost:7000/auth"

  constructor(private req: RequestService) { 
    this.jwtHelper = new JwtHelperService();
  }

  public async loginUser(login: LoginView) : Promise<LoginResult> {
    var data = new LoginView();
    data.email = login.email;
    data.password = login.password;
    data.AddressIP = await this.req.getAddressIP();
    var result = await this.req.executePost<LoginView,LoginResult>(this.apiUrl+"/"+MethodsAuth.LOGIN,data);
    this.setLocalStorage(this.keyStorage, result);
    return result;
  }

  public async logoutUser() : Promise<any> {
    var result = this.req.executePost<any,any>(this.apiUrl+"/"+MethodsAuth.LOGOUT);
    this.setLocalStorage(this.keyStorage, {});
    return result;
  }

  public getAuth(): LoginResult {
    return this.getLocalStorage<LoginResult>(this.keyStorage);
  }

  public isAuthenticated(): boolean {
    var auth = this.getAuth();
    return auth != undefined && 
      this.jwtHelper.isTokenExpired(auth.jwtToken.accessToken, auth.jwtToken.expireAt);
  }

  private setLocalStorage<T>(key:string, obj: T) : void {
    console.log(obj)
    localStorage.setItem(key,JSON.stringify(obj))
  }

  private getLocalStorage<T>(key:string) : T {
    var json = localStorage.getItem(key);
    try {
      var parse = JSON.parse(json);
      var result : T = parse as T;
      console.log(result)
      return result;
    } catch (error){
      console.log(error)
    }
    return undefined;
  }

}
