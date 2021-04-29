import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUser: boolean =false;
  isAdmin: boolean = false; 
  isEmployee: boolean = false; 
  
  constructor(private router: Router) { }
   isOpen : boolean = false;
   toggleNavBar(){
     this.isOpen= true;
   }
  ngOnInit(){
    let type = "";
    let info = localStorage.getItem("info")
    
    if(info != undefined){
      console.log(info)
      let infoArray = JSON.parse(info)
      console.log(infoArray)
      type = infoArray.type;
     console.log(type)
     if(type == "user"){
       this.isUser = true; 
       this.isAdmin = false;
       this.isEmployee = false;
     } else if (type == "admin") {
       this.isUser = false; 
       this.isAdmin = true; 
       this.isEmployee = false;
     } else if (type == "employee"){
       this.isUser = false; 
       this.isAdmin = false; 
       this.isEmployee = true; 
     }
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigate([ '/login' ])
  }
}
