import { Injectable } from '@angular/core';
import ForumForm from 'src/models/forum/ForumForm';
import ForumSearchView from 'src/models/forum/ForumSearchView';
import ForumView from 'src/models/forum/ForumView';
import { RequestService } from '../request/RequestService';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private readonly apiUrl = "http://localhost:7000/forum"

  constructor(private req: RequestService) { }

  public async getForums(listForum : ForumSearchView) : Promise<ForumSearchView>{
    return await this.req.executePost<ForumSearchView, ForumSearchView>(this.apiUrl+"/search", listForum);
  }

  public async sendFormValues(forumForm : ForumForm){
    return await this.req.executePost<ForumForm, ForumView>(this.apiUrl+"/create", forumForm)
  }

  public async getMyForums() : Promise<Array<ForumView>> {
    return await this.req.executeGet<Array<ForumView>>(this.apiUrl+"/myforum")
  }

  public async subscribe(id : string) : Promise<string> {
    return await this.req.executeGet<string>(this.apiUrl+"/subscribe/" + id);
  }
  // public async registerUser(register: RegisterView) : Promise<AccountView> {
  //     var data = new RegisterView();
  //     data.firstName = register.firstName;
  //     data.lastName = register.lastName;
  //     data.email = register.email;
  //     data.password = register.password;
  //     data.AddressIP = await this.req.getAddressIP();
  //     return this.req.executePost<RegisterView,AccountView>(this.apiUrl,data);
  // }

  // public async updateUser(account: AccountView) : Promise<AccountView>{
  //   return this.req.executePut<AccountView,AccountView>(this.apiUrl,account);
  // }

}
