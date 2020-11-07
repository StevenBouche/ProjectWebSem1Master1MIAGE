import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnection } from '@microsoft/signalr';
import LoginResult from 'src/models/auth/LoginResult';
import { AuthService } from '../auth/auth.service';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class WsService {

  private readonly urlServer = "http://localhost:8081/forumhub"
  private connection : HubConnection;

  constructor(private auth : AuthService, private alert: NotificationService) { 
      
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
      }).catch((error:any) => {
        this.alert.showError(error,"Error");
        console.log("connect error : "+error)
        //this.connectToWebSocket();
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
  }

  private initEventWebSocket(connection : HubConnection) : void {
    connection.onclose((callback:any) => {
      console.log("CONNECTION CLOSE");
    })
    connection.on("newMessage", (user,message) => {
      console.log("NEW MESSAGE "+user+" : "+message);
    })
  }


}
