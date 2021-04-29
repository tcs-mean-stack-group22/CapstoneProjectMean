import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile-user',
  templateUrl: './edit-profile-user.component.html',
  styleUrls: ['./edit-profile-user.component.css']
})
export class EditProfileUserComponent implements OnInit {

  constructor(public userServ:UserService) { }
  _id = "";
  resultMsg:string = "";

  ngOnInit(): void {
    let info = localStorage.getItem("info")
    if(info != null){
      let infoArray = JSON.parse(info)
     this._id = infoArray.userId;
    }
  }

  changeInfo(ref: any) {
    ref._id = this._id; 
    console.log(ref._id)
    console.log("Empty")
    console.log(this._id)

    this.userServ.updateUserInfoById(ref)
    .subscribe(result => console.log(result), error => console.log(error));
    this.resultMsg = "Information was Stored";
  }
}
