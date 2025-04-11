// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class UserLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Log the entered username and password
    console.log('User Login Details:');
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Normally, you'd verify the login details via an API, e.g.:
    // this.authService.loginUser({username, password}).subscribe(
    //   response => {
    //     console.log('Login Successful', response);
    //     this.router.navigate(['/user/dashboard']); // Redirect to user dashboard on success
    //   },
    //   error => {
    //     console.log('Login Failed', error);
    //   }
    // );

    // Simulate successful login
    console.log('User logged in successfully!');
    this.router.navigate(['/user/dashboard']); // Redirect to user dashboard
  }
}
