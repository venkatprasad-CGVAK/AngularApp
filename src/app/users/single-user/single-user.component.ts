import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() user:any

toggleFlag=false;

  toggleDesc(){
    this.toggleFlag = !this.toggleFlag
  }
}
