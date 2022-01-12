import { Injectable } from '@angular/core';
import { iconMapObject } from '../../svg';
@Injectable()
export class IconService {

  constructor() { }

  get(name: string) {
    if(iconMapObject[name]) {
      return iconMapObject[name];
    }
    return '';
  }
}
