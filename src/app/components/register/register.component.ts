import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/GLOBAL';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public title: String;
  public user: User;
  public message: String;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
      this.title = 'Sign in';
      this.user = new User('', '', '', '', '', 'ROLE_USER', '');
      this.message = '';
  }

  ngOnInit() {
    console.log('register.component loaded !!!');
  }

  onSubmit(registerForm) {
    this._userService.create(this.user).subscribe(
      response => {
        if (response.user && response.user._id) {
          this.user = new User('', '', '', '', '', 'ROLE_USER', '');
          registerForm.reset();
          this.message = 'created';
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
