import  Message  from 'src/model/Message';
import { Component, Input, OnInit } from '@angular/core';

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
