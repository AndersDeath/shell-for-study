import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../profile.model';
import { UserApiService } from '../../services/user-api.service';
import { UserProfileSerivce } from '../../services/user-profile.service';

@Component({
  selector: 'sfs-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  public user: User = new User({})
  private subs: Subscription[] = []
  constructor(
    private api: UserApiService,
    private userProfile: UserProfileSerivce
  ) { }

  ngOnInit(): void {
    const sub = this.userProfile.get.subscribe((data: User) => {
      console.log(data);
      this.user = data;
    });
    this.userProfile.set(this.api.getUserData());
    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    for (let i = 0; i < this.subs.length; i++) {
      this.subs[i].unsubscribe();
    }
  }

}
