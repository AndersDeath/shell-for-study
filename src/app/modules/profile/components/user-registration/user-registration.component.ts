import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserApiService } from '../../../../services/user-api/user-api.service';
import { UserRegistrationModel } from 'sfs-data-model';
@Component({
  selector: 'sfs-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {

  @Input() set formData(data: UserRegistrationModel) {
    this.registrationForm.setValue({
      name: data.name,
      password: data.password,
      email: data.email,
    })
  }
  @Output() formDataEmitter = new EventEmitter<UserRegistrationModel>();
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

  sendFormData(form: FormGroup) {
    this.formDataEmitter.emit({
      name: form.value.name,
      password: form.value.password,
      password2: form.value.password2,
      email: form.value.email
    });
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
