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
import { UserApiService } from './services/user-api.service';
import { HttpClientModule } from '@angular/common/http';

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
  providers: [
    UserApiService
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProfileModule { }
