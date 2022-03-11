import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface UserProfileSettingsModel {
  name: string;
  password: string;
}
@Component({
  selector: 'sfs-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {
  @Input() set formData(data: any) {
    this.loginForm.setValue({
      name: data.name,
      password: data.password
    })
  }
  @Output() formDataEmitter = new EventEmitter<UserProfileSettingsModel>();

  public loginForm: FormGroup;
  constructor(
    public fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  sendFormData(form: FormGroup) {
    this.formDataEmitter.emit({
      name: form.value.name,
      password: form.value.password
    });
  }

}
