import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginRequest{
  username: string;
  password: string;
}

export interface LoginResponse{
  username: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserAuthService {
  private loginUrl = 'http://localhost:9090/api/users/login';

  constructor(private http: HttpClient) { }

  loginUser(credentials: LoginRequest): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.loginUrl, credentials);
  }
}
