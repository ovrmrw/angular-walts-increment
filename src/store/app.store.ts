import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'walts';

import { AppState, IncrementState } from './app.state';
import { AppDispatcher } from './app.dispatcher';


const INIT_STATE: AppState = {
  increment: {
    counter: 0
  }
};


@Injectable()
export class AppStore extends Store<AppState> {
  constructor(protected dispatcher: AppDispatcher) {
    super(INIT_STATE, dispatcher);
  }
}