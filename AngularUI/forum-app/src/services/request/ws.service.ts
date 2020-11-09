import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnection } from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import LoginResult from 'src/models/auth/LoginResult';
import MessageView from 'src/models/forum/MessageView';
import RegisterMessage from 'src/models/forum/RegisterMessage';
import { RegisterView } from 'src/models/views/auth/AuthView';
import { AuthService } from '../auth/auth.service';
import { ForumService } from '../forum/forum.service';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class WsService {

  private readonly urlServer = "http://localhost:8081/forumhub"
  private connection : HubConnection;
  private msg : MessageView;

  private _isConnected = new BehaviorSubject<boolean>(false);

  private dataStore: {
    isConnected  : boolean
  } = {
    isConnected  : false
  }; // store our data in memory

  readonly isConnected = this._isConnected.asObservable()

  constructor(private auth : AuthService, private alert: NotificationService, private forumService : ForumService) {

  }

  public async connectToWebSocket() {

    var isAuth : boolean = await this.auth.isAuthenticated();

    if(isAuth){

      var loginResult : LoginResult = this.auth.getAuth();

      console.log(`${this.urlServer}?token=${loginResult.jwtToken.accessToken}`)
      //create new hub
      this.connection =  new signalR.HubConnectionBuilder()
      .withUrl(`${this.urlServer}?token=${loginResult.jwtToken.accessToken}`)   // mapping to the chathub as in startup.cs
      .configureLogging(signalR.LogLevel.Information)
      .build();

       //Init events websocket
      this.initEventWebSocket(this.connection);

      //start connection
      this.connection.start()
      .then((value:any) => {
        console.log("connected")
        this.dataStore.isConnected = true;
        this._isConnected.next(true);
      }).catch((error:any) => {
        this.alert.showError(error,"Error");
        console.log("connect error : "+error)
        this.dataStore.isConnected = false;
        this._isConnected.next(false);
        // this.connectToWebSocket();
      })

    }

  }

  public disconnectWebSocket() {
    if(this.connection!=undefined&&this.connection.connectionId != null) {
      this.connection.stop().then((value:any) => {
        console.log("connected")
      })
      .catch((error:any) => {
        this.alert.showError(error,"Error");
        console.log("connect error : "+error)
      })
    } else  {
      console.log("disconnect websocket : already disconnect")
    }
    this.dataStore.isConnected = false;
        this._isConnected.next(false);
  }

  private initEventWebSocket(connection : HubConnection) : void {
    connection.onclose((callback:any) => {
      console.log("CONNECTION CLOSE");
      this.dataStore.isConnected = false;
        this._isConnected.next(false);
    })

    connection.on("newMessage", (message) => {
      console.log("NEW MESSAGE : "+message);
      this.msg = message;
      this.forumService.pushMessage(this.msg);

    })
  }


}
