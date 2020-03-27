import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
