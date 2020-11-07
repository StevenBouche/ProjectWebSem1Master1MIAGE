
import { Component, Input, OnInit } from '@angular/core';
import MessageView from 'src/models/forum/MessageView';

@Component({
  selector: 'app-messageitem',
  templateUrl: './messageitem.component.html',
  styleUrls: ['./messageitem.component.scss']
})
export class MessageitemComponent implements OnInit {

  @Input() message: MessageView;

  constructor() { }

  ngOnInit(): void {
  }

}
