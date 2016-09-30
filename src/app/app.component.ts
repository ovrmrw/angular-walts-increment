import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { AppActions, AppDispatcher, AppStore, AppState } from '../store';


@Component({
  selector: 'my-app',
  template: `
    <div>Counter</div>
    <div>{{counter | async}}</div>
    <button (click)="increment()" id="increment-btn">+</button>
    <button (click)="decrement()" id="decrement-btn">-</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    private actions: AppActions,
    private dispatcher: AppDispatcher,
    private store: AppStore,
  ) { }


  increment() {
    this.dispatcher.emit(this.actions.increment());
  }

  decrement() {
    this.dispatcher.emit(this.actions.decrement());
  }

  get counter() { return this.store.incrementState$.map(s => s.counter); }


  ////////////////////////////////////////////////////////////////////
  // Testing world
  forTesting() {
    this.counter.subscribe(counter => this._$counter = counter);
  }

  _$counter: number;

}