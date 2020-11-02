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

    //Prepare data to send back end
    var data = new LoginView();
    data.email = login.email;
    data.password = login.password;
    data.AddressIP = await this.req.getAddressIP();

    //Execute request post to login 
    var url = this.apiUrl+"/"+MethodsAuth.LOGIN;
    var result : LoginResult = await this.req.executePost<LoginView,LoginResult>(url,data);

    //If not undefined store tokens
    if(result!=undefined){
      this.setLocalStorage(this.keyStorage, result);
      return result;
    }       
  
    return undefined;
  }

  public async logoutUser() : Promise<boolean> {

    //If user is auth call back end to logout and remove local tokens
    if(this.isAuthenticated()){
      var result = await this.req.executePost<any,any>(this.apiUrl+"/"+MethodsAuth.LOGOUT);
      this.removeLocalStorage(this.keyStorage);
      return true;
    }
    return false;
  }

  public getAuth(): LoginResult {
    return this.getLocalStorage<LoginResult>(this.keyStorage);
  }

  public async isAuthenticated(): Promise<boolean> {

    var auth = this.getAuth();
    var currentTimeSecond = (Date.now()/1000);

    console.log(auth)

    //if no tokens store
    if(auth==undefined) return false;

    console.log(auth)
     //if jwt token exist and expiration is valid
    if(auth.jwtToken!= undefined && auth.jwtToken.expireAt > currentTimeSecond)  
      return true;

     //if jwt token not exist or not valid and refresh token exist and is valid
    if(auth.refreshToken != undefined && auth.refreshToken.expireAt > currentTimeSecond) {
      
       //execute post request to generate new jwt token
      var result = await this.req.executePost<RefreshToken,LoginResult>(this.apiUrl+"/"+MethodsAuth.REFRESH,auth.refreshToken);
      console.log(result)
       //If not undefined store tokens
      if(result!=undefined)
        this.setLocalStorage(this.keyStorage, result);
      else {
        this.removeLocalStorage(this.keyStorage);
      }

      //retry to return a valid jwt token recursive
      return this.isAuthenticated();
    }

    //no valid tokens (jwt and refresh) no auth found
    return false;
  }

  private setLocalStorage<T>(key:string, obj: T) : void {
    localStorage.setItem(key,JSON.stringify(obj))
  }

  private removeLocalStorage(key:string) : void {
    localStorage.removeItem(key)
  }

  private getLocalStorage<T>(key:string) : T {
    var json = localStorage.getItem(key);
    try {
      //try parse json
      var parse = JSON.parse(json);
      //try cast json object to object T
      return parse as T;
    } catch (error){
      //on fail parse or cast
      console.error("Error when try to parse or cast local storage object")
      console.error(error)
      return undefined;
    }
  }

}
