import { Injectable } from '@angular/core';
import { Actions, Action } from 'walts';

import { AppState, IncrementState } from './app.state';


@Injectable()
export class AppActions extends Actions<AppState> {

  increment(): Action<AppState> {
    return state => {
      return this.delayed(apply => {
        setTimeout(() => {
          apply(
            state => ({
              increment: {
                counter: state.increment ? state.increment.counter + 1 : 0
              }
            })
          );
        }, 500);
      });
    };
  }

  decrement(): Action<AppState> {
    return state => {
      return this.delayed(apply => {
        setTimeout(() => {
          apply(
            state => ({
              increment: {
                counter: state.increment ? state.increment.counter - 1 : 0
              }
            })
          );
        }, 500);
      });
    };
  }

}