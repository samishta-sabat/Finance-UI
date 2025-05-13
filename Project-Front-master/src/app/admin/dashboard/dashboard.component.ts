import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone:false,
  templateUrl:  './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username: string | null = '';
 
  constructor(private router: Router) {
    this.username = localStorage.getItem('username');
  }
 
  logout() {
    console.log("Admin logged out")
    localStorage.removeItem('sername');
    this.router.navigate(['/']);
  }
 }



//  DashboardComponent