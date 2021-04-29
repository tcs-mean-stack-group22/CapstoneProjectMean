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
    console.log("Total funds needed to be in account " + ref.amountDeposit + this.funds)

    this.userServ.updateUserAmountByAccNum(ref). 
    subscribe(result => console.log(result), error => console.log(error));
    this.resultMsg = "Funds were Added to Account"

    let info = localStorage.getItem("info")
    if(info != null){
      let infoArray = JSON.parse(info)
      infoArray.amountDeposit = ref.amountDeposit;
      localStorage.setItem("info", JSON.stringify(infoArray))
    }
    window.location.reload()
  }
}
