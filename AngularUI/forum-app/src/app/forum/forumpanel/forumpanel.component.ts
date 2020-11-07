import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import ChannelView from 'src/models/forum/ChannelView';
import ForumPanelView from 'src/models/forum/ForumPanelView';
import ForumView from 'src/models/forum/ForumView';
import RegisterChannel from 'src/models/forum/RegisterChannel';
import UserView from 'src/models/forum/UserView';
import { RegisterView } from 'src/models/views/auth/AuthView';
import { ForumService } from 'src/services/forum/forum.service';

@Component({
  selector: 'app-forumpanel',
  templateUrl: './forumpanel.component.html',
  styleUrls: ['./forumpanel.component.scss']
})

export class ForumpanelComponent implements OnInit {

  @Input() forum : ForumView;
  channelSelected: ChannelView;
  cacheSelected: Map<string,string>;

  displayParamForum: boolean;
  panel : ForumPanelView;
  channelName : string;
  newChannel : RegisterChannel;

  constructor(private forumService : ForumService) {
      this.displayParamForum = false;
      this.cacheSelected = new Map<string,string>();
      this.newChannel = new RegisterChannel();
      this.channelName = '';
      this.panel = new ForumPanelView();
      this.panel.forum = this.forum;
      this.panel.channels = new Array<ChannelView>();
      this.panel.users = new Array<UserView>();
   }

  async ngOnInit() {
    this.panel = await this.forumService.getForumPannel(this.forum._id);
    console.log(this.panel)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.forum != undefined)
      this.onChangeForum(changes.forum);
  }

  getLabel() : string {
    return this.panel != undefined && this.panel.forum != undefined ? this.panel.forum.name : ''
  }

  onChangeForum(forum: SimpleChange) {
    var idChannel = this.cacheSelected.get(this.forum._id);
    //si le forum n'a pas de channel referencer setup le premier channel sinon recupere le channel dans le cache du bon forum
    if(this.panel == undefined || this.panel.channels == undefined){
      return;
    }

    if(idChannel != undefined){
      // si pas de channel => undefined, si le channel dans le cache existe alors => channel_cache, sinon prend le premier du forum
      var channel = this.panel.channels[idChannel];
      this.channelSelected = channel != undefined ? channel : this.panel.channels.length > 0 ? this.panel.channels[0] : undefined;
    }
    else {
      this.channelSelected = this.panel.channels.length > 0 ? this.panel.channels[0] : undefined;
      if(this.channelSelected != undefined) this.updateCacheChannel();
    }
  }

  onClickParamForum(){
    console.log("click on param forum")
    this.displayParamForum=!this.displayParamForum;
  }

  onChannelSelect(channel: ChannelView) {
    this.channelSelected = channel;
    this.updateCacheChannel();
  }

  async onNewChannel() {
    console.log(this.channelName);
    var channelEntered = this.channelName
    this.newChannel.NameChannel = channelEntered;
    this.newChannel.IdForum = this.forum._id;

    var res = await this.forumService.newChannel(this.newChannel);
    this.panel.channels.push(res);
    console.log(this.panel.channels)
  }

  updateCacheChannel() : void {
    this.cacheSelected.set(this.forum._id,this.channelSelected.id)
  }

  getChannelClass(channel: ChannelView) : string {
    if(this.channelSelected.id === channel.id) {
      return 'text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900 bg-gray-600 rounded';
    } else {
      return 'text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900';
    }
  }

}
