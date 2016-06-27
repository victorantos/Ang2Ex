import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Exercise1AppComponent } from '../app/exercise1.component';

beforeEachProviders(() => [Exercise1AppComponent]);

describe('App: Exercise1', () => {
  it('should create the app',
      inject([Exercise1AppComponent], (app: Exercise1AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'exercise1 works!\'',
      inject([Exercise1AppComponent], (app: Exercise1AppComponent) => {
    expect(app.title).toEqual('exercise1 works!');
  }));
});
