import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { WithoutHttpPipe } from './pipe/without-http.pipe';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    WithoutHttpPipe
  ],
  declarations: [WithoutHttpPipe],
})
export class SharedModule { }
