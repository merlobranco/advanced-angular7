import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  public title: string;
  public url: string;
  public identity;

  constructor(
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'NGZOO';
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
  }

  ngDoCheck() {
    // For refreshing properly the Login, Check in Nav bar area after a login action
    this.identity = this._userService.getIdentity();
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['/']);
  }
}
