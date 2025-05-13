
import { Component } from '@angular/core';
import { AdminAuthService, AdminLoginRequest } from '../services/admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
 
  constructor(private adminAuthService: AdminAuthService, 
    private router: Router
  ) {}
 
  loginAdmin() {
    const credentials: AdminLoginRequest = {
      username: this.username,
      password: this.password
    };
 
    this.adminAuthService.loginAdmin(credentials).subscribe({
      next: (response) => {
        localStorage.setItem('username', response.username);
        this.router.navigate(['/admin/dashboard']);
      },
      error: (error) => {
        this.errorMessage = 'Invalid Admin credentials.';
      }
    });
  }
}

