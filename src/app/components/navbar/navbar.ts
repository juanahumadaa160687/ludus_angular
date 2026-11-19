import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {clearSessionStorage, getSessionStorage} from '../../utils/storage';
import {Router, RouterLink} from '@angular/router';

@Component({
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  constructor(private router: Router) {}

  usuario = getSessionStorage('usuario');

  signOut(){
    clearSessionStorage()

    this.router.navigate(['/home']);
  }
}
