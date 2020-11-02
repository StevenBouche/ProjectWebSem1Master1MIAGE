import { Injectable, ɵConsole } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import LoginResult from 'src/models/auth/LoginResult';
import RefreshToken from 'src/models/security/RefreshToken';
import { LoginView } from 'src/models/views/auth/AuthView';
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
    console.log(result)
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
    console.log(auth)
    if(auth==undefined) return false;
    
    if(auth.jwtToken!= undefined && this.jwtHelper.isTokenExpired(auth.jwtToken.accessToken, auth.jwtToken.expireAt)){
      console.log("JWT TOKEN IS VALID")
      return true;
    } else if(auth.refreshToken!=undefined&&auth.refreshToken.expireAt<Date.now()) {
      console.log("JWT TOKEN NOT VALID")
      console.log("REFRESH TOKEN NOT VALID")
      var result = this.req.executePost<RefreshToken,LoginResult>(this.apiUrl+"/"+MethodsAuth.REFRESH,auth.refreshToken);
      console.log(result)
      this.setLocalStorage(this.keyStorage, result);
      return this.isAuthenticated();
    }
    console.log("NOT AUTH")
    return false;
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
