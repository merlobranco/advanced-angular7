import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  animations: [fadeIn]
})
export class AnimalsComponent implements OnInit {
  title = 'Animals';

  ngOnInit() {
    console.log('animals.component loaded');
  }
}
