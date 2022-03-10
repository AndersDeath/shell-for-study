import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../modules/shared.module';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { FreeDictionaryPageComponent } from './free-dictionary-page/free-dictionary-page.component';
import { FreeDictionaryPopupComponent } from '../popups/free-dictionary-popup/free-dictionary-popup.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SpanishDictionaryPageComponent } from './spanish-dictionary-page/spanish-dictionary-page.component';
import { UserAuthPageComponent } from './user-auth-page/user-auth-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileModule } from '../modules/profile/profile.module';
import { RouterModule } from '@angular/router';
import { IconModule } from '../modules/icon/icon.module';
import { FreeDictionaryModule } from '../modules/free-dictionary/free-dictionary.module';
import { SpanishDictionaryModule } from '../modules/spanish-dictionary/spanish-dictionary.module';
import { ViewsModule } from '../modules/views/views.module';
import { DictionaryModule } from '../modules/dictionary/dictionary.module';
import { UserSettingsPageComponent } from './user-settings-page/user-settings-page.component';

const pages = [
  DictionaryPageComponent,
  FreeDictionaryPageComponent,
  FreeDictionaryPopupComponent,
  DashboardPageComponent,
  UserPageComponent,
  SpanishDictionaryPageComponent,
  UserAuthPageComponent,
  MainPageComponent
]

@NgModule({
  declarations: [...pages, UserSettingsPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfileModule,
    IconModule,
    RouterModule,
    FreeDictionaryModule,
    SpanishDictionaryModule,
    ViewsModule,
    DictionaryModule
  ],
})
export class PagesModule { }
