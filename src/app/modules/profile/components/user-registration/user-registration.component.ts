import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'sfs-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  public registrationForm: FormGroup;
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
  }

  checkPasswords: ValidatorFn = (group: AbstractControl | any):  ValidationErrors | null => {
    if(group !== null) {
      let pass = group.get('password').value;
      let confirmPass = group.get('password2').value
      return pass === confirmPass ? null : { notSame: true }
    }
    return null
  }
}
