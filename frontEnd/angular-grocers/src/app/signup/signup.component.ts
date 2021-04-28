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

  
resultMsg:string = "";
  addUser(userInfo:any) {

    userInfo.type = "user"

    this.userServ.storeUserInfo(userInfo). 
    subscribe(result => {   this.resultMsg = result } , error => this.resultMsg ="Sign up failed, Please Try again");
  }
}
