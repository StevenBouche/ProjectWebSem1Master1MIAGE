import { Component, Input, OnInit } from '@angular/core';
import UserView from 'src/models/forum/UserView';
import { AccountView } from 'src/models/views/auth/AuthView';
import { WsService } from 'src/services/request/ws.service';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.scss']
})
export class UserpanelComponent implements OnInit {

  identity: AccountView;
  isConnected: boolean;
  user: UserView;
  color: string;

  constructor(private userService : UserService, private websocket : WsService) {

  }

  ngOnInit(): void {
    this.userService.myIdentity.subscribe(identity => {
      this.identity = identity;
      console.log("MY IDENITYTYYYYYYYYYYYYYYYYYYYYYY")
      console.log(identity)
    })
    this.websocket.isConnected.subscribe((connect:boolean) => {
      this.isConnected = connect;
      this.color = connect ?  "text-green-900" : "text-red-900";
    })
  }

}
