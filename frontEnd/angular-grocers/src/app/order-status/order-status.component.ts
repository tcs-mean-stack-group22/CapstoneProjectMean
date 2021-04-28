import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  constructor(public orderService: OrderService) { }
  orderList:  any = [];
  orderId: any = "";

  ngOnInit(): void {
    let user_id = localStorage.getItem("info")
    if(user_id != null){
      this.orderId = JSON.parse(user_id)
    }
    this.searchDetails(this.orderId.userId)

  }

  searchDetails(id: any){
    console.log("Id is "+id);
    this.orderService.retrieveOrderById(id).subscribe(result=> {
      this.orderList.push(result)
    });
  }

}
