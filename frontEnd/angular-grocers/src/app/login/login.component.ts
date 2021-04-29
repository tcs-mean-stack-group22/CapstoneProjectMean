import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userServ:UserService,private router:Router) { }

  ngOnInit(): void {
  }



resultMsg:string = "";
cnt:number = 1;


userArr:Array<any> = []
  login(info:any) 
  {
    this.userServ.loginVertify(info). 
    subscribe(result => this.router.navigate(['/']));
    this.userServ.loginVertify(info).
    subscribe(result => 
      {
  

        let tmp = JSON.stringify(result)
    
        localStorage.setItem("info", tmp);
  /*       console.log(tmp.userId)
        console.log(tmp.firstname)  //undefined    */
      
      }, error => { 
      //console.log(error) ;
      
      console.log(this.cnt)
      if (this.cnt == 3 )
      {
        
        this.userServ.lockUserAccount(info).subscribe(result => console.log(result))
        this.resultMsg = "You already used all your 3 tries. Your account is locked now. Please send a request to unlock your account."
      }
      
      else if (this.cnt < 3)
      {
      
        this.resultMsg = "Username/password did not match, Please try again. Try:  " + this.cnt;
        this.cnt++;
     
      }
      else
      {
       
        this.resultMsg = ""
      }
    });
  
  }

  sendTicket(){
    window.location.href = "http://localhost:4200/raiseticket";
  }
}
