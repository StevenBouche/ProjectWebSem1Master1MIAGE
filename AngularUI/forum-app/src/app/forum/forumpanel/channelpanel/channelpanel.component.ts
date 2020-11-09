import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import ChannelPanelView from 'src/models/forum/ChannelPanelView';
import ChannelView from 'src/models/forum/ChannelView';
import MessageView from 'src/models/forum/MessageView';
import RegisterMessage from 'src/models/forum/RegisterMessage';
import UserView from 'src/models/forum/UserView';
import { ForumService } from 'src/services/forum/forum.service';
import { WsService } from 'src/services/request/ws.service';

@Component({
  selector: 'app-channelpanel',
  templateUrl: './channelpanel.component.html',
  styleUrls: ['./channelpanel.component.scss']
})
export class ChannelpanelComponent implements OnInit {

  haveChannel: boolean;
  channel: ChannelView;
  messages: Array<MessageView>;
  //panel : ChannelPanelView;

  usersOnline: Array<UserView>;
  usersOffline: Array<UserView>;

  message : string;

  @ViewChild("chat") chat: ElementRef;

  constructor(private forumService: ForumService) {

  }

  ngOnInit(): void {

    //this.chat.nativeElement.maxScrollTop = this.chat.nativeElement.scrollHeight - this.chat.nativeElement.offsetHeight

    this.forumService.usersOfMyForumSelected.subscribe((users:Array<UserView>) => {
      this.usersOffline = users.filter(user => !user.isConnected);
      this.usersOnline = users.filter(user => user.isConnected);
    });

    this.forumService.channelForumSelected.subscribe((channel:ChannelView) => {
      console.log("CHANNEL SELECT UPDATE")
      console.log(channel)
      this.channel = channel;
      this.haveChannel = this.channel != undefined;
    })

    this.forumService.messagesOfChannelSelected.subscribe((message:Array<MessageView>) => {
      this.messages = message;
      //this.onEvent();
    })
  }

  sendMessage(){
      console.log("MESSAGE AVANT ENVOI " + this.message);

      this.message = this.message.trim();
      if(this.message === undefined || this.message === '') return;

      var msgEntered = this.message;
      this.message = '';

      //If message = null

      this.forumService.sendMessage(msgEntered);
  }

  private onEvent(){
    var elem = this.chat.nativeElement;

    if (elem.maxScrollTop - elem.scrollTop <= elem.offsetHeight) {

      elem.scrollTop = elem.scrollHeight
      console.log("I just scrolled to the bottom!")

    } else {
      console.log("I won't scroll: you're way too far from the bottom!\n" +
      "You should maybe alert the user that he received a new message.\n" +
      "If he wants to scroll at this point, he must do it manually.")
    }

  }


}
