import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from '../product.service';
import { AuthService } from '../products/services/auth.service';
@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
  product: Product | null = null;
 
  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    this.loadFeaturedProduct();
  }
 
  loadFeaturedProduct(): void {
    this.productService.getFeaturedProduct().subscribe(
      (data: Product) => {
        console.log('Featured Product: ', data);
        this.product = data;
      },
      (error) => {
        console.error('Error fetching featured product:', error);
      }
    );
  }
 
  onBuyNowClick(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['products/list']);
    } else {
      this.router.navigate(['/user/login']);
    }
  }
}
