import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './model.ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(public http:HttpClient) { }
  
  retrieveTicketDetails():Observable<Ticket[]> {
    return this.http.get<Ticket[]>("http://localhost:9090/ticket/allTicketDetails",)
  }

  storeTicketDetails(productRef:any){
    this.http.post("http://localhost:9090/ticket/addTicket", productRef,{responseType: "text"})
    .subscribe(result => console.log(result), (error => console.log(error)))
  }


}
