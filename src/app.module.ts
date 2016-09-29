import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { AppActions, AppDispatcher, AppStore } from './store';


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  providers: [AppActions, AppDispatcher, AppStore],
  bootstrap: [AppComponent]
})
export class AppModule { }