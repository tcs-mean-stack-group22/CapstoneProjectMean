import { Component, OnInit } from '@angular/core';
import { RequestForm } from '../ModulerequetForm';
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

    this.prodServ.storeProductReqForm(ref). 
    subscribe(result => console.log(result), error => console.log(error));
  }


  delMsg:String = ""
  removeForm(ref:any)
  {
    console.log("removeform" + ref.delName);

    this.prodServ.removeReqForm(ref.delName).subscribe((result:String) => this.delMsg = result)
  }

}
