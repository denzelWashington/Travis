import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductsComponent,
    LoginComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
