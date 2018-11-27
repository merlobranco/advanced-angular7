import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  public title;
  @Input()
  public parkName: string;
  public myPark;

  constructor() {
    this.title = 'This is the shop';
  }

  showName() {
    console.log(this.parkName);
  }

  seeParkData(event) {
    console.log(event);
    this.myPark = event;
  }
}
