import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SayWelcomeComponent} from './core/say-welcome/say-welcome.component';
import {WarnUnknownPageComponent} from './core/warn-unknown-page/warn-unknown-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: SayWelcomeComponent
  },
  {
    path: 'serie',
    loadChildren: './serie/serie.module#SerieModule',
  },
  {
    path: '**',
    component: WarnUnknownPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
