import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [UserService, UploadService]
})
export class AccountComponent implements OnInit {
  public title: string;
  public user: User;
  public oldEmail: string;
  public token;
  public message: string;
  public filesToUpload: Array<File>;
  public url: string;
  public avatarFile: string;

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _uploadService: UploadService
  ) {
    this.title = 'Account';
    this.user = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.oldEmail = this.user.email;
    this.message = '';
    this.url = GLOBAL.url;
    this.avatarFile = 'Uplodad your avatar';
  }

  ngOnInit() {
    console.log('account.component loaded !!!');
  }

  onSubmit() {
    this._userService.update(this.user).subscribe(
      response => {
        if (response.user && response.user._id) {
          response.user.password = '';
          localStorage.setItem('identity', JSON.stringify(response.user));

          // Upload image
          if (this.filesToUpload && this.filesToUpload.length > 0) {
            this._uploadService.makeFileRequest(this.url + '/upload-image/' + this.user._id, [], this.filesToUpload, this.token, 'image')
            .then((result: any) => {
              this.user.image = result.image;
              localStorage.setItem('identity', JSON.stringify(response.user));
            });
          }

          if (this.oldEmail !== response.user.email) {
            this.logout();
          } else {
            this.user = response.user;
            this.message = 'updated';
          }
        } else {
          this.message = response.message;
        }
      },
      error => {
        this.message = error.error.message;
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
    if (this.filesToUpload.length > 0 && this.filesToUpload[0].name) {
      this.avatarFile = this.filesToUpload[0].name;
    } else {
      this.avatarFile = 'Uplodad your avatar';
    }
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }

}
