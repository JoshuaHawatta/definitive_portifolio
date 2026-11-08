import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideExternalLink } from '@lucide/angular';
import { Bars } from '../../components/bars/bars';

@Component({
  imports: [Bars, RouterLink, LucideExternalLink],
  selector: 'app-services',
  styleUrl: './services.scss',
  templateUrl: './services.html',
})
export class Services {}
