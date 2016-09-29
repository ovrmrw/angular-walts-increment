/* >>> boilerplate */
import assert from 'power-assert';
import lodash from 'lodash';
import { inject, async, fakeAsync, tick, TestBed, ComponentFixture } from '@angular/core/testing';
import { setTimeoutPromise, elements, elementText, elementValue } from '../../test-ng2/testing.helper';
/* <<< boilerplate */


////////////////////////////////////////////////////////////////////////
// modules
import { AppComponent } from '../app/app.component';
import { AppActions, AppDispatcher, AppStore, IncrementState } from '../store';
import { Observable } from 'rxjs/Rx';


////////////////////////////////////////////////////////////////////////
// mocks
class Mock { }

class MockStore {
  get incrementState$(): Observable<IncrementState> {
    return Observable.of({ counter: 100 });
  }
}


////////////////////////////////////////////////////////////////////////
// tests
describe('TEST: AppComponent Isolated Test', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: AppActions, useClass: Mock },
        { provide: AppDispatcher, useClass: Mock },
        { provide: AppStore, useClass: MockStore },
      ]
    });
    TestBed.compileComponents();
    tick();
  }));


  it('can create', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    assert(!!fixture);
  }));


  it('should have counter', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const el = fixture.debugElement.nativeElement as HTMLElement;
    const component = fixture.componentRef.instance;

    component.forTesting();
    assert(component._$counter === 100);
  }));

});


describe('TEST: (AppComponent -> Dispatcher -> Actions -> Store -> Component) Full Integration Test', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        AppActions, AppDispatcher, AppStore
      ]
    });
    TestBed.compileComponents();
    tick();
  }));


  it('should have incremented counter on the view when users click buttons', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const el = fixture.debugElement.nativeElement as HTMLElement;
    const component = fixture.componentRef.instance;
    const incrementButton = el.querySelector('#increment-btn') as HTMLButtonElement;
    const decrementButton = el.querySelector('#decrement-btn') as HTMLButtonElement;

    component.forTesting();
    assert(component._$counter === 0);
    incrementButton.click(); // 0 -> 1
    tick(499);
    assert(component._$counter === 0);
    tick(1);
    assert(component._$counter === 1);
    incrementButton.click(); // 1 -> 2
    incrementButton.click(); // 2 -> 3
    tick(500);
    assert(component._$counter === 3);
    decrementButton.click(); // 3 -> 2
    tick(500);
    assert(component._$counter === 2);
  }));

});
