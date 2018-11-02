import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayListSerieComponent} from './display-list-serie/display-list-serie.component';
import {DisplayListSerieToWatchComponent} from './display-list-serie-to-watch/display-list-serie-to-watch.component';
import {DisplaySerieDetailsComponent} from './display-serie-details/display-serie-details.component';
import {AddSerieComponent} from './add-serie/add-serie.component';


const routes: Routes = [
  {
    path: 'search',
    component: DisplayListSerieComponent,
    children: [
      {
        path: 'add',
        component: AddSerieComponent
      }
    ]
  },
  {
    path: 'watch',
    component: DisplayListSerieToWatchComponent
  },
  {
    path: 'details/:id',
    component: DisplaySerieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerieRoutingModule { }
