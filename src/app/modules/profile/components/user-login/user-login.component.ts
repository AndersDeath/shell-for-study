import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'sfs-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private api: UserApiService
    ) {
    this.loginForm = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  sendFormData(form: any) {
    console.log('send form data', form);
  }

}
