import { Component, Input, OnInit } from '@angular/core';
import ChannelPanelView from 'src/models/forum/ChannelPanelView';
import ChannelView from 'src/models/forum/ChannelView';
import MessageView from 'src/models/forum/MessageView';
import UserView from 'src/models/forum/UserView';

@Component({
  selector: 'app-channelpanel',
  templateUrl: './channelpanel.component.html',
  styleUrls: ['./channelpanel.component.scss']
})
export class ChannelpanelComponent implements OnInit {

  @Input() channel: ChannelView;
  panel : ChannelPanelView;
  @Input() usersOnline: UserView[];
  @Input() usersOffline: UserView[]

  constructor() {
    this.panel = new ChannelPanelView();
    this.panel.messages = new Array<MessageView>();
    this.panel.channel = this.channel;
  }

  ngOnInit(): void {
  }

}
