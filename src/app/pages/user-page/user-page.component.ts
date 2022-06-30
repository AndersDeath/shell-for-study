import { selectProfile } from './../../state/auth.selectors';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'sfs-data-model';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'sfs-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {
  public title: string = "Demo User";
  public user = new User({});
  private sub: Subscription = new Subscription;
  constructor(
    public sidebar: SidebarService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.sub = this.store.select(selectProfile).subscribe((e: User) => {
      console.log(e);
      this.user = e;
    });
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

}
