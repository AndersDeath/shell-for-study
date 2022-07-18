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
    let email = data.email || '';
    let remember = data.rememeber || false;
    if(localStorage.getItem('saved_email') && email === '') {
      email = localStorage.getItem('saved_email');
      remember = true;
    }
    this.loginForm.setValue({
      email: email,
      password: data.password,
      remember: remember
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
        password: [null, [Validators.required]],
        remember: [false, []],
      })
  }

  sendFormData(form: FormGroup) {
    this.formDataEmitter.emit({
      email: form.value.email,
      password: form.value.password,
      remember: form.value.remember
    });
    console.log(form.value.remember);
    if(form.value.remember === true) {
      localStorage.setItem('saved_email', form.value.email);
    } else {
      localStorage.removeItem('saved_email');
    }
    // this.router.navigate(['dashboard']);
    // localStorage.setItem('isLogin', 'true');
  }

}
