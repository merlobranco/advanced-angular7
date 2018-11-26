import { Component } from '@angular/core';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent {
  public name: string;
  public area: number;
  public vegetation: string;
  public open: boolean;

  constructor() {
    this.name = 'Horses Natural Park';
    this.area = 450;
    this.vegetation = 'Dense';
    this.open = false;
  }
}
