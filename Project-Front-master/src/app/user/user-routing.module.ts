import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './login/login.component';
import { UserDashboardComponent } from './dashboard/dashboard.component';
import { UserRegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'register', component: UserRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}