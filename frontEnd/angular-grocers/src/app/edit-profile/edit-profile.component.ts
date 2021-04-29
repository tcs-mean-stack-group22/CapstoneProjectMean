import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  resultMsg:String = "";
  constructor(public userServ:UserService) { }

  ngOnInit(): void {
  }
  changePassword(info:any)
  {
    if(info.newPass === info.newPass2)
    {
      console.log(info.newPass , info.newPass2 )
      this.userServ.loginVertify(info). 
      subscribe( (result) => 
      {
        this.resultMsg = "New password has been saved."
        this.savePassword(info);
      
      }
       , error =>  
       {
        this.resultMsg = "New password did not saved, please try again"
         console.log( error)} );
  
    }
    else
    {
      this.resultMsg = "Password does not match"
    }
  }
  savePassword(info:any)
  {
    this.userServ.saveEmpPass(info). 
    subscribe(result => console.log(result), error => console.log(error));
  }

}
