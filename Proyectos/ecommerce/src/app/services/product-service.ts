import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = signal([
    {id: 1, name: 'Product 1', price: 100},
    {id: 2, name: 'Product 2', price: 200},
    {id: 3, name: 'Product 3', price: 300}
  ]);

  getProducts() {
    return this.products();
  }

  getProductById(id: any) {
    return this.products().find(product => product.id == id);
  }

  addProduct(id: number, name: string, price: number) {
    const prod = {id, name, price};
    this.products().push(prod);
  }
}
