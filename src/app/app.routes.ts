import { Routes } from '@angular/router';
import {Home} from './components/home/home';
import {NotFound} from './components/not-found/not-found';
import {Tienda} from './components/tienda/tienda';
import {Producto} from './components/producto/producto';
import {SignIn} from './components/sign-in/sign-in';
import {SignUp} from './components/sign-up/sign-up';
import {UserProfile} from './components/user-profile/user-profile';

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
    path: 'producto/:id',
    component: Producto,
    title: 'Ludus Arcanus Store'
  },
  {
    path: 'juegos-mesa',
    component: Tienda,
    title: 'Juegos de Mesa'
  },
  {
    path: 'juegos-de-cartas',
    component: Tienda,
    title: 'Juegos de Cartas'
  },
  {
    path: 'juegos-de-rol',
    component: Tienda,
    title: 'Juegos de Rol'
  },
  {
    path: 'accesorios',
    component: Tienda,
    title: 'Accesorios'
  },
  {
    path: 'sign-in',
    component: SignIn,
    title: 'Iniciar Sesión'
  },
  {
    path: 'sign-up',
    component: SignUp,
    title: 'Registrarse'
  },
  {
    path: 'profile',
    component: UserProfile,
    title: 'Ludus Arcanus Store'
  },
  {
    path: '**',
    component: NotFound,
    title: 'Error 404 Not Found'
  }
];
