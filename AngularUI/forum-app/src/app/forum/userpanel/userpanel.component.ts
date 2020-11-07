import { Component, Input, OnInit } from '@angular/core';
import UserView from 'src/models/forum/UserView';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.scss']
})
export class UserpanelComponent implements OnInit {

  user: UserView;

  constructor() {
    this.user = new UserView();
  }

  ngOnInit(): void {
  }

}
