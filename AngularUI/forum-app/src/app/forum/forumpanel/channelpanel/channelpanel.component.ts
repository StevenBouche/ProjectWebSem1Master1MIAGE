import { Component, Input, OnInit } from '@angular/core';
import Channel from 'src/models/forum/Channel';
import User from 'src/models/forum/User';

@Component({
  selector: 'app-channelpanel',
  templateUrl: './channelpanel.component.html',
  styleUrls: ['./channelpanel.component.scss']
})
export class ChannelpanelComponent implements OnInit {

  @Input() channel: Channel;
  @Input() usersOnline: User[];
  @Input() usersOffline: User[]

  constructor() { }

  ngOnInit(): void {
  }

}
