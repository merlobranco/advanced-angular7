import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/GLOBAL';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [UserService]
})
export class AccountComponent implements OnInit {
  public title: string;
  public user: User;
  public identity;
  public token;
  public message: string;

  constructor(
    private _userService: UserService
  ) {
    this.title = 'Account';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.message = '';
  }

  ngOnInit() {
    console.log('account.component loaded !!!');
  }

  onSubmit() {
  }

}
