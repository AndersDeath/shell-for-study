import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DictionaryPageComponent } from './pages/dictionary-page/dictionary-page.component';
import { FreeDictionaryPageComponent } from './pages/free-dictionary-page/free-dictionary-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [{
  path: '',
  component: DashboardPageComponent
},
{
  path: 'dictionary/:dictionaryId',
  component: DictionaryPageComponent,
},
{
  path: 'free-dictionary',
  component: FreeDictionaryPageComponent
},
{
  path: 'u/demo',
  component: UserPageComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
