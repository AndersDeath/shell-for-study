import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export class UserLoginModel {
  public name: string = ''
  public password: string = ''
  constructor(name?: string, password?:string) {
    this.name = name || '';
    this.password = password || '';
  }
}

@Component({
  selector: 'sfs-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  @Input() set formData(data: any) {
    this.loginForm.setValue({
      name: data.name,
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
        name: [null, [Validators.required]],
        password: [null, [Validators.required]]
      })
  }

  sendFormData(form: FormGroup) {
    this.formDataEmitter.emit({
      name: form.value.name,
      password: form.value.password
    })
    this.router.navigate(['dashboard']);
    localStorage.setItem('isLogin', 'true');
  }

}
