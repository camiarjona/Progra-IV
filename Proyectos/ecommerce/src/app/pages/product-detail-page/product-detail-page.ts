import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product-service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-product-detail-page',
  imports: [],
  templateUrl: './product-detail-page.html',
  styleUrl: './product-detail-page.css'
})
export class ProductDetailPage {

  productService = inject(ProductService);

  // recurso para obtener los parámetros de la ruta activa
  activatedRoute = inject(ActivatedRoute);

  product: any;

  constructor() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.productService.getProductById(id);
  }

}
