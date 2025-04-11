import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone:false,
  template: `<h2>Admin Dashboard</h2>`
})
export class DashboardComponent {
  constructor(private router: Router) {}

  // Handle logout functionality
  onLogout() {
    // Log the logout action to the console
    console.log('Admin logged out');

    this.router.navigate(['/']);
}
 }

