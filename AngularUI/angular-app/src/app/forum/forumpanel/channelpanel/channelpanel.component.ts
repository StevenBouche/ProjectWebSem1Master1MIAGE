import { Component, OnInit, Input } from '@angular/core';
import Channel from 'src/model/Channel';
import User from 'src/model/User';

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

};
