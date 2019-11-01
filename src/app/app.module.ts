import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComidaChinesaComponent } from './comida-chinesa/comida-chinesa.component';

import { TobBarComponent } from './tob-bar/tob-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComidaChinesaComponent,
   
    TobBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ComidaChinesaComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
