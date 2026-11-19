import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {getItem} from '../../utils/storage';

@Component({
  imports: [
    RouterOutlet,
    RouterLink,
  ],
  selector: 'app-tienda',
  styleUrl: './tienda.css',
  templateUrl: './tienda.html',
})
export class Tienda {

  currency_format = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  })

  productos = getItem('productos');

  sale_products = this.productos.filter((producto: any) => producto.sale === true);

  constructor(private router: RouterOutlet) {
    console.log(JSON.stringify(this.sale_products));
  }

}
