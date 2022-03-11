import { Injectable } from "@angular/core";
import { User } from '../modules/profile/profile.model';
import { UserApiService } from "./user-api.service";

@Injectable()
export class UserProfileSerivce {
  public data = new User({})
  constructor(api: UserApiService) {
    this.set(api.getUserData());
  }

  get() {
    return this.data
  }
  set(data: User) {
    this.data = data;
  }
}
