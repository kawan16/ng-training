import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {environment} from '../environments/environment';

/** Use the role of token */
export const CONFIGURATION = {};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    { provide: CONFIGURATION, useValue: environment.configuration }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
