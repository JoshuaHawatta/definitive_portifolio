import { Component, input, } from '@angular/core';

@Component({
  selector: 'app-cta',
  styleUrl: './cta.scss',
  templateUrl: './cta.html',
})
export class Cta {
  text = input<string>();
  href = input<string>();
}
