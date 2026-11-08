import { Component } from '@angular/core';
import { Bars } from '../../components/bars/bars';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [Bars, NgOptimizedImage],
  selector: 'app-contact-me',
  styleUrl: './contact-me.scss',
  templateUrl: './contact-me.html',
})
export class ContactMe {}
