import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUser: boolean =false;
  constructor() { }
   isOpen : boolean = false;
   toggleNavBar(){
     this.isOpen= !this.isOpen;
   }
  ngOnInit(){
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
    // this.as.logout();
    
  }

}
