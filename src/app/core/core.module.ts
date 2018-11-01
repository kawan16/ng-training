import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayHeaderComponent } from './display-header/display-header.component';
import { SayWelcomeComponent } from './say-welcome/say-welcome.component';
import { WarnUnknownPageComponent } from './warn-unknown-page/warn-unknown-page.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DisplayHeaderComponent,
    SayWelcomeComponent,
    WarnUnknownPageComponent
  ],
  declarations: [
    DisplayHeaderComponent,
    SayWelcomeComponent,
    WarnUnknownPageComponent
  ]
})
export class CoreModule { }
