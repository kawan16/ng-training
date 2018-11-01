import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SayWelcomeComponent} from './core/say-welcome/say-welcome.component';
import {DisplayListSerieComponent} from './serie/display-list-serie/display-list-serie.component';
import {DisplayListSerieToWatchComponent} from './serie/display-list-serie-to-watch/display-list-serie-to-watch.component';
import {WarnUnknownPageComponent} from './core/warn-unknown-page/warn-unknown-page.component';
import {DisplaySerieDetailsComponent} from './serie/display-serie-details/display-serie-details.component';

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
    path: 'search',
    component: DisplayListSerieComponent
  },
  {
    path: 'watch',
    component: DisplayListSerieToWatchComponent
  },
  {
    path: 'serie/:id',
    component: DisplaySerieDetailsComponent
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
