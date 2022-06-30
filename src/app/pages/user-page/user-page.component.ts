import { selectProfile } from './../../state/auth.selectors';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { User } from 'sfs-data-model';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'sfs-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  public title: string = "Profile";
  public user$: Observable<User> = new Observable();

  constructor(
    public sidebar: SidebarService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.user$ = this.store.select(selectProfile)
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }
}
