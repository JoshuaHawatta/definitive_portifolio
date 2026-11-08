import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { SeoService } from './services/seo';

@Component({
  imports: [RouterOutlet, Header],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  constructor() {
    inject(SeoService).initInjections();
  }
}
