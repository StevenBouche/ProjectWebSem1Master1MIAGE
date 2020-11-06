import { Component, Input, OnInit } from '@angular/core';
import User from 'src/models/forum/User';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.scss']
})
export class UserpanelComponent implements OnInit {

  @Input() user: User;
  
  constructor() { }

  ngOnInit(): void {
  }

}
