import { Injectable } from '@angular/core';
import ChannelPanelView from 'src/models/forum/ChannelPanelView';
import ChannelView from 'src/models/forum/ChannelView';
import ForumForm from 'src/models/forum/ForumForm';
import ForumPanelView from 'src/models/forum/ForumPanelView';
import ForumSearchView from 'src/models/forum/ForumSearchView';
import ForumView from 'src/models/forum/ForumView';
import RegisterChannel from 'src/models/forum/RegisterChannel';
import { RequestService } from '../request/RequestService';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private readonly apiUrl = "http://localhost:7000/forum"
  private readonly apiUrlChannel = "http://localhost:7000/channel"

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

  public async newChannel(channel : RegisterChannel) : Promise<ChannelView> {
    return await this.req.executePost<RegisterChannel, ChannelView>(this.apiUrlChannel+"/create", channel);
  }

  public async getForumPannel(idForum : string) : Promise<ForumPanelView>{
    return await this.req.executeGet<ForumPanelView>(this.apiUrl+"/panel/" + idForum);
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
