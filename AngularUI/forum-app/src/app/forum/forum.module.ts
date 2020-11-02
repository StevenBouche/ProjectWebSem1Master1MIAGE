import { NgModule } from '@angular/core';
import { ForumComponent } from './forum.component';
import { ForumRoutingModule } from './forum-routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from 'src/services/request/AuthHttpInterceptor';
import { MatProgressBarModule } from 'node_modules/@angular/material/progress-bar';
import { CommonModule } from "@angular/common";
import { ForumpanelComponent } from './forumpanel/forumpanel.component';
import { ChannelpanelComponent } from './forumpanel/channelpanel/channelpanel.component';
import { MessageitemComponent } from './forumpanel/channelpanel/messageitem/messageitem.component';
import { UseritemComponent } from './forumpanel/channelpanel/useritem/useritem.component';

@NgModule({
  declarations: [
    ForumComponent,
    ForumpanelComponent,
    ChannelpanelComponent,
    MessageitemComponent,
    UseritemComponent
  ],
  imports: [
    ForumRoutingModule,
    AuthModule,
    HttpClientModule,
    MatProgressBarModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ]
})

export class ForumModule { }
