import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model.user';
import { TicketService } from '../ticket.service';
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
  messageList : any[] = [];

  constructor(public userServ:UserService, public ticketService: TicketService) { }
  cnt:number = 0;
  ngOnInit(): void {
    this.userServ.getAllLockUser().subscribe(result=> 
      {
        this.lockUserArray.push(JSON.stringify(result))
   
        this.tmp =JSON.parse(this.lockUserArray[0]) 
      })

      this.ticketService.retrieveTicketDetails().subscribe(result => {
        console.log(result)
        this.messageList = result; 
        console.log(this.messageList[0])
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
