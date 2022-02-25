import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class UserProfileSerivce {
  public get: BehaviorSubject<{
    name: string
  }> = new BehaviorSubject({
    name: ""
  });
  constructor() {}

  set(data: any) {
    this.get.next(data);
  }
}
