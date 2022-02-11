import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpanishDictionaryComponent } from './component/spanish-dictionary/spanish-dictionary.component';
import { NgMaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SpanishDictionaryComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SpanishDictionaryComponent
  ]
})
export class SpanishDictionaryModule { }
