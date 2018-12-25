import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public oldEmail: string;
  public token;
  public message: string;

  constructor(
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'Account';
    this.user = this._userService.getIdentity();
    this.oldEmail = this.user.email;
    this.message = '';
  }

  ngOnInit() {
    console.log('account.component loaded !!!');
  }

  onSubmit() {
    this._userService.update(this.user).subscribe(
      response => {
        if (response.user && response.user._id) {
          response.user.password = '';
          localStorage.setItem('identity', JSON.stringify(response.user));

          console.log(this.oldEmail);
          console.log(response.user.email);
          if (this.oldEmail !== response.user.email) {
            this.logout();
          } else {
            this.user = response.user;
            this.message = 'updated';
          }
        } else {
          this.message = response.message;
        }
      },
      error => {
        this.message = error.error.message;
        console.log(<any>error);
      }
    );
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }

}
