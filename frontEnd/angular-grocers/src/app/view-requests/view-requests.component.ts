import { Component, OnInit } from '@angular/core';
import { RequestForm } from '../ModulerequetForm';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  constructor(public prodServ: ProductService) { }
  Forms?:Array<RequestForm>;
  ngOnInit(): void {
    this.prodServ.getProductReqForm().subscribe(result => this.Forms=result)
  }

}
