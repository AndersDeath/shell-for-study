import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public getSelectionText() {
    let text = "";
    if ((window as any).getSelection) {
        text = (window as any).getSelection().toString();

    }
    return text;
  }
}
