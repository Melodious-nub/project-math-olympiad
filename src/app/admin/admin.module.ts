import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { BrikkhoComponent } from './brikkho/brikkho.component';
import { DeyalComponent } from './deyal/deyal.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppAdminComponent,
    BrikkhoComponent,
    DeyalComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
