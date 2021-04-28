import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
  resultMsg:String = "";
  constructor(public userServ:UserService) { }

  ngOnInit(): void {
  }

  addFunds(info: any){
    this.userServ.updateUserAmountByAccNum(info). 
    subscribe(result => console.log(result), error => console.log(error));

  }

}
