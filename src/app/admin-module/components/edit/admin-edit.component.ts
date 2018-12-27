import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { Animal } from '../../../models/animal';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  providers: [AnimalService, UserService, UploadService]
})
export class AdminEditComponent implements OnInit {
  public title: string;
  public animal: Animal;
  public identity;
  public token;
  public message: string;
  public filesToUpload: Array<File>;
  public url: string;
  public animalFile: string;

  constructor (
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ) {
    this.title = 'Edit Animal';
    this.animal = new Animal('', '', '', '', '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.message = '';
    this.url = GLOBAL.url;
    this.animalFile = 'Upload Animal image';
  }

  ngOnInit() {
    this.getAnimal();
  }

  onSubmit() {
    this._animalService.update(this.token, this.animal).subscribe(
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

          this.message = 'updated';
          this._router.navigate(['/animals/' + this.animal._id]);
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

  getAnimal() {
    this._activatedRoute.params.subscribe(
      params => {
        const id = params['id'];
        if (id) {
          this._animalService.getAnimal(id).subscribe(
            response => {
              if (response.animal) {
                this.animal = response.animal;
              } else {
                this._router.navigate(['/admin-panel/list']);
              }
            },
            error => {
              this._router.navigate(['/admin-panel/list']);
              console.log(<any>error);
            }
          );
        } else {
          this._router.navigate(['/admin-panel/list']);
        }
      }
    );
  }
}
