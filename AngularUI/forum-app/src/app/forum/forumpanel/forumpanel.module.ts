import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumpanelComponent } from './forumpanel.component';
import { ChannelpanelComponent } from './channelpanel/channelpanel.component';
import { UseritemComponent } from './channelpanel/useritem/useritem.component';
import { MessageitemComponent } from './channelpanel/messageitem/messageitem.component';
import { UserpanelComponent } from '../userpanel/userpanel.component';
import { UserpanelModule } from '../userpanel/userpanel.module';


@NgModule({
  declarations: [
    ForumpanelComponent,
    ChannelpanelComponent,
    UseritemComponent,
    MessageitemComponent
  ],
  imports: [
    CommonModule,
    UserpanelModule
  ],
  exports: [
    ForumpanelComponent
  ]
})
export class ForumpanelModule { }
