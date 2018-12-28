import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { Animal } from '../../../models/animal';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  providers: [AnimalService, UserService]
})
export class AdminListComponent implements OnInit {
  public title: string;
  public animals: Animal[];
  public token;
  public message: string;

  constructor (
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService
  ) {
    this.title = 'Animals';
    this.message = '';
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this._animalService.getAnimals().subscribe(
      response => {
        if (response.animals) {
          this.animals = response.animals;
        } else {
          this.animals = [];
          this.message = '';
        }
      },
      error => {
        this.message = error.error.message;
        console.log(<any>error);
      }
    );
  }

  delete(animal: Animal) {
    // Required for solving issues with the modal
    $('#deleteModal-' + animal._id).modal('hide');
    this._animalService.delete(this.token, animal._id).subscribe(
      response => {
        if (animal.image) {
          this._animalService.deleteImage(this.token, animal.image).subscribe(
            error => {
              this.message = error.error.message;
              console.log(<any>error);
            }
          );
        }
        this.animals = this.animals.filter(a => a !== animal);
        if (this.message !== '') {
          this.message = animal.name + ' has been deleted successfully!!!';
        }
      },
      error => {
        this.message = error.error.message;
        console.log(<any>error);
      }
    );
  }
}
