import { Component, inject } from '@angular/core';
import { ProductList } from '../../components/product-list/product-list';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-page',
  imports: [ProductList],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css'
})
export class ProductPage {

  productService = inject(ProductService);

  addProduct(id: string, name: string, price: string) {
    const idP = +id;
    const priceP = +price;
    this.productService.addProduct(idP, name, priceP);
  }

}
