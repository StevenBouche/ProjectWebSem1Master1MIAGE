import { NgModule } from '@angular/core';
import { ForumComponent } from './forum.component';
import { ForumRoutingModule } from './forum-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    ForumComponent
  ],
  imports: [
    ForumRoutingModule,
    AuthModule
  ]
})

export class ForumModule { }
