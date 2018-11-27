import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent {
  @Input()
  public name: string;
  @Input('totalArea')
  public area: number;
  public vegetation: string;
  public open: boolean;

  @Output()
  public sendMeData = new EventEmitter();

  constructor() {
    this.name = 'Horses Natural Park';
    this.area = 450;
    this.vegetation = 'Dense';
    this.open = false;
  }

  emitMyEvent() {
    this.sendMeData.emit({
      'name': this.name,
      'area': this.area,
      'vegetation': this.vegetation,
      'open': this.open
    });
  }
}
