import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
 
  constructor(private productService: ProductService, private router: Router) {}
 
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data=>{
      this.products=data;
    });
  }
 
  // loadProducts(): void {
  //   this.productService.getAllProducts().subscribe(
  //     (data: Product[]) => {
  //       this.products = data;  // Store the list of products
  //     },
  //     (error) => {
  //       console.error('Error fetching product list', error);
  //     }
  //   );

  // }

  goToDetails(productId: number): void {
    this.router.navigate(['/products/details', productId]);
  }
}
