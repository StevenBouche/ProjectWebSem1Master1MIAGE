import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountView, LoginView, RegisterView } from 'src/models/views/auth/AuthView';
import { AuthService } from '../auth/auth.service';
import { RequestService } from '../request/RequestService';

enum MethodsAuth {
  IDENTITY = "identity",
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = "http://localhost:7000/account"

  constructor(private req: RequestService, private auth: AuthService) { }

  public async getIdentity() : Promise<AccountView>{
    return this.req.executeGet<AccountView>(this.apiUrl+"/"+MethodsAuth.IDENTITY);
  }

  public async registerUser(register: RegisterView) : Promise<AccountView> {
      var data = new RegisterView();
      data.firstName = register.firstName;
      data.lastName = register.lastName;
      data.email = register.email;
      data.password = register.password;
      data.AddressIP = await this.req.getAddressIP();
      return this.req.executePost<RegisterView,AccountView>(this.apiUrl,data);
  }

  public async updateUser(account: AccountView) : Promise<AccountView>{
    return this.req.executePut<AccountView,AccountView>(this.apiUrl,account);
  }

  








}
