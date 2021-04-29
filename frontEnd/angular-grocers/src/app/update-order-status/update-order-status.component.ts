import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent implements OnInit {

  constructor(public orderService: OrderService) { }
  orderList:  any = [];
  orderId: any = "";
  msg:string = ""

  ngOnInit(): void {
    let user_id = localStorage.getItem("info")
    if(user_id != null){
      this.orderId = JSON.parse(user_id)
    }
    this.searchDetails(this.orderId.userId)

  }

  searchDetails(id: any){
    console.log("Id is "+id);
    this.orderService.retrieveAllOrderDetails().subscribe(result=> {
      this.orderList.push(result)
    });
    
  }

  shipBook(ref : any){
    ref.status = "Order Booked";
    this.orderService.updateOrderStatusById(ref)
    .subscribe(result => this.msg = "Order has been changed", error => this.msg = "Status is currently this",);
    
  }

  inTransit(ref: any){
    ref.status = "In Transit";
    this.orderService.updateOrderStatusById(ref)
    .subscribe(result => this.msg = "Order has been changed", error => this.msg = "Status is currently this",);
  }

  outForDelivery(ref : any){
    ref.status = "Out for Delivery";
    this.orderService.updateOrderStatusById(ref)
    .subscribe(result => this.msg = "Order has been changed", error => this.msg = "Status is currently this",);
  }

  delivered(ref: any){
    ref.status = "Delivered";
    this.orderService.updateOrderStatusById(ref)
    .subscribe(result => this.msg = "Order has been changed", error => this.msg = "Status is currently this",);
  }
}
