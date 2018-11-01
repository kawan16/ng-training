import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayListSerieComponent} from './display-list-serie/display-list-serie.component';
import {DisplaySerieComponent} from './display-serie/display-serie.component';
import {DisplayListSerieToWatchComponent} from './display-list-serie-to-watch/display-list-serie-to-watch.component';
import {DisplaySerieDetailsComponent} from './display-serie-details/display-serie-details.component';
import {RouterModule} from '@angular/router';
import {SerieRoutingModule} from './serie-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SerieRoutingModule
  ],
  exports: [
    RouterModule,
    DisplayListSerieComponent,
    DisplayListSerieToWatchComponent,
    DisplaySerieDetailsComponent
  ],
  declarations: [
    DisplayListSerieComponent,
    DisplaySerieComponent,
    DisplayListSerieToWatchComponent,
    DisplaySerieDetailsComponent
  ]
})
export class SerieModule { }
