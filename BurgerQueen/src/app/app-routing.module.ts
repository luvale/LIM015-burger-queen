import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { RolesComponent } from './components/roles/roles.component';
import { TablesComponent } from './components/tables/tables.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
