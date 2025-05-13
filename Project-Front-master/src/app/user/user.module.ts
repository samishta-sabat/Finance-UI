import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './login/login.component';
import { UserDashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UserRegisterComponent } from './register/register.component';

@NgModule({
  declarations: [UserDashboardComponent, UserLoginComponent, UserRegisterComponent],
  imports: [CommonModule, FormsModule, UserRoutingModule, ReactiveFormsModule],
})
export class UserModule {}