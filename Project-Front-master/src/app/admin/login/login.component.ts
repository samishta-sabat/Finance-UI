// // login.component.ts
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone:false,
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class AdminLoginComponent {
//   adminUsername: string = '';
//   adminPassword: string = '';

//   constructor(private router: Router) {}

//   onLogin() {
//     // Simulating admin login process (You can connect it to actual authentication logic)
//     if (this.adminUsername === 'admin' && this.adminPassword === 'password') {
//       this.router.navigate(['/admin-dashboard']);
//     } else {
//       alert('Invalid credentials');
//     }
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  standalone:false,
  templateUrl: './login.component.html',
})
export class AdminLoginComponent {
  adminUsername: string = '';
  adminPassword: string = '';

  login() {
    console.log('Logging in with:', this.adminUsername, this.adminPassword);
    // Add actual logic here
  }
}

