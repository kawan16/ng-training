import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { WithoutHttpPipe } from './pipe/without-http.pipe';
import {HighlightDirective} from './directive/highlight.directive';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    HighlightDirective,
    WithoutHttpPipe
  ],
  declarations: [
    HighlightDirective,
    WithoutHttpPipe],
})
export class SharedModule { }
