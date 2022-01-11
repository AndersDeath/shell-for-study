import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DictionaryPageComponent } from './pages/dictionary-page/dictionary-page.component';
import { FreeDictionaryPageComponent } from './pages/free-dictionary-page/free-dictionary-page.component';
import { GlossaryPageComponent } from './pages/glossary-page/glossary-page.component';
import { JsInterviewQuestionsPageComponent } from './pages/js-interview-questions-page/js-interview-questions-page.component';
import { TransitionWordsPageComponent } from './pages/transition-words-page/transition-words-page.component';

const routes: Routes = [{
  path: '',
  component: DashboardPageComponent
},
{
  path: 'dictionary',
  component: DictionaryPageComponent
},
{
  path: 'transition-words',
  component: TransitionWordsPageComponent
},
{
  path: 'glossary',
  component: GlossaryPageComponent
},
{
  path: 'js-interview-questions',
  component: JsInterviewQuestionsPageComponent
},
{
  path: 'free-dictionary',
  component: FreeDictionaryPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
