import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model.user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lock-user',
  templateUrl: './lock-user.component.html',
  styleUrls: ['./lock-user.component.css']
})
export class LockUserComponent implements OnInit {
  lockUserArray:Array<any> = []
  msg:String = ""
  tmp:any;
  constructor(public userServ:UserService) { }
  cnt:number = 0;
  ngOnInit(): void {
    this.userServ.getAllLockUser().subscribe(result=> 
      {
        this.lockUserArray.push(JSON.stringify(result))
   
        this.tmp =JSON.parse(this.lockUserArray[0]) 
      
      })
 
  }
  


  unlockUser(ref:any)
  {
    console.log(ref.userId)
    this.userServ.unlockUserAccount(ref).subscribe(result =>{ this.msg = "Account user is successfully unlocked" ;    location.reload();}  , err =>  { 
      this.msg = "account status did not get updated."
     
      } )
  }
}
