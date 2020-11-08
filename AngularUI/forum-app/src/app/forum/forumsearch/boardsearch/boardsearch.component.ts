import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import ForumSearchView from 'src/models/forum/ForumSearchView';
import ForumView from 'src/models/forum/ForumView';
import { ForumService } from 'src/services/forum/forum.service';
import { NotificationService } from 'src/services/notification/notification.service';

@Component({
  selector: 'app-boardsearch',
  templateUrl: './boardsearch.component.html',
  styleUrls: ['./boardsearch.component.scss']
})
export class BoardsearchComponent implements OnInit {

  forumsView : ForumSearchView;

  constructor(private forumService : ForumService, private notif : NotificationService) {

  }

  async ngOnInit() {
    // this.forumsView = await this.forumService.getForums(this.forumsView);
    this.forumService.searchForum.subscribe((data: ForumSearchView) => {
      this.forumsView = data;
      console.log("DATA : ");
      console.log(data);
    })

    this.forumService.loadSearchForum();
  }

}
