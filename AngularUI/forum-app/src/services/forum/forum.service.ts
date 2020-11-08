import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ChannelPanelView from 'src/models/forum/ChannelPanelView';
import ChannelView from 'src/models/forum/ChannelView';
import ForumForm from 'src/models/forum/ForumForm';
import ForumPanelView from 'src/models/forum/ForumPanelView';
import ForumSearchView from 'src/models/forum/ForumSearchView';
import ForumView from 'src/models/forum/ForumView';
import MessageView from 'src/models/forum/MessageView';
import RegisterChannel from 'src/models/forum/RegisterChannel';
import RegisterMessage from 'src/models/forum/RegisterMessage';
import UserView from 'src/models/forum/UserView';
import { RegisterView } from 'src/models/views/auth/AuthView';
import { NotificationService } from '../notification/notification.service';
import { RequestService } from '../request/RequestService';
import { UserService } from '../user/user.service';


class FactoryModel {
  static defaultForumSearchView() : ForumSearchView {
    let search = new ForumSearchView();
    search.currentPage = 1;
    search.descFilter = "";
    search.nameFilter = "";
    search.totalItem = 0;
    search.totalPage = 0;
    search.nbItemPerPage = 10;
    search.totalItemCurent = 0;
    search.forumSearch = new Array<ForumView>()
    return search;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private readonly apiUrl = "http://localhost:7000/forum";
  private readonly apiUrlChannel = "http://localhost:7000/channel";
  private readonly apiUrlMsg = "http://localhost:7000/message";

  private _myForums = new BehaviorSubject<Array<ForumView>>(new Array<ForumView>());
  private _searchForum = new BehaviorSubject<ForumSearchView>(FactoryModel.defaultForumSearchView())

  //Selector forum - channel
  private _myForumSelected = new BehaviorSubject<ForumView>(undefined);
  private _channelForumSelected = new BehaviorSubject<ChannelView>(undefined);

  //data channels users messages
  private _channelsOfMyForumSelected = new BehaviorSubject<Array<ChannelView>>(new Array<ChannelView>());
  private _usersOfMyForumSelected = new BehaviorSubject<Array<UserView>>(new Array<UserView>());
  private _messagesOfChannelSelected = new BehaviorSubject<Array<MessageView>>(new Array<MessageView>());

  private dataStore: {
    myForums : Array<ForumView>,
    searchForum : ForumSearchView,
    myForumSelected: ForumView
    channelsOfMyForumSelected: Array<ChannelView>,
    usersOfMyForumSelected: Array<UserView>,
    channelForumSelected: ChannelView,
    messagesOfChannelSelected: Array<MessageView>
  } = {
     myForums : new Array<ForumView>(),
     searchForum : FactoryModel.defaultForumSearchView(),
     myForumSelected: undefined,
     channelsOfMyForumSelected: Array<ChannelView>(),
     usersOfMyForumSelected: new Array<UserView>(),
     channelForumSelected: undefined,
      messagesOfChannelSelected: new Array<MessageView>()
  }; // store our data in memory

  readonly searchForum = this._searchForum.asObservable()
  readonly myForums = this._myForums.asObservable();
  readonly myForumSelected = this._myForumSelected.asObservable();
  readonly channelsOfMyForumSelected = this._channelsOfMyForumSelected.asObservable();
  readonly usersOfMyForumSelected = this._usersOfMyForumSelected.asObservable();
  readonly channelForumSelected = this._channelForumSelected.asObservable();
  readonly messagesOfChannelSelected = this._messagesOfChannelSelected.asObservable();

  constructor(private req: RequestService, private notif : NotificationService, private userService : UserService) { }

  async loadMyForums() {
    //get forum API
    this.dataStore.myForums = await this.getMyForums();
    //notify change value
    this._myForums.next(Object.assign({}, this.dataStore).myForums);
    //if value have forums and not have current selected forum, set first element of array and notify
    if(this.dataStore.myForumSelected==undefined&&this.dataStore.myForums.length>0)
      this.selectMyForums(this.dataStore.myForums[0]._id);

  }

    //
    //  LOADING
    //

  async loadSearchForum() {
    this.dataStore.searchForum = await this.getForums(this.dataStore.searchForum);
    console.log(this.dataStore.searchForum);
    this._searchForum.next(this.cpObj(this.dataStore).searchForum)
  }

  private async loadDatasOfSelectedForum() {

      var idForum = this.dataStore.myForumSelected?._id;

      if(idForum){

        //get panel of selected forum
        var panel = await this.getForumPannel(idForum);

        //set data in store and notify channels / users
        this.dataStore.channelsOfMyForumSelected = panel.channels;
        this._channelsOfMyForumSelected.next(this.cpObj(this.dataStore).channelsOfMyForumSelected);
        this.dataStore.usersOfMyForumSelected = panel.users;
        this._usersOfMyForumSelected.next(this.cpObj(this.dataStore).usersOfMyForumSelected);

        if(this.dataStore.channelForumSelected==undefined&&panel.channels.length>0)
          this.selectChannelForum(idForum,panel.channels[0].id);

      }

  }

  private async loadDataOfSelectedChannel() {
    var idChannel = this.dataStore.channelForumSelected?.id;
    console.log(this.dataStore)
    if(idChannel){
      //get panel of selected forum
      var panel = await this.getChannelPannel(idChannel);
      //set data in store and notify message
      this.dataStore.messagesOfChannelSelected = panel.messages;
      this._messagesOfChannelSelected.next(this.cpObj(this.dataStore).messagesOfChannelSelected);
    }
  }

    //
    //  ACTIONS
    //


  selectMyForums(id: string){

    //ignore if current forum
    //if(this.dataStore.myForumSelected?._id == id) return;

    //find forum with id
    var selected = this.dataStore.myForums.find(forum => forum._id == id);

    //if exist
    if(selected){

      //update selected and next
      this.dataStore.myForumSelected = selected;

      this._myForumSelected.next(this.cpObj(this.dataStore).myForumSelected);
      this.dataStore.channelForumSelected = undefined;
      //load data of forum select
      this.loadDatasOfSelectedForum();

    }

  }

  selectChannelForum(idForum:string,idChannel:string){

    //if current forum
    if(this.dataStore.myForumSelected?._id == idForum){

      var channelSelect = this.dataStore.channelsOfMyForumSelected.find(channel => channel.id = idChannel);

      if(channelSelect){

        this.dataStore.channelForumSelected = channelSelect;
        this._channelForumSelected.next(this.cpObj(this.dataStore).channelForumSelected)

        this.loadDataOfSelectedChannel();

      }

    }

  }

  async createNewChannelForumSelected(channelName: string) {

    let register : RegisterChannel = new RegisterChannel();

    register.IdForum = this.dataStore.myForumSelected._id;
    register.NameChannel = channelName;
    var res = await this.newChannel(register);

    this.dataStore.channelsOfMyForumSelected = [...this.dataStore.channelsOfMyForumSelected, res];
    this._channelsOfMyForumSelected.next(this.cpObj(this.dataStore).channelsOfMyForumSelected)

  }

  async createNewForum(forum : ForumForm) {
    var res = await this.sendFormValues(forum);
    // this.dataStore.myForums = [...this.dataStore.myForums, res];
    // this._myForums.next(this.cpObj(this.dataStore).myForums)
    this.loadMyForums();
  }

  async subscribeToAForum(forum : ForumView){
    if(this.dataStore.myForums.find(f => f._id == forum._id)){
      this.notif.showError("You have already subscribed to this forum", "Error");
      return;
    }
    var res = await this.subscribe(forum._id);
    this.loadMyForums();
    this.notif.showSuccess("You have subscribed to this forum", "Success");
  }

  async OnSearchPaginitionChange(length:number,pageIndex:number,pageSize:number){
    this.dataStore.searchForum.totalItem = length;
    this.dataStore.searchForum.currentPage = pageIndex;
    this.dataStore.searchForum.nbItemPerPage = pageSize;
    //this.loadSearchForum();
  }
    //
    // HTTP CALLS
    //

  public async newMsg(registerMsg : RegisterMessage){
    return await this.req.executePost<RegisterMessage, MessageView>(this.apiUrlMsg, registerMsg)
  }

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

  public async getChannelPannel(idChannel: string) : Promise<ChannelPanelView> {
    return await this.req.executeGet<ChannelPanelView>(this.apiUrlChannel+"/panel/" + idChannel);
  }

  private cpObj<T>(obj:T) : T{
    return Object.assign({},obj);
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
