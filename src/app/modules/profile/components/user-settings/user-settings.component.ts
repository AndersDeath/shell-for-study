import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EN, RU } from 'sfs-data-model';
import { I18nService } from 'src/app/services/i18n/i18n.service';

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
export class UserSettingsComponent implements OnInit{
  @Input() set user(data: any) {
    this.profileSettingsForm.setValue({
      name: data.name,
      status: data.status,
      description: data.description
    })
  }
  @Output() formDataEmitter = new EventEmitter<UserProfileSettingsModel>();

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
      name: ['', [Validators.required]],
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
      name: form.value.name,
      status: form.value.status,
      description: form.value.description
    });
  }

}
