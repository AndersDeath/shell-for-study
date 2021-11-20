import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public opened = false;

  public toggle() {
    this.opened = !this.opened;
  }

  public open() {
    this.opened = true;
  }

  public close() {
    this.opened = false;
  }

}
