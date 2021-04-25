import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {

  requestMsg:String = ""

  constructor(public prodServ: ProductService) { }

  ngOnInit(): void {
  }
  increaseProduct(ref:any)
  {
    console.log(ref.pname)
    console.log(ref.quanity)
    this.prodServ.sotreProductReqForm(ref). 
    subscribe(result => console.log(result), error => console.log(error));
  }
}
