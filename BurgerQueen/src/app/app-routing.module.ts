import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './views/home/auth.component';
import { RolesComponent } from './views/roles/roles.component';
import { TablesComponent } from './views/tables/tables.component';
import { PedidosComponent } from './views/orders/pedidos.component';
import { TakeOrderComponent } from './views/take-order/take-order.component';
import { ChefComponent } from './views/chef/chef.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'roles',
    component: RolesComponent,
  },
  {
    path: 'tables',
    component: TablesComponent,
  },
  {
    path: 'orders',
    component: PedidosComponent,
  },
  { 
    path: 'take-order',
    component: TakeOrderComponent,
  },
  {
    path: 'chef-order',
    component: ChefComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
