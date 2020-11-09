import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  private _myIdentity = new BehaviorSubject<AccountView>(undefined);

  private dataStore: {
    myIdentity : AccountView
  } = {
    myIdentity : undefined
  }; // store our data in memory

  readonly myIdentity = this._myIdentity.asObservable()

  constructor(private req: RequestService) { }

  public async registerUser(register: RegisterView) : Promise<AccountView> {
      var data = new RegisterView();
      data.firstName = register.firstName;
      data.lastName = register.lastName;
      data.email = register.email;
      data.pseudo = register.pseudo; //TODO Register IMG
      data.image = register.image;
      data.password = register.password;
      data.addressIP = await this.req.getAddressIP();
      return this.req.executePost<RegisterView,AccountView>(this.apiUrl,data);
  }

  public async updateUser(account: AccountView) : Promise<AccountView>{
    return this.req.executePut<AccountView,AccountView>(this.apiUrl,account);
  }

  onRemoveAuth() {
    this.dataStore.myIdentity = undefined;
    this._myIdentity.next(Object.assign({}, this.dataStore).myIdentity);
  }

  async onSetAuth() {
    this.dataStore.myIdentity = await this.getIdentity();
    this._myIdentity.next(Object.assign({}, this.dataStore).myIdentity);
  }

  public async getIdentity() : Promise<AccountView>{
    return this.req.executeGet<AccountView>(this.apiUrl+"/"+MethodsAuth.IDENTITY);
  }

}
