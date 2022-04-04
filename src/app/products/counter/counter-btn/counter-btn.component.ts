import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-btn',
  templateUrl: './counter-btn.component.html',
  styleUrls: ['./counter-btn.component.css']
})
export class CounterBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() counter : any;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

 disableBtn=true;

  incrementCounter(){
    this.counter++;
    this.countChanged.emit(this.counter);
    this.disableBtn=false;
  }

  decrementtCounter(){
    this.counter--;
    this.countChanged.emit(this.counter);
    if(this.counter==0){
      this.disableBtn = true
    }
  }


}
