import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ForumView from 'src/models/forum/ForumView';

@Component({
  selector: 'app-forumsearchitem',
  templateUrl: './forumsearchitem.component.html',
  styleUrls: ['./forumsearchitem.component.scss']
})
export class ForumsearchitemComponent implements OnInit {

  @Input() item: ForumView;
  @Output() subscribeCallBack = new EventEmitter<ForumView>();


  constructor() {  }

  ngOnInit(): void {
  }

  subscribe() {
    this.subscribeCallBack.emit(this.item);
  }

}
