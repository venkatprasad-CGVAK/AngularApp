import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/userModel';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

myUser:User={

  address: {
    geolocation: {
      lat: 0,
      long: 0,
    },
    city: '',
    street: '',
    number: 0,
    zipcode: 0,
  },
  id: 0,
  email: '',
  username: '',
  password: '',
  name: {
    firstname: '',
    lastname: '',
  },
  gender:'',
  phone: 0,
  __v: 0,
}

}
