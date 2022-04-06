import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Models/userModel';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

@Output() addUser = new EventEmitter<User>()

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
  phone: '',
  __v: 0,
};

formSubmit(form:any){
this.myUser.name.firstname = form.value.firstname;
this.myUser.name.lastname = form.value.lastname;
this.myUser.email = form.value.email;
this.myUser.phone = form.value.phone;
this.myUser.address.city = form.value.city;

this.addUser.emit(this.myUser)

var closeModalBtn = document.getElementById('add-edit-modal-close');
closeModalBtn?.click();
}

}
