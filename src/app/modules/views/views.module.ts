import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleViewComponent } from './article-view/article-view.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { FakeFlashcardsViewComponent } from './fake-flashcards-view/fake-flashcards-view.component';
import { FlashcardsViewComponent } from './flashcards-view/flashcards-view.component';
import { SpellingTestViewComponent } from './spelling-test-view/spelling-test-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { TabsViewComponent } from './tabs-view/tabs-view.component';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from 'src/app/modules/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule,
  SPINNER,
  POSITION,
  PB_DIRECTION, } from "ngx-ui-loader";

const components = [
  ArticleViewComponent,
  CardsViewComponent,
  FakeFlashcardsViewComponent,
  FlashcardsViewComponent,
  SpellingTestViewComponent,
  TableViewComponent,
  TabsViewComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    SharedModule,
    FormsModule,
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
  ],
  exports: [
    ...components
  ]
})
export class ViewsModule { }
