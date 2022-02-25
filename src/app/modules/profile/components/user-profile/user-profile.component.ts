import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserApiService } from '../../services/user-api.service';
import { UserProfileSerivce } from '../../services/user-profile.service';

@Component({
  selector: 'sfs-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = []
  constructor(
    private api: UserApiService,
    private userProfile: UserProfileSerivce
  ) { }

  ngOnInit(): void {
    const sub = this.userProfile.get.subscribe((data: any) => {
      console.log(data)
    });
    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    for (let i = 0; i < this.subs.length; i++) {
      this.subs[i].unsubscribe();
    }
  }

}
