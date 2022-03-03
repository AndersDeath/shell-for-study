import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from '../profile.model';

@Injectable()
export class UserProfileSerivce {
  public get: Subject<User> = new Subject();
  constructor() {  }

  set(data: User) {
    this.get.next(data);
  }
}
