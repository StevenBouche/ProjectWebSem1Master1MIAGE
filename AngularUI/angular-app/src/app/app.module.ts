import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//COMPONENT
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { ForumitemComponent } from './forum/forumitem/forumitem.component';
import { ForumpanelComponent } from './forum/forumpanel/forumpanel.component';
import { ChannelitemComponent } from './forum/forumpanel/channelitem/channelitem.component';
import { UseritemComponent } from './forum/forumpanel/useritem/useritem.component';
import { MessageitemComponent } from './forum/forumpanel/messageitem/messageitem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChannelpanelComponent } from './forum/forumpanel/channelpanel/channelpanel.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

//ROUTING
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    ForumitemComponent,
    ForumpanelComponent,
    ChannelitemComponent,
    UseritemComponent,
    MessageitemComponent,
    ChannelpanelComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
