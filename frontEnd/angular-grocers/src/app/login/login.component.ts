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


  login(info:any) 
  {
    this.userServ.loginVertify(info). 
    subscribe(result => this.router.navigate(['/']), error => console.log(error));

  
  }
}
