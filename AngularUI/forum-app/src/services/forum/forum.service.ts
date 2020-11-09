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
import RegisterChannelResult from 'src/models/forum/RegisterChannelResult';
import RegisterMessage from 'src/models/forum/RegisterMessage';
import SubscribeResultView from 'src/models/forum/SubscribeResultView';
import UserView from 'src/models/forum/UserView';
import { NotificationService } from '../notification/notification.service';
import { RequestService } from '../request/RequestService';
import { WsService } from '../request/ws.service';
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

  readonly searchForum = this._searchForum.asObservable()
  readonly myForums = this._myForums.asObservable();
  readonly myForumSelected = this._myForumSelected.asObservable();
  readonly channelsOfMyForumSelected = this._channelsOfMyForumSelected.asObservable();
  readonly usersOfMyForumSelected = this._usersOfMyForumSelected.asObservable();
  readonly channelForumSelected = this._channelForumSelected.asObservable();
  readonly messagesOfChannelSelected = this._messagesOfChannelSelected.asObservable();

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


  constructor(private req: RequestService,
    private notif : NotificationService,
    private websocket: WsService,
    private userService: UserService
    ) {


    this.websocket.onNewMessage.subscribe((message:RegisterMessage) => {

        if(message==undefined) return;

        if(this.dataStore.myForumSelected._id !== message.idForum) return;

        if(this.dataStore.channelForumSelected.id !== message.idChannel) return;

        this.pushMessage(message.messageV)

        this.notif.showSuccess("new message on channel","Message");

    })

    this.websocket.onNewCategorie.subscribe((channel:RegisterChannelResult) => {

        if(channel==undefined) return;

        //verif current forum is forum of channel variable
        //add channel to channels datastore

    })

    this.websocket.onUserConnect.subscribe((idUser:string) => {

        if(idUser==undefined) return;

        //verif current forum curretn channel
        // users data store

    })

    this.websocket.onUserDisconnect.subscribe((idUser:string) => {

        if(idUser==undefined) return;



    })

    this.websocket.onUserSubscribe.subscribe((sub:SubscribeResultView) => {

        if(sub==undefined) return;



    })

  }

  async loadMyForums() {
    //get forum API
    this.dataStore.myForums = await this.getMyForums();
    //notify change value
    this._myForums.next(Object.assign({}, this.dataStore).myForums);
    //if value have forums and not have current selected forum, set first element of array and notify
    if(this.dataStore.myForumSelected==undefined&&this.dataStore.myForums.length>0){
      this.selectMyForums(this.dataStore.myForums[0]._id);
    }
  }

    //
    //  LOADING
    //

  async loadSearchForum() {

    //execute request
    this.dataStore.searchForum = await this.getForums(this.dataStore.searchForum);
    //notify change
    this._searchForum.next(this.cpObj(this.dataStore).searchForum)

  }

  private async loadDatasOfSelectedForum() {

      //get forum selected, if is undefined set channel forum to undefined
      var idForum = this.dataStore.myForumSelected?._id;
      if(idForum==undefined) {
        this.selectChannelForum(undefined);
        return;
      }

      //get panel of selected forum
      var panel = await this.getForumPannel(idForum);

      //set data in store and notify channels / users
      this.dataStore.channelsOfMyForumSelected = panel.channels;
      this.dataStore.usersOfMyForumSelected = panel.users;
      this._channelsOfMyForumSelected.next(this.cpObj(this.dataStore).channelsOfMyForumSelected);
      this._usersOfMyForumSelected.next(this.cpObj(this.dataStore).usersOfMyForumSelected);

      //si pas de channel selectionner
      if(this.dataStore.channelForumSelected==undefined){
          //mais il y a des channels alors set le premier channel
          if(panel.channels.length>0) this.selectChannelForum(panel.channels[0].id);
          return;
      }

      // si channel select
      //find if channel current is in current forum
      this.dataStore.channelForumSelected = panel.channels.find(channel => channel.id == this.dataStore.channelForumSelected.id)
      //is il y est pas et que channels existe alors set le premier sinon set undefined
      if(this.dataStore.channelForumSelected == undefined && panel.channels.length>0) this.selectChannelForum(panel.channels[0].id);
      else this._channelForumSelected.next(this.cpObj(this.dataStore).channelForumSelected);

  }

  private async loadDataOfSelectedChannel() {

    //if undefined reset messages
    var idChannel = this.dataStore.channelForumSelected?.id;

    if(idChannel==undefined){
      //else clear the message array
      this.dataStore.messagesOfChannelSelected = new Array<MessageView>();
      this._messagesOfChannelSelected.next(this.cpObj(this.dataStore).messagesOfChannelSelected);
      return;
    }

    //get panel of selected forum
    var panel = await this.getChannelPannel(idChannel);
    //set data in store and notify message
    this.dataStore.messagesOfChannelSelected = panel.messages;
    this._messagesOfChannelSelected.next(this.cpObj(this.dataStore).messagesOfChannelSelected);

  }

    //
    //  ACTIONS
    //


  selectMyForums(id: string){

    //if select undefined, set data to undefined and load refresh dependencie child
    if(id==undefined){
      this.dataStore.myForumSelected = undefined;
      this._myForumSelected.next(this.cpObj(this.dataStore).myForumSelected);
      this.loadDatasOfSelectedForum();
      return;
    }

    // else find forum with id
    var selected = this.dataStore.myForums.find(forum => forum._id == id);

    if(selected==undefined) return;

    //update selected and next
    this.dataStore.myForumSelected = selected;
    this._myForumSelected.next(this.cpObj(this.dataStore).myForumSelected);

    //load data of forum select
    this.loadDatasOfSelectedForum();

  }

  selectChannelForum(idChannel:string){

    //if set channel to undefined reset child field
    if(idChannel==undefined){
      this.dataStore.channelForumSelected = undefined;
      this._channelForumSelected.next(this.cpObj(this.dataStore).channelForumSelected)
      this.loadDataOfSelectedChannel();
      return;
    }

    //else search if exist and set and refresh
    var channelSelect = this.dataStore.channelsOfMyForumSelected.find(channel => channel.id === idChannel);

    if(channelSelect==undefined) return;

    this.dataStore.channelForumSelected = channelSelect;
    this._channelForumSelected.next(this.cpObj(this.dataStore).channelForumSelected)

    this.loadDataOfSelectedChannel();

  }

  async createNewChannelForumSelected(channelName: string) {

    //setup register form
    let register : RegisterChannel = new RegisterChannel();
    register.IdForum = this.dataStore.myForumSelected._id;
    register.NameChannel = channelName;

    //execute request
    var res = await this.newChannel(register);

    //concat result to channels and notify
    this.dataStore.channelsOfMyForumSelected = [...this.dataStore.channelsOfMyForumSelected, res.channel];
    this._channelsOfMyForumSelected.next(this.cpObj(this.dataStore).channelsOfMyForumSelected)

    //if empty channel select and channels have data, select first channel
    if(this.dataStore.channelForumSelected == undefined && this.dataStore.channelsOfMyForumSelected.length > 0)
      this.selectChannelForum(this.dataStore.channelsOfMyForumSelected[0].id);

  }

  async createNewForum(forum : ForumForm) {

    //execute request to create forum
    var res = await this.sendFormValues(forum);

    //set redirection on new forum
    this.dataStore.channelForumSelected.id = res._id;

    //refresh my forums to load refresh
    this.loadMyForums();

    //execute select of new forum
    this.selectMyForums(res._id);

  }

  async subscribeToAForum(forum : ForumView){

    //error already subscribe
    if(this.dataStore.myForums.find(f => f._id == forum._id)){
      this.notif.showError("You have already subscribed to this forum", "Error");
      return;
    }

    //execute request
    var res = await this.subscribe(forum._id);

    if(res.result){
      //and load refresh of my forum
      this.loadMyForums();
      this.notif.showSuccess(res.message, "Success");
    } else {
      this.notif.showError(res.message, "Error");
    }

  }

  async OnSearchPaginitionChange(length:number,pageIndex:number,pageSize:number){
    //todo
    this.dataStore.searchForum.totalItem = length;
    this.dataStore.searchForum.currentPage = pageIndex;
    this.dataStore.searchForum.nbItemPerPage = pageSize;
    //this.loadSearchForum();
  }

  async sendMessage(msg : string){

    //create message view
    let message : MessageView = new MessageView();
    message.timestamp = Date.now();
    message.value = msg;

    //create form
    let registerMsg : RegisterMessage = new RegisterMessage();
    registerMsg.idChannel = this.dataStore.channelForumSelected.id;
    registerMsg.idForum = this.dataStore.myForumSelected._id;
    registerMsg.messageV = message;

    //execute request
    let res = await this.newMsg(registerMsg);

    //if correct response create message (have id)
    // and is current forum and channel
    if( res.messageV !== undefined &&
        res.messageV.id !== undefined &&
        res.idForum == this.dataStore.myForumSelected._id &&
        res.idChannel == this.dataStore.channelForumSelected.id
      ){
        //push message in current list of message
        this.dataStore.messagesOfChannelSelected.push(res.messageV);
        this._messagesOfChannelSelected.next(this.cpObj(this.dataStore).messagesOfChannelSelected)
    }

  }

  pushMessage(msg : MessageView){
    //push and notify new message
    this.dataStore.messagesOfChannelSelected.push(msg);
    this._messagesOfChannelSelected.next(this.cpObj(this.dataStore).messagesOfChannelSelected)
  }

    //
    // HTTP CALLS
    //

  public async newMsg(registerMsg : RegisterMessage){
    return await this.req.executePost<RegisterMessage, RegisterMessage>(this.apiUrlMsg, registerMsg)
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

  public async subscribe(id : string) : Promise<SubscribeResultView> {
    return await this.req.executeGet<SubscribeResultView>(this.apiUrl+"/subscribe/" + id);
  }

  public async newChannel(channel : RegisterChannel) : Promise<RegisterChannelResult> {
    return await this.req.executePost<RegisterChannel, RegisterChannelResult>(this.apiUrlChannel+"/create", channel);
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

}
