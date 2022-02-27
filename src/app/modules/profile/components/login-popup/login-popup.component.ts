import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sfs-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Login Popup');
  }

}
