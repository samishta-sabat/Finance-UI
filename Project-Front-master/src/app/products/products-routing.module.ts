import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { BuyProductComponent } from './buy-product/buy-product.component';

const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'buy', component: BuyProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
