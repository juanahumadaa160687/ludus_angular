import { Component, inject } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { users, products, regiones } from './data.js'

@Component({
  imports: [
    RouterOutlet
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private routerOutlet = inject(RouterOutlet);
  private router = inject(Router)

  ngOnInit() {
    //Cargar datos de usuarios en el localStorage
    localStorage.setItem('usuarios', JSON.stringify(users))
    //Cargar datos de productos en el localStorage
    localStorage.setItem('productos', JSON.stringify(products))
    //Cargar datos de regiones y comunas en el localStorage
    localStorage.setItem('regiones', JSON.stringify(regiones))
  }

}
