import { Component, OnInit } from '@angular/core';
import Forum from 'src/model/Forum'
import FactoryModel from 'src/model/FactoryModel'

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  forums : Forum[];
  forumSelected: Forum;
  currentUser = FactoryModel.createUser(0+"","user0","/assets/avatar (0).jpg")

  constructor() { 
    this.forums = FactoryModel.createForums();
    this.forumSelected = this.forums[0];
  }

  ngOnInit(): void {
  }

  onForumSelect(forum: Forum){
    this.forumSelected = forum;
  }

  forumIsSelected(forum: Forum) : boolean{
    var test = this.forumSelected != undefined && forum != undefined && this.forumSelected.id === forum.id;
    return test;
  }

}
