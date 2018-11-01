import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DisplayListSerieComponent} from './display-list-serie/display-list-serie.component';
import {DisplaySerieComponent} from './display-serie/display-serie.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DisplayListSerieComponent
  ],
  declarations: [
    DisplayListSerieComponent,
    DisplaySerieComponent
  ]
})
export class SerieModule { }
