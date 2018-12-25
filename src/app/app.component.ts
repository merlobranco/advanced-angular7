import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  public title: string;
  public identity;

  constructor(
    private _userService: UserService
  ) {
    this.title  = 'NGZOO';
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
  }

  ngDoCheck() {
    // For refreshing properly the Login, Checking Nav bar area after a login action
    this.identity = this._userService.getIdentity();
  }
}
