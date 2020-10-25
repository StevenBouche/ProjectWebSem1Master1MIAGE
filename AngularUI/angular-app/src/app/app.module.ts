import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { ForumitemComponent } from './forum/forumitem/forumitem.component';
import { ForumpanelComponent } from './forum/forumpanel/forumpanel.component';
import { ChannelitemComponent } from './forum/forumpanel/channelitem/channelitem.component';
import { UseritemComponent } from './forum/forumpanel/useritem/useritem.component';
import { MessageitemComponent } from './forum/forumpanel/messageitem/messageitem.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    ForumitemComponent,
    ForumpanelComponent,
    ChannelitemComponent,
    UseritemComponent,
    MessageitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
