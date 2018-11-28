import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html'
})
export class ParksComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
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

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges executed');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit executed');
  }

  ngDoCheck() {
    console.log('ngDoCheck executed');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy executed');
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
