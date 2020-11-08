
import { Component, Input, OnInit } from '@angular/core';
import ForumView from 'src/models/forum/ForumView';
import MessageView from 'src/models/forum/MessageView';
import UserView from 'src/models/forum/UserView';
import { ForumService } from 'src/services/forum/forum.service';

@Component({
  selector: 'app-messageitem',
  templateUrl: './messageitem.component.html',
  styleUrls: ['./messageitem.component.scss']
})
export class MessageitemComponent implements OnInit {

  @Input() message: MessageView;
  user : UserView;

  constructor(private forumService : ForumService) { }

  ngOnInit(): void {
    this.forumService.usersOfMyForumSelected.subscribe((users : Array<UserView>) => {
      this.user = users.find(user => user.id == this.message.userId);
    })
  }

}
