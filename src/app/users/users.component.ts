import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../Models/userModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersList:any[]=[];

  showForm = false;
  constructor(private userService:UserService) { }

  ngOnInit() {
    //this.usersList = this.userService.getUsers()
  }

  addUser(user:User){
    this.usersList.push(user);
  }
  }
