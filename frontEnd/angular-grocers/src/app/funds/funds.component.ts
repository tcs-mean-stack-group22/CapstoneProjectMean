import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
  resultMsg:String = "";
  funds:number = 0; 
  constructor(public userServ:UserService) { }

  ngOnInit(): void {
    let info = localStorage.getItem("info")
    if(info != null){
      let infoArray = JSON.parse(info)
     this.funds = infoArray.amountDeposit;
    }
  }

  addFunds(ref: any){

    ref.amountDeposit += this.funds; 


    this.userServ.updateUserAmountByAccNum(ref). 
    subscribe(result => console.log(result), error => console.log(error));


    let info = localStorage.getItem("info")
    if(info != null){
      let infoArray = JSON.parse(info)
      infoArray.amountDeposit = this.funds + ref.amountDeposit;
      localStorage.setItem("info", JSON.stringify(infoArray))
    }



  }

}
