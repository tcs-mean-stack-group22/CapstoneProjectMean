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
  orderItem: any = [];
  orderId: any = "";
  printImage:boolean = false; 
  firstStatus: boolean = false; 
  secondStatus: boolean = false; 
  thirdStatus: boolean = false; 
  fourthStatus: boolean = true; 
  fifthStatus:boolean = false; 
  dateCreated: Date = new Date();
  dateDelivered :Date = new Date();

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

  orderImage(number: any){
    console.log(number)
    this.printImage = true; 

    this.orderService.retrieveOrderItemById(number).subscribe((result:any)=> {
      if(result[0].status == "Preparing to be Shipped"){
        this.secondStatus = true; 
        this.thirdStatus = false; 
        this.fourthStatus = false; 
        this.fifthStatus = false; 
      } else if (result[0].status == "In Transit"){
        this.firstStatus = false
        this.thirdStatus = true; 
        this.fourthStatus = false; 
        this.fifthStatus = false; 
      } else if (result[0].status == "Out for Delivery"){
        this.firstStatus = false
        this.thirdStatus = false;
        this.fourthStatus = true;
        this.fifthStatus = false; 
      } else if (result[0].status == "Delivered"){
        this.firstStatus = false
        this.thirdStatus = false;
        this.fourthStatus = false;
        this.fifthStatus = true; 
      }

      this.dateCreated = result[0].date_Ordered
      this.dateDelivered = result[0].date_Delivered
      console.log(result[0])
    });



  }

}
