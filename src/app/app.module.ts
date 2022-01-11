import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { NgMaterialModule } from './modules/material.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarService } from './services/sidebar.service';
import { DictionaryPageComponent } from './pages/dictionary-page/dictionary-page.component';
import { GlossaryPageComponent } from './pages/glossary-page/glossary-page.component';
import { FreeDictionaryPageComponent } from './pages/free-dictionary-page/free-dictionary-page.component';
import { NgxUiLoaderModule,
  SPINNER,
  POSITION,
  PB_DIRECTION, } from "ngx-ui-loader";
import { TransitionWordsPageComponent } from './pages/transition-words-page/transition-words-page.component';
import { JsInterviewQuestionsPageComponent } from './pages/js-interview-questions-page/js-interview-questions-page.component';
import { ViewsModule } from './modules/views/views.module';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    SettingsComponent,
    DictionaryPageComponent,
    GlossaryPageComponent,
    JsInterviewQuestionsPageComponent,
    FreeDictionaryPageComponent,
    TransitionWordsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatNativeDateModule,
    HttpClientModule,
    NgMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    ViewsModule,
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
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
