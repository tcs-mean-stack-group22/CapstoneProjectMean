import { Component, OnInit } from '@angular/core';
import { Order } from '../model.order';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';
import { OrderService} from '../order.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public productService: ProductService, public userServ:UserService, public orderService:OrderService) { }
  productList:  any = [];
  cartArray: string[] = [];
  sum: number = 0 ;
  amount: number = 0;  

  ngOnInit(): void {
    let Item = localStorage.getItem("cart")
    if(Item != null){
      this.cartArray = JSON.parse(Item)
      console.log(this.cartArray)
    }
    this.cartArray.forEach(element => { // Loop through local storage and do a retrieve product by id for each id in storage. 
      console.log("Element is : " + element)
      this.searchDetails((element))
    });
  

    let info = localStorage.getItem("info")
    if(info != null){
      let infoArray = JSON.parse(info)
     this.amount = infoArray.amountDeposit;
    }
    

  }
  searchDetails(id:any){
    console.log("Id is "+id);
    this.productService.retrieveProductById(id).subscribe((result:any)=> {
      this.sum += result[0].price
      this.productList.push(result)
      console.log("Sum " + this.sum)
    });
  }

  buyCart(){
    let a = localStorage.getItem("info")
    let array; 
    let user_id; 

    if(a != null){
        array = JSON.parse(a)
        user_id = array.userId
    }

    //OverWrite Local storage funds amount
    let info = localStorage.getItem("info")
    if(info != null){
      let infoArray = JSON.parse(info)
      infoArray.amountDeposit = this.amount - this.sum;
      localStorage.setItem("info", JSON.stringify(infoArray))
    }

    // Send Order to table
    let date: Date =  new Date();  
    let date2: Date =  new Date(); 
    date2.setDate(date.getDate()+7);
    let model = new Order(user_id,date, date2,"Preparing to be Shipped",this.productList.length)
    this.orderService.updateOrders(model).subscribe((res) => {
      console.log(res)
    } )
    
    localStorage.setItem("cart", "")
  }

}
