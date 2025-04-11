// register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone:false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class UserRegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister() {
    // Simulate registration (connect it to your backend logic)
    console.log('User registered:', this.username, this.email);
    alert('Registration successful!');
    this.router.navigate(['user/dashboard']);
  }
}
