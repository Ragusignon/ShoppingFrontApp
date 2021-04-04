import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { products } from '../mock-products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product_list?: Product[];

  selectedProduct?: Product;

  editStatus?: String;

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  ngOnInit(): void {
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.product_list = products);
  }

  onMouseenter(product: Product){
    console.log("onMouseenter event"+product.product_name);
  }

  edittedStatus(status:boolean): void{
    console.log("Parent component edittedStatus");
    this.editStatus = status ? 'Editted Successfully': 'Editted not successful';
  }

}
