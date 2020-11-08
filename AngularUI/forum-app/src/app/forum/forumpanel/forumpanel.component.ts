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

  forum : ForumView;
  channels : Array<ChannelView>
  channelSelected: ChannelView;

  displayParamForum: boolean;
  channelName : string;

  constructor(private forumService : ForumService) {
      this.displayParamForum = false;
      this.channelName = '';
   }

  ngOnInit() {

    this.forumService.myForumSelected.subscribe((forum : ForumView) => {
      this.forum = forum;
    })

    this.forumService.channelsOfMyForumSelected.subscribe((channels:Array<ChannelView>) => {
      this.channels = channels;
    })

    this.forumService.channelForumSelected.subscribe((channel:ChannelView) => {
      this.channelSelected = channel;
    })

  }

  onClickParamForum(){
    console.log("click on param forum")
    this.displayParamForum=!this.displayParamForum;
  }

  onChannelSelect(channel: ChannelView) {
    this.forumService.selectChannelForum(this.forum._id,channel.id)
  }

  onNewChannel() {
    this.forumService.createNewChannelForumSelected(this.channelName);
  }

  getChannelClass(channel: ChannelView) : string {
    if(this.channelSelected!=undefined && this.channelSelected.id == channel.id) {
      return 'text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900 bg-gray-600 rounded';
    } else {
      return 'text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900';
    }
  }

}
