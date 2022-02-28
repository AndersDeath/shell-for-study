import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DictionaryPageComponent } from './pages/dictionary-page/dictionary-page.component';
import { FreeDictionaryPageComponent } from './pages/free-dictionary-page/free-dictionary-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { SpanishDictionaryPageComponent } from './pages/spanish-dictionary-page/spanish-dictionary-page.component';
import { UserAuthPageComponent } from './pages/user-auth-page/user-auth-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
{
  path: '',
  component: MainPageComponent
},
{
  path: 'dashboard',
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
  path: 'spanish-dictionary',
  component: SpanishDictionaryPageComponent
},
{
  path: 'u/demo',
  component: UserPageComponent
},
{
  path: 'auth',
  component: UserAuthPageComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
