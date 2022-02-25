import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User, UserMockData } from '../profile.model';

@Injectable()
export class UserProfileSerivce {
  public get: BehaviorSubject<User> = new BehaviorSubject(new User(UserMockData));
  constructor() {}

  set(data: User) {
    this.get.next(data);
  }
}
