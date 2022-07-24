import { saveProfile } from './../../state/auth.actions';
import { selectProfile } from './../../state/auth.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { User } from 'sfs-data-model';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'sfs-user-settings-page',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.scss']
})
export class UserSettingsPageComponent implements OnInit {
  public title: string = "Demo User";
  public user$: any;

  constructor(
    public sidebar: SidebarService,
    private store: Store
    ) { }

  ngOnInit(): void {
    // this.user = this.profile.get();
    // this.user = new User({name:'sd'})
    this.user$ = this.store.select(selectProfile)

  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  formDataEmitter(data: any) {
    console.log(data);
    this.store.dispatch(saveProfile(data));
    // this.profile.set({
    //   ...this.user,
    //   ...data
    // });
  }
}
