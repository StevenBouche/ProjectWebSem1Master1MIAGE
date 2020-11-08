import { Component, Input, OnInit } from '@angular/core';
import ChannelPanelView from 'src/models/forum/ChannelPanelView';
import ChannelView from 'src/models/forum/ChannelView';
import MessageView from 'src/models/forum/MessageView';
import UserView from 'src/models/forum/UserView';
import { ForumService } from 'src/services/forum/forum.service';

@Component({
  selector: 'app-channelpanel',
  templateUrl: './channelpanel.component.html',
  styleUrls: ['./channelpanel.component.scss']
})
export class ChannelpanelComponent implements OnInit {

  channel: ChannelView;
  messages: Array<MessageView>;
  //panel : ChannelPanelView;

  usersOnline: Array<UserView>;
  usersOffline: Array<UserView>;

  constructor(private forumService: ForumService ) {

  }

  ngOnInit(): void {

    this.forumService.usersOfMyForumSelected.subscribe((users:Array<UserView>) => {
      this.usersOffline = users.filter(user => !user.isConnected);
      this.usersOnline = users.filter(user => user.isConnected);
    });

    this.forumService.channelForumSelected.subscribe((channel:ChannelView) => {
      this.channel = channel;
    })

    this.forumService.messagesOfChannelSelected.subscribe((message:Array<MessageView>) => {
      this.messages = message;
    })

  }



}
