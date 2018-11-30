import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-email',
  templateUrl: './main-email.component.html'
})
export class MainEmailComponent implements OnInit {
  title = 'Email Module';

  ngOnInit() {
    console.log('Email Module Main Component loaded');
  }
}
