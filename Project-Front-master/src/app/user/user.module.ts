import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './login/login.component';
import { UserRegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [UserLoginComponent, UserRegisterComponent, UserDashboardComponent],
  imports: [CommonModule, FormsModule, UserRoutingModule],
})
export class UserModule {}