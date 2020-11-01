import { NgModule } from '@angular/core';
import { ForumComponent } from './forum.component';
import { ForumRoutingModule } from './forum-routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from 'src/services/request/AuthHttpInterceptor';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    ForumComponent
  ],
  imports: [
    ForumRoutingModule,
    AuthModule,
    HttpClientModule,
    MatProgressBarModule
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
