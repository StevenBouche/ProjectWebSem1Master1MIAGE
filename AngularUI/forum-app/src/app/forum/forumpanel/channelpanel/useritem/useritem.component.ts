import { Component, Input, OnInit } from '@angular/core';
import UserView from 'src/models/forum/UserView';

@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.scss']
})
export class UseritemComponent implements OnInit {

  @Input() user : UserView;

  constructor() { }

  ngOnInit(): void {
  }

}
