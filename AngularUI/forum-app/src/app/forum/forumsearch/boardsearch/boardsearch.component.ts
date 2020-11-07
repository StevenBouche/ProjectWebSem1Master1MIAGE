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
  @Output() onSubscribe = new EventEmitter<ForumView>();

  constructor(private forumService : ForumService, private notif : NotificationService) {
    this.forumsView = new ForumSearchView();
    this.forumsView.currentPage = 1;
    this.forumsView.nbItemPerPage = 10;
    this.forumsView.nameFilter = '';
    this.forumsView.descFilter = '';
  }

  async ngOnInit() {
    this.forumsView = await this.forumService.getForums(this.forumsView);
  }

  async OnSubscribe(forum : ForumView){
    var res : string = await this.forumService.subscribe(forum._id);
    this.notif.showSuccess(res, "Successfuly subscribed");
    this.onSubscribe.emit(forum);
  }

}
