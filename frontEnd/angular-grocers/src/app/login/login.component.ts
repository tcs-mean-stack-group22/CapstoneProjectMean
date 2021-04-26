import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userServ:UserService) { }

  ngOnInit(): void {
  }



resultMsg:string = "";


  login(info:any) 
  {
    this.userServ.loginVertify(info). 
    subscribe(result => console.log(result), error => console.log(error));

  
  }
}
