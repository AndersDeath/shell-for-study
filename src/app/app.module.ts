import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { NgMaterialModule } from './material.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarService } from './services/sidebar.service';
import { TabsViewComponent } from './components/tabs-view/tabs-view.component';
import { CardsViewComponent } from './components/cards-view/cards-view.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { DictionaryPageComponent } from './pages/dictionary-page/dictionary-page.component';
import { GlossaryPageComponent } from './pages/glossary-page/glossary-page.component';
import { MarkdownModule } from 'ngx-markdown';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { FreeDictionaryPageComponent } from './pages/free-dictionary-page/free-dictionary-page.component';
import { FakeFlashcardsViewComponent } from './components/fake-flashcards-view/fake-flashcards-view.component';
import { SpellingTestViewComponent } from './components/spelling-test-view/spelling-test-view.component';
import { NgxUiLoaderModule,
  SPINNER,
  POSITION,
  PB_DIRECTION, } from "ngx-ui-loader";
import { FlashcardsViewComponent } from './components/flashcards-view/flashcards-view.component';
import { TransitionWordsPageComponent } from './pages/transition-words-page/transition-words-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    SettingsComponent,
    TabsViewComponent,
    CardsViewComponent,
    TableViewComponent,
    DictionaryPageComponent,
    GlossaryPageComponent,
    ArticleViewComponent,
    FreeDictionaryPageComponent,
    FakeFlashcardsViewComponent,
    SpellingTestViewComponent,
    FlashcardsViewComponent,
    TransitionWordsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgMaterialModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
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
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
