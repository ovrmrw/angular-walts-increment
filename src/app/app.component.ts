import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { AppActions, AppDispatcher, AppStore } from '../store';


@Component({
  selector: 'my-app',
  template: `
    <div>Counter</div>
    <div>{{counter | async}}</div>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
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

  get counter() { return this.store.observable.map(s => s.increment ? s.increment.counter : null); }

}