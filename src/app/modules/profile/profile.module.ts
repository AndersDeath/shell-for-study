import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserButtonComponent } from './components/user-button/user-button.component';
import { NgMaterialModule } from '../material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';



@NgModule({
  declarations: [UserButtonComponent, UserProfileComponent],
  exports: [UserButtonComponent, UserProfileComponent],
  imports: [
    CommonModule,
    NgMaterialModule,
    AppRoutingModule
  ]
})
export class ProfileModule { }
