import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'sfs-user-restore-password',
  templateUrl: './user-restore-password.component.html',
  styleUrls: ['./user-restore-password.component.scss']
})
export class UserRestorePasswordComponent implements OnInit {

  public restorePasswordForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.restorePasswordForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
  }

  sendFormData(form: any) {
    console.log('send form data', form);
  }

}
