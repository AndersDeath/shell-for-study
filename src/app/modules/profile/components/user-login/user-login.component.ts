import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from '../../../../services/user-api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'sfs-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  private subs: Subscription[] = []
  constructor(
    public fb: FormBuilder,
    private api: UserApiService,
    private router: Router
    ) {
    this.loginForm = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  sendFormData(form: FormGroup) {
    console.log('send form data', form.value);
    const sub = this.api.login(form.value);
    this.router.navigate(['dashboard']);
    localStorage.setItem('isLogin', 'true');
    // this.subs.push(sub);
  }

  ngOnDestroy() {
    if(this.subs.length > 0) {
      this.subs.forEach((s: Subscription) => {
        s.unsubscribe();
      })
    }
  }

}
