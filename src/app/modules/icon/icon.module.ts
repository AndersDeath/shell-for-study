import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { IconService } from './services/icon/icon.service';



@NgModule({
  declarations: [
    IconComponent
  ],
  providers: [
    IconService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconComponent
  ]
})
export class IconModule { }
