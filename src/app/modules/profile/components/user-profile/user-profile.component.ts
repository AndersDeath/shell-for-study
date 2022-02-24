import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'sfs-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private api: UserApiService
  ) { }

  ngOnInit(): void {
  }

}
