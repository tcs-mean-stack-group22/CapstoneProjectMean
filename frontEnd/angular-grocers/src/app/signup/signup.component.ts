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
  userType:String = "user";
  getValue(var2:String)
  {
    this.userType = var2 ; 
  }
resultMsg:string = "";
addUser(userInfo:any) {

    userInfo.type = this.userType;
console.log(this.userType)
    this.userServ.storeUserInfo(userInfo). 
    subscribe(result => {   this.resultMsg = result  } , error => this.resultMsg ="Sign up failed, Please Try again");

  }
  
}
