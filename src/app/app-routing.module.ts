import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryPageComponent } from './components/dictionary-page/dictionary-page.component';
import { FreeDictionaryPageComponent } from './components/free-dictionary-page/free-dictionary-page.component';
import { GlossaryPageComponent } from './components/glossary-page/glossary-page.component';

const routes: Routes = [{
  path: '',
  component: DictionaryPageComponent
},
{
  path: 'glossary',
  component: GlossaryPageComponent
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
