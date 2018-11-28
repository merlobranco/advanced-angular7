import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html'
})
export class AnimalsComponent implements OnInit {
  title = 'Animals';

  ngOnInit() {
    console.log('animals.component loaded');
  }
}
