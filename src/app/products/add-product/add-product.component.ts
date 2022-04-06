import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/userModel';
import { productModel } from '../../Models/productModel';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myProduct:productModel ={

    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    },
    promotionFlag:false
  }
}
