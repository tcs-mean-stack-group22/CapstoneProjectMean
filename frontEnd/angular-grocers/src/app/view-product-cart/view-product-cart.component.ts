import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-cart',
  templateUrl: './view-product-cart.component.html',
  styleUrls: ['./view-product-cart.component.css']
})
export class ViewProductCartComponent implements OnInit {

  constructor(public productService: ProductService) { }
  productList:  any = [];
  cartArray: string[] = [];

  ngOnInit(): void {

    //this.productService.retrieveProducts().subscribe((res) => (this.productList = res));

    let Item = localStorage.getItem("cart")
    if(Item != null){
      this.cartArray = JSON.parse(Item)
      console.log(this.cartArray)
    }
    this.cartArray.forEach(element => { // Loop through local storage and do a retrieve product by id for each id in storage. 
      console.log("Element is : " + element)
      this.searchDetails((element))
    });

  }

  searchDetails(id:any){
    console.log("Id is "+id);
    this.productService.retrieveProductById(id).subscribe(result=> {
      this.productList.push(result)
      console.log("ProductList : " + this.productList)
    });
  }

	onDelete(id: any) {                       // Function takes an id input. Then gets local storage searches for id in array then splices array to cut it out. 
    let Item = localStorage.getItem("cart")
    if(Item != null){
      this.cartArray = JSON.parse(Item)
    }
    if(this.cartArray.includes(id)){
      this.cartArray.splice(this.cartArray.indexOf(id),1)
      localStorage.setItem("cart", JSON.stringify(this.cartArray))
    } else {
      console.log("Item was not found in cart")
    }
	}
}
