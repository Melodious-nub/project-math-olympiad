import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TreeOlympiadRegistrationComponent } from './pages/tree-olympiad-registration/tree-olympiad-registration.component';
import { DeyalpotrikaRegistrationComponent } from './pages/deyalpotrika-registration/deyalpotrika-registration.component';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full'},
  { path:'tree-olympiad-registration', component: TreeOlympiadRegistrationComponent},
  { path:'deyalpotrika-registration', component: DeyalpotrikaRegistrationComponent},

  // wildCard for notfound
  // { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
