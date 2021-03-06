import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeDictionaryComponent } from './components/free-dictionary/free-dictionary.component';
import { SharedModule } from '../shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FreeDictionaryService } from './services/free-dictionary.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FreeDictionaryComponent
  ],
  providers: [
    FreeDictionaryService
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    FreeDictionaryComponent
  ]
})
export class FreeDictionaryModule { }
