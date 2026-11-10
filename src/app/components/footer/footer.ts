import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  imports: [
    NgOptimizedImage,
  ],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  year = new Date().getFullYear()

}
