import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUser: boolean =false;
  isAdmin: boolean = false; 
  isEmployee: boolean = false; 
  
  constructor() { }
   isOpen : boolean = false;
   toggleNavBar(){
     this.isOpen= !this.isOpen;
   }
  ngOnInit(){
    let type = "";
    let info = localStorage.getItem("info")
    if(info != null){
      let infoArray = JSON.parse(info)
     type = infoArray.type;
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

    // this.as.user.subscribe((user)=>
    //   {
    //     if(user)
    //     {
    //     this.isUser = true;
    //     console.log(this.isUser);
    //     this.as.userId = user.uid
        
    //   }
    //   else {
    //     this.isUser = false;
    //     console.log(this.isUser); 
    //     this.as.userId = ''
    //   }

      
    // })
      
  }
  logout(){
    localStorage.clear();
    
  }

}
