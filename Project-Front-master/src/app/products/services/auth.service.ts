import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USERNAME_KEY = 'username';
 
  constructor() {}
 
  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.USERNAME_KEY);
  }
 
  // Store username after login
  setUsername(username: string): void {
    localStorage.setItem(this.USERNAME_KEY, username);
  }
 
  // Get the current logged-in username
  getUsername(): string | null {
    return localStorage.getItem(this.USERNAME_KEY);
  }
 
  // Clear login session
  logout(): void {
    localStorage.removeItem(this.USERNAME_KEY);
  }
}
