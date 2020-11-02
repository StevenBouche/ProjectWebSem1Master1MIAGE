
import { Component, Input, OnInit } from '@angular/core';
import Message from 'src/models/forum/Message';

@Component({
  selector: 'app-messageitem',
  templateUrl: './messageitem.component.html',
  styleUrls: ['./messageitem.component.scss']
})
export class MessageitemComponent implements OnInit {

  @Input() message: Message;
  
  constructor() { }

  ngOnInit(): void {
  }

}
