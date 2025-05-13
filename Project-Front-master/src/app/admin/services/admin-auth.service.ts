import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AdminLoginRequest{
  username: string;
  password: string;
}

export interface AdminLoginResponse{
  username: string;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private loginUrl = 'http://localhost:9090/admins/login';

  constructor(private http: HttpClient) { }

  loginAdmin(credentials: AdminLoginRequest): Observable<AdminLoginResponse>{
    return this.http.post<AdminLoginResponse>(this.loginUrl, credentials);
  }
}
