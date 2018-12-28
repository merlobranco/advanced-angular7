import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

@Injectable({
  providedIn: 'root'
})

export class SearchPipeService implements PipeTransform {

  constructor() { }

  transform(items: any, term: any): any {
    if (term === undefined) {
      return items;
    }

    return items.filter(i => i.name.toLowerCase().includes(term.toLowerCase()));
  }
}
