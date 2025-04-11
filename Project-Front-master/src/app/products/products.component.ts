import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  products = [
    { id: 1, name: 'Smartphone', description: 'Latest Android smartphone', price: 25000 },
    { id: 2, name: 'Laptop', description: 'Lightweight and powerful', price: 55000 },
    { id: 3, name: 'Washing Machine', description: 'Top-load, 6kg', price: 18000 }
  ];
  

}
