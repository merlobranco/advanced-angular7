import { Component, Input, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public title;
  @Input()
  public parkName: string;
  public myPark;

  constructor() {
    this.title = 'This is the shop';
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
}
