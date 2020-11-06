import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import Channel from 'src/models/forum/Channel';
import Forum from 'src/models/forum/Forum';
import User from 'src/models/forum/User';

@Component({
  selector: 'app-forumpanel',
  templateUrl: './forumpanel.component.html',
  styleUrls: ['./forumpanel.component.scss']
})
export class ForumpanelComponent implements OnInit {

  @Input() forum : Forum;
  @Input() user: User;
  channelSelected: Channel;
  cacheSelected: Map<string,string>;
  
  displayParamForum: boolean;

  constructor() {
      this.displayParamForum = false;
      this.cacheSelected = new Map<string,string>();
   }

  ngOnInit(): void {
  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.forum != undefined)
      this.onChangeForum(changes.forum);
  }

  onChangeForum(forum: SimpleChange) {
    var idChannel = this.cacheSelected.get(this.forum.id);
    //si le forum n'a pas de channel referencer setup le premier channel sinon recupere le channel dans le cache du bon forum
    if(idChannel != undefined){
      // si pas de channel => undefined, si le channel dans le cache existe alors => channel_cache, sinon prend le premier du forum
      var channel = this.forum.channels[idChannel];
      this.channelSelected = channel != undefined ? channel : this.forum.channels.length > 0 ? this.forum.channels[0] : undefined;
    }
    else {
      this.channelSelected = this.forum.channels.length > 0 ? this.forum.channels[0] : undefined;
      if(this.channelSelected != undefined) this.updateCacheChannel();
    }
  }

  onClickParamForum(){
    console.log("click on param forum")
    this.displayParamForum=!this.displayParamForum;
  }

  onChannelSelect(channel: Channel) {
    this.channelSelected = channel;
    this.updateCacheChannel();
  }

  onNewChannel() {
    
  }

  updateCacheChannel() : void {
    this.cacheSelected.set(this.forum.id,this.channelSelected.id)
  }

  getChannelClass(channel: Channel) : string {
    if(this.channelSelected.id === channel.id) {
      return 'text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900 bg-gray-600 rounded';
    } else {
      return 'text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900';
    }
  }

}
