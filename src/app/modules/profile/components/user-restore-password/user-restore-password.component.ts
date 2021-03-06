import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';
import { UserRestorPasswordModel } from 'sfs-data-model';

@Component({
  selector: 'sfs-user-restore-password',
  templateUrl: './user-restore-password.component.html',
  styleUrls: ['./user-restore-password.component.scss']
})
export class UserRestorePasswordComponent {

  @Input() set formData(data: any) {
    this.restorePasswordForm.setValue({
      email: data.email
    })
  }
  @Output() formDataEmitter = new EventEmitter<UserRestorPasswordModel>();

  public restorePasswordForm: UntypedFormGroup;
  constructor(
    public fb: UntypedFormBuilder
      ) {
    this.restorePasswordForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    })
  }

  sendFormData(form: any) {
    console.log('send form data', form);
    this.formDataEmitter.emit({
      email: form.value.email
    });
  }
}
