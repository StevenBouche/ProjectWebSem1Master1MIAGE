import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    //subscribe event my forum
    this.forumService.myForums.subscribe((list:Array<ForumView>) => { this.forums = list; })
    //subscribe event selected forum
    this.forumService.myForumSelected.subscribe((value:ForumView) => {
      console.log(value)
      this.forumSelected = value;
      this.component = this.componentForumName;
    })
    // load my forum
    this.forumService.loadMyForums();
    //connect to forum websocket server
    this.connectionWs.connectToWebSocket();
  }

  ngOnDestroy() : void {
    this.connectionWs.disconnectWebSocket();
  }

  onSearchForumSelect() {
    this.component = this.componentSearchName;
  }

  onForumSelect(forum: ForumView){
    console.log(forum)
    this.forumService.selectMyForums(forum._id);
  }

  forumIsSelected(forum: ForumView) : boolean{
    return this.forumSelected != undefined && forum != undefined && this.forumSelected._id == forum._id;
  }

  async onForumSearch(){
    this.forums = await this.forumService.getMyForums(); //Refresh
  }

}
