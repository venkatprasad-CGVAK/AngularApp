import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Models/userModel';
import { productModel } from '../../Models/productModel';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() addProduct = new EventEmitter<productModel>()
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

  formSubmit(form:any){

    this.myProduct.title = form.value.title;
    this.myProduct.description = form.value.description;
    this.myProduct.price = form.value.price;
    this.addProduct.emit(this.myProduct)

    var closeModalBtn = document.getElementById('add-edit-modal-close');
    closeModalBtn?.click();
    }
}
