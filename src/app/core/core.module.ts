import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayHeaderComponent } from './display-header/display-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DisplayHeaderComponent
  ],
  declarations: [DisplayHeaderComponent]
})
export class CoreModule { }
