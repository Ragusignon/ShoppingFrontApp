import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()
  selectedProduct?: Product;

  @Output() 
  edittedStatus = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  updateEditStatus(){
    console.log("updateEditStatus")
    this.edittedStatus.emit(false);
  }

}
