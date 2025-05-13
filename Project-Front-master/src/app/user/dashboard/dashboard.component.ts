// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone:false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  username: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(){
    this.username = localStorage.getItem('username');

  }

  // Handle logout functionality
  logout() {
    // Log the logout action to the console
    console.log('User logged out');
    localStorage.removeItem('username');
    this.router.navigate(['/user/login']);
}

}
