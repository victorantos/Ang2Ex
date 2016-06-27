import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Exercise1AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Exercise1AppComponent);
