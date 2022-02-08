import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sfs-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.scss']
})
export class UserButtonComponent implements OnInit {
  show: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
