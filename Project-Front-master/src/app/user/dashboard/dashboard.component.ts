// dashboard.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone:false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class UserDashboardComponent {
  constructor(private router: Router) {}

  // Handle logout functionality
  onLogout() {
    // Log the logout action to the console
    console.log('User logged out');

    this.router.navigate(['/']);
}

}
