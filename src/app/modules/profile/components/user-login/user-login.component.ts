import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginModel } from 'sfs-data-model';

@Component({
  selector: 'sfs-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  @Input() set formData(data: any) {
    this.loginForm.setValue({
      email: data.email,
      password: data.password
    })
  }
  @Output() formDataEmitter = new EventEmitter<UserLoginModel>();

  public loginForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router
    ) {
      this.loginForm = this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]]
      })
  }

  sendFormData(form: FormGroup) {
    this.formDataEmitter.emit({
      email: form.value.email,
      password: form.value.password
    });
    this.router.navigate(['dashboard']);
    localStorage.setItem('isLogin', 'true');
  }

}
