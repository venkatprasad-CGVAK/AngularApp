import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() product:any;

  toggleFlag=false;

  toggleDesc(){
    this.toggleFlag = !this.toggleFlag
  }
}
