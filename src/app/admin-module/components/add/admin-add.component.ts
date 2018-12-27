import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { Animal } from '../../../models/animal';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  providers: [AnimalService, UserService, UploadService]
})
export class AdminAddComponent implements OnInit {
  public title: string;
  public animal: Animal;
  public identity;
  public token;
  public message: string;
  public filesToUpload: Array<File>;
  public url: string;
  public animalFile: string;

  constructor (
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ) {
    this.title = 'Adding Animal';
    this.animal = new Animal('', '', '', '2018', '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.message = '';
    this.url = GLOBAL.url;
    this.animalFile = 'Upload Animal image';
  }

  ngOnInit() {
    console.log('admin-add.component loaded !!!');
  }

  onSubmit(formAdd) {
    this._animalService.create(this.token, this.animal).subscribe(
      response => {
        if (response.animal && response.animal._id) {

          // Upload animal image
          if (this.filesToUpload && this.filesToUpload.length > 0) {
            this._uploadService
            .makeFileRequest(this.url + '/animals/upload-image/' + response.animal._id, [], this.filesToUpload, this.token, 'image')
            .then((result: any) => {
              this.animal.image = result.image;
              this.animalFile = 'Upload Animal image';
            });
          }

          formAdd.reset();
          this.animal = new Animal('', '', '', '2018', '', '');
          this.message = 'created';
          this._router.navigate(['/admin-panel/list']);
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
      this.animalFile = this.filesToUpload[0].name;
    } else {
      this.animalFile = 'Upload Animal image';
    }
  }
}
