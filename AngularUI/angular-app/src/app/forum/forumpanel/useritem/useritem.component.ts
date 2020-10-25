import { Component, OnInit, Input } from '@angular/core';
import User from 'src/model/User';

@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.scss']
})
export class UseritemComponent implements OnInit {

  @Input() user : User;
  
  constructor() { }

  ngOnInit(): void {
  }

}
