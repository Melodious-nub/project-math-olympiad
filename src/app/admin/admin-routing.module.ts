import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { BrikkhoComponent } from './brikkho/brikkho.component';
import { DeyalComponent } from './deyal/deyal.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AppAdminComponent,
    children: [
      // { path: 'dashboard', component: DashboardComponent},
      { path: 'manage-brikkho', component: BrikkhoComponent},
      { path: 'manage-deyal', component: DeyalComponent},
      { path: '', redirectTo: '/admin/manage-brikkho', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
