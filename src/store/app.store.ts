import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Dispatcher } from 'walts';

import { AppState, IncrementState } from './app.state';
import { AppDispatcher } from './app.dispatcher';


const INIT_STATE: AppState = {
  increment: {
    counter: 0
  }
};


@Injectable()
export class AppStore extends Store<AppState> {
  constructor(protected dispatcher: Dispatcher<AppState>) {
    super(INIT_STATE, dispatcher);
  }


  get incrementState$(): Observable<IncrementState> {
    return this.observable
      .map<IncrementState>(state => state.increment ? state.increment : { counter: 0 });
  }

}