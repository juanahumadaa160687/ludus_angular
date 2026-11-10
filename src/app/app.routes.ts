import { Routes } from '@angular/router';
import {Home} from './components/home/home';
import {NotFound} from './components/not-found/not-found';
import {Tienda} from './components/tienda/tienda';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: "full"
  },
  {
    path: 'home',
    component: Home,
    title: 'Ludus Arcanus Store'
  },
  {
    path: 'tienda',
    component: Tienda,
    title: 'Ludus Arcanus Store'
  },
  {
    path: '**',
    component: NotFound,
    title: 'Ludus Arcanus Store'
  }

];
