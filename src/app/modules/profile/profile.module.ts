import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserButtonComponent } from './components/user-button/user-button.component';
import { NgMaterialModule } from '../material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRestorePasswordComponent } from './components/user-restore-password/user-restore-password.component';

const components = [
  UserButtonComponent,
  UserProfileComponent,
  UserLoginComponent,
  UserRegistrationComponent,
  UserRestorePasswordComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    NgMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
