import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product{
  productId: number;
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private baseUrl = 'http://localhost:9096/products';
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/list`);
  }

  getFeaturedProduct(): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/products/featured`);
  }
}
