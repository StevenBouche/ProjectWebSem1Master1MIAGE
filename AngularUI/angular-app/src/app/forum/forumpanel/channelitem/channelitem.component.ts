import { Component, OnInit } from '@angular/core';
import Channel from 'src/model/Channel';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-channelitem',
  templateUrl: './channelitem.component.html',
  styleUrls: ['./channelitem.component.scss']
})

export class ChannelitemComponent implements OnInit {

  @Input() channel : Channel;
  @Output() onClickChannel = new EventEmitter<Channel>();

  constructor() { }

  ngOnInit(): void {

  }

  onClick(): void {
    this.onClickChannel.emit(this.channel);
  }
}
