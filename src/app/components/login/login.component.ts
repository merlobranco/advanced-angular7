import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/GLOBAL';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title: String;
  public user: User;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
     this.title = 'Login';
     this.user = new User('', '', '', '', '', '', '');
  }

  ngOnInit() {
    console.log('login.component loaded !!!');
  }

  onSubmit(registerForm) {
    console.log(this.user);
  }

}
