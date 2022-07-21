import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectProfile } from './../../../../state/auth.selectors';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginPopupComponent } from '../login-popup/login-popup.component';

@Component({
  selector: 'sfs-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.scss']
})
export class UserButtonComponent implements OnInit, OnDestroy {
  show: boolean = true;
  private subscriptions: Subscription[] = [];
  public profile: any;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private store: Store
    ) { }

  ngOnInit(): void {
    const sub = this.store.select(selectProfile).subscribe((e) => {
      this.profile = {...e};
    });
    this.subscriptions.push(sub);
  }

  openLogin(event: any) {
    const dialogRef = this.dialog.open(LoginPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logout(event: any) {
    localStorage.removeItem('tokens');
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((e: Subscription) => {
      e.unsubscribe();
    })
  }

}
