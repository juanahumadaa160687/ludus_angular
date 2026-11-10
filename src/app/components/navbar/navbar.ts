import {Component} from '@angular/core';
import { Style, Avatar } from '@dicebear/core';
import definition from '@dicebear/styles/pixelbot.json' with { type: 'json' };
import {NgOptimizedImage} from '@angular/common';

@Component({
  imports: [
    NgOptimizedImage
  ],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  style = new Style(definition);
  avatar = new Avatar(this.style, {
    "tags": [
      "animation"
    ],
    "seed": Math.random().toString(36).substring(2, 15)
  });
  user_avatar = this.avatar.toDataUri()
}
