import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'works',
    title: 'Works | Joshua Hawatta',
    data: { description: 'Previous work experiences and companies I helped' },
    loadComponent: () => import('./pages/works/works').then((w) => w.Works),
  },
  {
    path: 'services',
    title: 'Services | Joshua Hawatta',
    data: { description: 'This is what I can do to help you and your business' },
    loadComponent: () => import('./pages/services/services').then((s) => s.Services),
  },
  {
    path: 'contact-me',
    data: { description: 'You can reach me anywhere, gimme a call!' },
    title: 'Contact Me | Joshua Hawatta',
    loadComponent: () => import('./pages/contact-me/contact-me').then((c) => c.ContactMe),
  },
  {
    path: '',
    data: { description: 'Welcome to my Portfolio. Check my skills to see how I can help you!' },
    title: 'Joshua Hawatta',
    loadComponent: () => import('./pages/me/me').then((m) => m.Me),
  },
  { path: '**', redirectTo: '' },
];
