import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserRegistrationModel } from 'sfs-data-model';
@Component({
  selector: 'sfs-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {

  @Input() set formData(data: UserRegistrationModel) {
    this.registrationForm.setValue({
      firstName: data.firstName,
      secondName: data.secondName,
      password: data.password,
      passwordConfirmation: data.passwordConfirmation,
      email: data.email,
      phone: data.phone
    })
  }
  @Output() formDataEmitter = new EventEmitter<UserRegistrationModel>();
  public registrationForm: FormGroup;

  constructor(
    public fb: FormBuilder
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      secondName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordConfirmation: ['', [Validators.required]],
    }, { validators: this.checkPasswords })
  }

  sendFormData(form: FormGroup) {
    this.formDataEmitter.emit({
      firstName: form.value.firstName,
      secondName: form.value.secondName,
      password: form.value.password,
      passwordConfirmation: form.value.passwordConfirmation,
      email: form.value.email,
      phone: form.value.phone,
    });
  }

  checkPasswords: ValidatorFn = (group: AbstractControl | any):  ValidationErrors | null => {
    if(group !== null) {
      let pass = group.get('password').value;
      let confirmPass = group.get('passwordConfirmation').value
      return pass === confirmPass ? null : { notSame: true }
    }
    return null
  }
}
