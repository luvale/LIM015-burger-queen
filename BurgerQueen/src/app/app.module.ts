import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Firebase
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

// Nuestros componentes
import { AuthComponent } from './views/home/auth.component';
import { RolesComponent } from './views/roles/roles.component';
import { TablesComponent } from './views/tables/tables.component';
import { PedidosComponent } from './views/orders/pedidos.component';
import { NavbarWaiterComponent } from './components/navbar-waiter/navbar-waiter.component';
import { TakeOrderComponent } from './views/take-order/take-order.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChefComponent } from './views/chef/chef.component';
import { NavbarChefComponent } from './components/navbar-chef/navbar-chef.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RolesComponent,
    TablesComponent,
    PedidosComponent,
    NavbarWaiterComponent,
    TakeOrderComponent,
    MenuComponent,
    ChefComponent,
    NavbarChefComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
