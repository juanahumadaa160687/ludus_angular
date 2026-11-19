import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';
import {getItem} from '../../utils/storage';

@Component({
  imports: [
    RouterOutlet,
    RouterLink
  ],
  selector: 'app-producto',
  styleUrl: './producto.css',
  templateUrl: './producto.html',
})
export class Producto {

  currency_format = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  })

  producto_id: string;

  productos:[{}];

  producto: any;

  constructor(private router: RouterOutlet, private activatedRoute: ActivatedRoute) {
    this.producto_id = this.activatedRoute.snapshot.params['id'];
    this.productos = getItem('productos');
    this.producto = this.productos.find((producto: any) => producto.guid === this.producto_id);
    console.log(this.producto);
  }





}
