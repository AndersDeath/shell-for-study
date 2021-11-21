import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryPageComponent } from './components/dictionary-page/dictionary-page.component';
import { GlossaryPageComponent } from './components/glossary-page/glossary-page.component';

const routes: Routes = [{
  path: '',
  component: DictionaryPageComponent
},
{
  path: 'glossary',
  component: GlossaryPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
