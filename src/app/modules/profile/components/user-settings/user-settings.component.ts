import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
      value:'en'
    },
    {
      name: 'Russian',
      value:'ru'
    },
  ];
  public profileSettingsForm: FormGroup;
  public languageForm: FormGroup;
  constructor(
    public fb: FormBuilder
  ) {
    this.profileSettingsForm = this.fb.group({
      name: ['', [Validators.required]],
      status: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    this.languageForm = this.fb.group({
      select: []
    });
  }

  ngOnInit() {
    this.languageForm.valueChanges.subscribe((e) => {
      console.log(e.select);
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
