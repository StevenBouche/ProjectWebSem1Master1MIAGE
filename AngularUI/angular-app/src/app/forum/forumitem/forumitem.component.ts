import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Forum from 'src/model/Forum';

@Component({
  selector: 'app-forumitem',
  templateUrl: './forumitem.component.html',
  styleUrls: ['./forumitem.component.scss']
})
export class ForumitemComponent implements OnInit {

  @Input() forum: Forum;
  @Input() isSelected: boolean;
  @Output() onClickForum = new EventEmitter<Forum>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.onClickForum.emit(this.forum);
  }

  isActive() : string {
    return this.isSelected ? "active" : "";
  }

}
