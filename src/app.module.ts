import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Dispatcher } from 'walts';

import { AppComponent } from './app/app.component';
import { AppActions, AppStore } from './store';


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  providers: [AppActions, AppStore, Dispatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }