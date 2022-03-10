import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { DictionaryComponent } from './dictionary.component';
import { ProfileModule } from '../profile/profile.module';
import { ViewsModule } from '../views/views.module';


const components = [
  DictionaryComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    SharedModule,
    ProfileModule,
    ViewsModule
  ]
})
export class DictionaryModule { }
