import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private meta = inject(Meta);

  initInjections() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data),
      )
      .subscribe(data=> {
        if (data['description']) {
          this.meta.updateTag({ name: 'description', content: data['description'] });
          this.meta.updateTag({ property: 'og:description', content: data['description'] });
        }
      });
  }
}
