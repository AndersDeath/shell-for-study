import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserApiService } from '../../../../services/user-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sfs-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit, OnDestroy {
  public registrationForm: FormGroup;
  private subs: Subscription[] = []
  constructor(
    public fb: FormBuilder,
    private api: UserApiService
    ) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
    }, { validators: this.checkPasswords })
  }

  ngOnInit(): void {
  }

  sendFormData(form: any) {
    console.log('send form data', form);
    const sub = this.api.registration(form.value);
    // this.subs.push(sub);
  }

  checkPasswords: ValidatorFn = (group: AbstractControl | any):  ValidationErrors | null => {
    if(group !== null) {
      let pass = group.get('password').value;
      let confirmPass = group.get('password2').value
      return pass === confirmPass ? null : { notSame: true }
    }
    return null
  }

  ngOnDestroy() {
    if(this.subs.length > 0) {
      this.subs.forEach((s: Subscription) => {
        s.unsubscribe();
      })
    }
  }

}
