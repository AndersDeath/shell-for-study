import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DictionaryComponent } from './modules/dictionary/dictionary.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarService } from './services/sidebar/sidebar.service';
import { DictionaryPageComponent } from './pages/dictionary-page/dictionary-page.component';
import { FreeDictionaryPageComponent } from './pages/free-dictionary-page/free-dictionary-page.component';
import { NgxUiLoaderModule,
  SPINNER,
  POSITION,
  PB_DIRECTION, } from "ngx-ui-loader";
import { ViewsModule } from './modules/views/views.module';
import { FreeDictionaryModule } from './modules/free-dictionary/free-dictionary.module';
import { FreeDictionaryPopupComponent } from './popups/free-dictionary-popup/free-dictionary-popup.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { IconModule } from './modules/icon/icon.module';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { SpanishDictionaryModule } from './modules/spanish-dictionary/spanish-dictionary.module';
import { SpanishDictionaryPageComponent } from './pages/spanish-dictionary-page/spanish-dictionary-page.component';
import { ProfileModule } from './modules/profile/profile.module';
import { UserAuthPageComponent } from './pages/user-auth-page/user-auth-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from './auth.guard';
import { SharedModule } from './modules/shared.module';
import { PagesModule } from './pages/pages.module';
import { BibliographyPageComponent } from './pages/bibliography-page/bibliography-page.component';
@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    BibliographyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatNativeDateModule,
    HttpClientModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    ReactiveFormsModule,
    FreeDictionaryModule,
    SpanishDictionaryModule,
    ViewsModule,
    IconModule,
    SpanishDictionaryModule,
    ProfileModule,
    PagesModule,
    NgxUiLoaderModule.forRoot(
      {
        bgsColor: "white",
        bgsPosition: POSITION.bottomCenter,
        bgsSize: 40,
        bgsType: SPINNER.ballSpin, // background spinner type
        fgsType: SPINNER.chasingDots, // foreground spinner type
        pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
        pbThickness: 5, // progress bar thickness
      }
    ),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWithDelay:3000'
    })
  ],
  providers: [SidebarService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
