import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarService } from './services/sidebar/sidebar.service';
import { NgxUiLoaderModule,
  SPINNER,
  POSITION,
  PB_DIRECTION, } from "ngx-ui-loader";
import { ViewsModule } from './modules/views/views.module';
import { FreeDictionaryModule } from './modules/free-dictionary/free-dictionary.module';
import { IconModule } from './modules/icon/icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { SpanishDictionaryModule } from './modules/spanish-dictionary/spanish-dictionary.module';
import { ProfileModule } from './modules/profile/profile.module';
import { AuthGuard } from './auth.guard';
import { SharedModule } from './modules/shared.module';
import { PagesModule } from './pages/pages.module';
import { BibliographyPageComponent } from './pages/bibliography-page/bibliography-page.component';
import { StoreModule } from '@ngrx/store';
import { authTokensReducer } from './state/auth/auth.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from './state/auth/auth.effects';
import { CheckAuthEffect } from './state/auth/check-auth.effects';
import { AuthInterceptor } from './auth.interceptor';
import { RefreshTokensEffect } from './state/auth/refresh-tokens.effects';
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
    }),
    StoreModule.forRoot({auth: authTokensReducer}),
    EffectsModule.forRoot([LoginEffect, CheckAuthEffect,RefreshTokensEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [
    SidebarService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
