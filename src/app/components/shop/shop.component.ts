import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fadeIn } from '../animations';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  animations: [
    trigger('mark', [
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', [
        animate('300ms linear')
      ]),
      transition('active => inactive', [
        animate('300ms linear')
      ]),
    ]),
    fadeIn
  ]
})

export class ShopComponent implements OnInit {
  public title;
  @Input()
  public parkName: string;
  public myPark;
  public status;

  constructor() {
    this.title = 'This is the shop';
    this.status = 'inactive';
  }

  ngOnInit() {
    $('#textjq').hide();
    $('#buttonjq').click(function() {
      $('#textjq').slideToggle();
    });
    $('#box').dotdotdot();
  }

  showName() {
    console.log(this.parkName);
  }

  seeParkData(event) {
    console.log(event);
    this.myPark = event;
  }

  richTextEditor(event) {
    console.log(event.editor.contentDocument.body.outerHTML);
    // console.log(event.editor.contentDocument.body.outerText);
  }

  changeStatus(status) {
    if (status === 'inactive') {
      this.status = 'active';
    } else {
        this.status = 'inactive';
      }
  }
}
