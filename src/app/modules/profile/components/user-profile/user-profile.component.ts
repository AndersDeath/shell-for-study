import { Component, OnInit, Input } from '@angular/core';
import { User } from 'sfs-data-model';

@Component({
  selector: 'sfs-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() public user: User | null = new User({})
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
