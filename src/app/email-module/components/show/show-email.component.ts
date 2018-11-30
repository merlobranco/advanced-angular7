import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-show-email',
  templateUrl: './show-email.component.html'
})
export class ShowEmailComponent implements OnInit, DoCheck {
  title = 'Show Email';
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
