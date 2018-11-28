import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'advanced-angular7';
  public contactEmail: string;

  ngOnInit() {
    this.contactEmail = localStorage.getItem('contactEmail');
  }

  ngDoCheck() {
    this.contactEmail = localStorage.getItem('contactEmail');
  }

  deleteEmail() {
    localStorage.removeItem('contactEmail');
  }
}
