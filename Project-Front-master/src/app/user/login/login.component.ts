// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserAuthService, LoginRequest } from '../services/user-auth.service';


@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class UserLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
 
  constructor(private userAuthService: UserAuthService, 
    private router: Router
  ) {}
 
  loginUser() {
    const credentials: LoginRequest = {
      username: this.username,
      password: this.password
    };
 
    this.userAuthService.loginUser(credentials).subscribe({
      next: (response) => {
        localStorage.setItem('username', response.username);
        this.router.navigate(['/user/dashboard']);
      },
      error: (error) => {
        this.errorMessage = 'Login failed. Please check your credentials.';

      }
    });
  }
}







    // Retrieve the target route from router state, defaulting to user-dashboard
//     this.targetRoute = history.state.targetRoute || '/dashboard';  
//     console.log('LoginComponent - Target Route:', this.targetRoute);  // Log the target route
   
//     // Initialize the form group
//     this.loginForm = this.fb.group({
//       username: ['', [Validators.required]],
//       password: ['', [Validators.required]],
//     });
//   }
 
//   login() {
//     if (this.loginForm.invalid) {
//       this.errorMessage = 'Please fill in the required fields correctly.';
//       return;
//     }
 
//     const { username, password } = this.loginForm.value;
    
// const loginPayload = {
//     username: 'yourUsername',
//     password: 'yourPassword'
//   };
  
 
//     // Prepare the query parameters for the HTTP POST request
//     // const params = new HttpParams()
//     //   .set('username', username)
//     //   .set('password', password);
 
//     this.http.post<any>('http://localhost:9090/api/users/login',loginPayload, { responseType: 'json' }).subscribe({
//       next: (response) => {
//         // Assuming the response contains user data (userId, userName, userEmail)
//         localStorage.setItem('userName', response.userName);
//         localStorage.setItem('message', response.message);
//         // localStorage.setItem('userEmail', response.email);
 
//         console.log('Login successful, redirecting to:', this.targetRoute);  // Log the target route
 
//         // Redirect after successful login
//         this.router.navigate([this.targetRoute]);
//       },
//       error: (err) => {
//         this.errorMessage = 'Invalid email or password. Please try again.';
//       }
//     });
//   }
// }

      
  
