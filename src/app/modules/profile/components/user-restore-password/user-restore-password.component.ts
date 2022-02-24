import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserApiService } from '../../services/user-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sfs-user-restore-password',
  templateUrl: './user-restore-password.component.html',
  styleUrls: ['./user-restore-password.component.scss']
})
export class UserRestorePasswordComponent implements OnInit {

  public restorePasswordForm: FormGroup;
  private subs: Subscription[] = []
  constructor(
    public fb: FormBuilder,
    private api: UserApiService
  ) {
    this.restorePasswordForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
  }

  sendFormData(form: any) {
    console.log('send form data', form);
    const sub = this.api.registration(form.value);
    // this.subs.push(sub);
  }

  ngOnDestroy() {
    if(this.subs.length > 0) {
      this.subs.forEach((s: Subscription) => {
        s.unsubscribe();
      })
    }
  }
}
