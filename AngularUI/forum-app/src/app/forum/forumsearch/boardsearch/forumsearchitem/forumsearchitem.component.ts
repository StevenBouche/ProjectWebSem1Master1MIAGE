import { Component, Input, OnInit } from '@angular/core';
import ForumView from 'src/models/forum/ForumView';

@Component({
  selector: 'app-forumsearchitem',
  templateUrl: './forumsearchitem.component.html',
  styleUrls: ['./forumsearchitem.component.scss']
})
export class ForumsearchitemComponent implements OnInit {

  @Input() item: ForumView;

  constructor() {  }

  ngOnInit(): void {
  }

}
