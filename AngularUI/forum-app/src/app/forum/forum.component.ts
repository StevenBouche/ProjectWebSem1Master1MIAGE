import { Component, OnInit } from '@angular/core';
import ForumView from 'src/models/forum/ForumView';
import { ForumService } from 'src/services/forum/forum.service';
import { WsService } from 'src/services/request/ws.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  forums : Array<ForumView>;
  forumSelected: ForumView;
  component: string;
  componentSearchName : string = "showSearchForum"
  componentForumName: string = "showForumSelect"

  constructor(private connectionWs : WsService, private forumService : ForumService) {
    this.component = this.componentSearchName;
  }

  async ngOnInit() {
    this.forums = await this.forumService.getMyForums();

    if(this.forums!=undefined && this.forums.length > 0)
      this.forumSelected = this.forums[0];

    this.connectionWs.connectToWebSocket();
  }

  ngOnDestroy() : void {
    this.connectionWs.disconnectWebSocket();
  }

  onSearchForumSelect() {
    this.component = this.componentSearchName;
  }

  onForumSelect(forum: ForumView){
    this.forumSelected = forum;
    this.component = this.componentForumName;
  }

  forumIsSelected(forum: ForumView) : boolean{
    var test = this.forumSelected != undefined && forum != undefined && this.forumSelected._id === forum._id;
    return test;
  }

  async onForumSearch(){
    this.forums = await this.forumService.getMyForums(); //Refresh
  }

}
