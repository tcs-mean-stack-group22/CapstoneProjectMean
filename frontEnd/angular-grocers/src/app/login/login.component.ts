import { templateJitUrl } from '@angular/compiler';
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
    this.reloadPage();
  }



resultMsg:string = "";
cnt:number = 1;


userArr:Array<any> = []
  login(info:any) 
  {
    this.userServ.loginVertify(info).
    subscribe(result => 
      {
  

        let tmp = JSON.stringify(result)
    
        localStorage.setItem("info", tmp);

        let x = JSON.parse(tmp)

        console.log(x.type)

        if (x.type == "user"){
          this.router.navigate(['/userpanel']);
        }

        if (x.type == "admin"){
          this.router.navigate(['/adminpanel']);
        }

        if (x.type == "employee"){
          this.router.navigate(['/employeepanel']);
        }

      
      }, error => { 
      console.log(error) ;
      
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

  reloadPage() {
		var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
		// Current Time //
		var now = Date.now();
		// Total Process Lenght as Minutes //
		var tenSec = 3 * 1000;
		// End Time of Process //
		var plusTenSec = currentDocumentTimestamp + tenSec;
		if (now > plusTenSec) {
			location.reload();
		}
	}
}
