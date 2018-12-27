import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  providers: [AnimalService]
})
export class AnimalDetailComponent implements OnInit {
  public title: string;
  public animal: Animal;
  public url: string;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this._activateRoute.params.subscribe(
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
