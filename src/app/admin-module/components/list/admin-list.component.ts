import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { Animal } from '../../../models/animal';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  providers: [AnimalService]
})
export class AdminListComponent implements OnInit {
  public title: string;
  public animals: Animal[];
  public message: string;

  constructor (
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService
  ) {
    this.title = 'Animals';
    this.message = '';
  }

  ngOnInit() {
    this._animalService.getAnimals().subscribe(
      response => {
        if (response.animals) {
          this.animals = response.animals;
        } else {
          this.animals = new Animal[];
        }
      },
      error => {
        this.message = error.error.message;
        console.log(<any>error);
      }
    );
  }
}
