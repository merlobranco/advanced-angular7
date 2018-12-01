import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html'
})
export class AdminListComponent {
  title = 'Listing';
  // public numbers = [0, 1, 2, 3, 4, 5];
  public numbers = new Array(25);
}
