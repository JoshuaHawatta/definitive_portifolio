import { Component, inject } from '@angular/core';
import { Bars } from '../../components/bars/bars';
import { NgOptimizedImage } from '@angular/common';
import { Cta } from '../../components/cta/cta';
import { Router } from '@angular/router';

@Component({
  imports: [Bars, NgOptimizedImage, Cta],
  selector: 'app-me',
  styleUrl: './me.scss',
  templateUrl: './me.html',
})
export class Me {
  router = inject(Router);

  goToWorks() {
    this.router.navigate(['works']).then(r => console.log(r));
  }
}
