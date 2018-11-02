import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayListSerieComponent} from './display-list-serie/display-list-serie.component';
import {DisplaySerieComponent} from './display-serie/display-serie.component';
import {DisplayListSerieToWatchComponent} from './display-list-serie-to-watch/display-list-serie-to-watch.component';
import {DisplaySerieDetailsComponent} from './display-serie-details/display-serie-details.component';
import {RouterModule} from '@angular/router';
import {SerieRoutingModule} from './serie-routing.module';
import { AddSerieComponent } from './add-serie/add-serie.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SerieRoutingModule,
    SharedModule
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    DisplayListSerieComponent,
    DisplaySerieComponent,
    DisplayListSerieToWatchComponent,
    DisplaySerieDetailsComponent,
    AddSerieComponent
  ]
})
export class SerieModule { }
