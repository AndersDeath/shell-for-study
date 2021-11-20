import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryComponent } from './components/dictionary/dictionary.component';

const routes: Routes = [{
  path: '',
  component: DictionaryComponent
},
{
  path: 'glossary-of-terms',
  component: DictionaryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
