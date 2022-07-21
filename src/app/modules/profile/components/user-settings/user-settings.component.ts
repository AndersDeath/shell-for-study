import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EN, RU } from 'sfs-data-model';
import { I18nService } from 'src/app/services/i18n/i18n.service';

interface UserProfileSettingsModel {
  firstName: string;
  lastName: string;
  status: string;
  description: string;
}
@Component({
  selector: 'sfs-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit{
  @Input() set user(data: any) {

    console.log('asdsa',data);
    this.backToProfileLink = this.backToProfileLink + data.login
    this.profileSettingsForm.setValue({
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      description: data.description || '',
      status: data.status || ''
    });
  }
  @Output() formDataEmitter = new EventEmitter<UserProfileSettingsModel>();

  public backToProfileLink = '/u/';
  public languages = [
    {
      name: 'English',
      value: EN
    },
    {
      name: 'Russian',
      value: RU
    },
  ];
  public profileSettingsForm: UntypedFormGroup;
  public languageForm: UntypedFormGroup;
  constructor(
    public fb: UntypedFormBuilder,
    public i18n: I18nService
  ) {
    this.profileSettingsForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      status: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    this.languageForm = this.fb.group({
      select: [this.i18n.get()]
    });
  }

  ngOnInit() {
    this.languageForm.valueChanges.subscribe((e) => {
      console.log(e.select);
      this.i18n.set(e.select)
    })
  }

  sendFormData(form: UntypedFormGroup) {
    this.formDataEmitter.emit({
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      status: form.value.status,
      description: form.value.description
    });
  }

}
