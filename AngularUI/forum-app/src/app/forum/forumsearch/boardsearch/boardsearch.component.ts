import { Component, OnInit } from '@angular/core';
import FactoryModel from 'src/models/forum/FactoryModel';
import Forum from 'src/models/forum/Forum';
import ForumSearchView from 'src/models/forum/ForumSearchView';
import { ForumService } from 'src/services/forum/forum.service';

@Component({
  selector: 'app-boardsearch',
  templateUrl: './boardsearch.component.html',
  styleUrls: ['./boardsearch.component.scss']
})
export class BoardsearchComponent implements OnInit {

  forums : Array<Forum>;

  forumsView : ForumSearchView;

  constructor(private forumService : ForumService) {
    this.forums = FactoryModel.createForums();
    this.forumsView = new ForumSearchView();
    this.forumsView.currentPage = 1;
    this.forumsView.nbItemPerPage = 10;
    this.forumsView.nameFilter = '';
    this.forumsView.descFilter = '';
  }

  async ngOnInit() {
    this.forumsView = await this.forumService.getForums(this.forumsView);
  }

}
