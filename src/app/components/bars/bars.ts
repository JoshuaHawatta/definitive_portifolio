import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-bars',
  styleUrl: './bars.scss',
  templateUrl: './bars.html',
  host: {
    '[class.animated]': 'animated()',
  },
})
export class Bars {
  invertBars = input(false);
  animated = input(false);
}
