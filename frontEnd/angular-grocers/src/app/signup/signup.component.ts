import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public userServ:UserService) { }

  ngOnInit(): void {
  }
  addUser(userInfo:any) {
    //console.log(userInfo.firstname  + userInfo.lastname +   userInfo.email  )
    this.userServ.storeUserInfo(userInfo). 
    subscribe(result => console.log(result), error => console.log(error));
  }
}
