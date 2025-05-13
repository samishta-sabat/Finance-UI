import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserLoginComponent } from './user/login/login.component';
import { UserDashboardComponent } from './user/dashboard/dashboard.component';
import { AdminLoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserRegisterComponent } from './user/register/register.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'user/dashboard', component: UserDashboardComponent  ,children: [
    // { path: 'dashboard', component: SomeDashboardHomeComponent },
    { path: 'products', component: ProductListComponent },
  ]},
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'products/list', component: ProductListComponent },
  { path: 'products/details/:id', component: ProductDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}