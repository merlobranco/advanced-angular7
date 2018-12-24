import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/GLOBAL';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public title: String;
  public user: User;
  public token: String;
  public message: String;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
     this.title = 'Login';
     this.user = new User('', '', '', '', '', '', '');
     this.message = '';
  }

  ngOnInit() {
    console.log('login.component loaded !!!');
  }

  onSubmit(loginForm) {
    this._userService.login(this.user, true).subscribe(
      response => {
        if ((response.user && response.user._id) || response.token) {
          this.user = new User('', '', '', '', '', '', '');
          loginForm.reset();
          this.message = 'logged';

          if (response.token) {
            this.token = response.token;
            console.log('token: ' + this.token);
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

}
