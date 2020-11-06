import { Component, Input, OnInit } from '@angular/core';
import Forum from 'src/models/forum/Forum';

@Component({
  selector: 'app-forumsearchitem',
  templateUrl: './forumsearchitem.component.html',
  styleUrls: ['./forumsearchitem.component.scss']
})
export class ForumsearchitemComponent implements OnInit {

  @Input() item: Forum;

  constructor() {  }

  ngOnInit(): void {
  }

}
