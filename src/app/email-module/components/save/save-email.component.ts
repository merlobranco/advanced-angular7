import { Component } from '@angular/core';

@Component({
  selector: 'app-save-email',
  templateUrl: './save-email.component.html'
})
export class SaveEmailComponent {
  title = 'Save Email';
  public contactEmail: string;

  saveEmail() {
    localStorage.setItem('contactEmail', this.contactEmail);
  }
}
