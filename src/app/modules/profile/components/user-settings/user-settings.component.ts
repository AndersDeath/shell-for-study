import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface UserProfileSettingsModel {
  name: string;
  status: string;
  description: string;
}
@Component({
  selector: 'sfs-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {
  @Input() set user(data: any) {
    console.log(data);
    this.profileSettingsForm.setValue({
      name: data.name,
      status: data.status,
      description: data.description
    })
  }
  @Output() formDataEmitter = new EventEmitter<UserProfileSettingsModel>();

  public profileSettingsForm: FormGroup;
  constructor(
    public fb: FormBuilder
  ) {
    this.profileSettingsForm = this.fb.group({
      name: ['', [Validators.required]],
      status: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  sendFormData(form: FormGroup) {
    this.formDataEmitter.emit({
      name: form.value.name,
      status: form.value.status,
      description: form.value.description
    });
  }

}
