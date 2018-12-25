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

  public title: string;
  public user: User;
  public token: string;
  public message: string;

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
    // Getting the user data
    this._userService.login(this.user).subscribe(
      response => {
        if (response.user && response.user._id) {
          response.user.password = '';
          localStorage.setItem('identity', JSON.stringify(response.user));
          
          // Getting the token
          this._userService.login(this.user, true).subscribe(
            response => {
              if (response.token.length > 0) {
                this.user = new User('', '', '', '', '', '', '');
                loginForm.reset();
                this.message = 'logged';
                this.token = response.token;
                localStorage.setItem('token', this.token);

                // Redirecting to the home page
                this._router.navigate(['/']);
              } else {
                this.message = response.message;
              }
            },
            error => {
              this.message = error.error.message;
              console.log(<any>error);
            }
          );
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
