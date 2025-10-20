import { ComponentFixture } from '@angular/core/testing';
import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ProductPage } from './pages/product-page/product-page';
import { ProductDetailPage } from './pages/product-detail-page/product-detail-page';
import { UserPage } from './pages/user-page/user-page';

export const routes: Routes = [
  {path: '', component: HomePage}, // cuando la ruta es vacia, carga el componente HomePage
  {path: 'home', component: HomePage}, // cuando la ruta es 'home', carga el componente HomePage
  {path: 'products', component: ProductPage}, // cuando la ruta es 'products', carga el componente ProductPage
  {path: 'users', component: UserPage},
  {path: 'product/:id', component: ProductDetailPage},
  {path: '**', redirectTo: ''} // cualquier otra ruta redirige a la ruta vacia
];
