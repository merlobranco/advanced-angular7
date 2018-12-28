import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { fadeIn } from '../animations';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  providers: [UserService],
  animations: [fadeIn]
})
export class KeepersComponent implements OnInit {
  public title: string;
  public keepers: User[];
  public url: string;
  public message: string;

  constructor(
    private _userService: UserService
  ) {
    this.title = 'Keepers';
    this.url = GLOBAL.url;
    this.message = '';
  }

  ngOnInit() {
    this.getKeepers();
  }

  getKeepers() {
    this._userService.getKeepers().subscribe(
      response => {
        if (response.users) {
          this.keepers = response.users;
        } else {
          this.keepers = [];
          this.message = '';
        }
      },
      error => {
        this.message = error.error.message;
        console.log(<any>error);
      }
    );
  }
}
