import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public title: String;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
     this.title = 'Sign in';
  }

  ngOnInit() {
    console.log('register.component loaded !!!');
  }

}
