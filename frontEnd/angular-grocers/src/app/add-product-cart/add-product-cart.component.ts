import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product-cart',
  templateUrl: './add-product-cart.component.html',
  styleUrls: ['./add-product-cart.component.css']
})
export class AddProductCartComponent implements OnInit {

  constructor(public productService: ProductService) { }

  productList: any = [];
  pastCart: any[] = [];
  check:string = "";
  cartArray: string[] = [];

  ngOnInit(): void {
    this.productService.retrieveProducts().subscribe((res) => (this.productList = res));
    
  }


  addToCart(id: any) {                            // Pulls from local storage First then adds the new product ID to array then restores the item. 
    if(localStorage.getItem("cart") != null){
      var pastCart = localStorage.getItem("cart");
      
      console.log("Past Cart:" + pastCart)
      if(pastCart === 'string'){
        this.cartArray.push(JSON.parse(pastCart))
      }
     this.cartArray.push(id)
     localStorage.setItem("cart", JSON.stringify(this.cartArray))
    }
  }
}
