import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { CustomersComponent } from './customers/customers.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { ItemsComponent } from './items/items.component';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PosComponent,
    DashboardComponent,
    TablesComponent,
    CustomersComponent,
    UsersComponent,
    OrdersComponent, ItemsComponent
  ],
  imports: [
    CommonModule,
    PosRoutingModule,
    AuthModule,
    SharedModule
  ]
})
export class PosModule { }
