import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal';
import { fadeIn } from '../animations';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  providers: [AnimalService],
  animations: [fadeIn]
})
export class AnimalsComponent implements OnInit {
  public title: string;
  public animals: Animal[];
  public url: string;
  public message: string;

  constructor(
    private _animalService: AnimalService
  ) {
    this.title = 'Animals';
    this.url = GLOBAL.url;
    this.message = '';
  }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals() {
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
}
