import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AdminHomeComponent, AdminLoginComponent, DashboardComponent],
  imports: [CommonModule, FormsModule, AdminRoutingModule],
})
export class AdminModule {}