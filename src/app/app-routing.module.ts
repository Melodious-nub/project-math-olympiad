import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TreeOlympiadRegistrationComponent } from './pages/tree-olympiad-registration/tree-olympiad-registration.component';
import { DeyalpotrikaRegistrationComponent } from './pages/deyalpotrika-registration/deyalpotrika-registration.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full'},
  { path:'tree-olympiad-registration', component: TreeOlympiadRegistrationComponent},
  { path:'deyalpotrika-registration', component: DeyalpotrikaRegistrationComponent},
  { path:'login', component: AdminLoginComponent},

  // Lazzy Loading Route 1
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('./admin/admin.module').then((m) => m.AdminModule),
  },

  // wildCard for notfound
  // { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
