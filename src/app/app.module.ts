import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {DisplaySerieComponent} from './display-serie/display-serie.component';
import {DisplayListSerieComponent} from './display-list-serie/display-list-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaySerieComponent,
    DisplayListSerieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
