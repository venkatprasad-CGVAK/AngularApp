import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList:any=[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productList = this.productService.getProducts();
  }



  toggleFlag=true;

  toggleDesc(){
    this.toggleFlag = !this.toggleFlag
  }
}
