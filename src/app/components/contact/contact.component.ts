import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  title = 'Contact';
  @Input()
  public contactEmail: string;

  ngOnInit() {
    console.log('contact.component loaded');
  }
  saveEmail() {
    localStorage.setItem('contactEmail', this.contactEmail);
    console.log(localStorage.getItem('contactEmail'));
  }
}
