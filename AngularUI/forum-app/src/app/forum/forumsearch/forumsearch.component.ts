import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { create } from 'domain';
import User from 'src/models/forum/User';


class ActionForum {
  public name: string;
  public route: string;
  public routeBack: string;
}

@Component({
  selector: 'app-forumsearch',
  templateUrl: './forumsearch.component.html',
  styleUrls: ['./forumsearch.component.scss']
})
export class ForumsearchComponent implements OnInit {

  actions: Array<ActionForum>
  currentAction: ActionForum;
  component: string;
  componentSearch: string = "Search"
  componentCreate: string = "Create"
  @Input() user: User;
  
  constructor() { 
    this.actions = new Array();
    var actionSearch = new ActionForum();
    actionSearch.name = "Search";
    var actionCreate = new ActionForum();
    actionCreate.name = "Create";
    this.actions.push(actionSearch);
    this.actions.push(actionCreate);
    this.currentAction = actionSearch;
  }

  ngOnInit(): void {
    this.component = this.componentSearch;
  }

  getChannelClass(action: ActionForum) : string {
    if(this.currentAction.name === action.name) {
      return 'text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900 bg-gray-600 rounded';
    } else {
      return 'text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900';
    }
  }

  onActionSelect(action: ActionForum){
    this.currentAction = action;
    this.component = action.name;
  }

}
