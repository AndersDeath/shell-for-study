import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginPopupComponent } from '../login-popup/login-popup.component';

@Component({
  selector: 'sfs-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.scss']
})
export class UserButtonComponent implements OnInit {
  show: boolean = true;
  constructor(
    public dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  openLogin(event: any) {
    const dialogRef = this.dialog.open(LoginPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logout(event: any) {
    localStorage.removeItem('auth');
    this.router.navigate(['']);
  }

}
