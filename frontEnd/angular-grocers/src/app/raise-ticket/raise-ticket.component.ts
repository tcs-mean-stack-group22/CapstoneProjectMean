import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {

  constructor(public ticketService: TicketService) { }

  ngOnInit(): void {
  }

  storeTicket(productRef: any){
    console.log(productRef)
    this.ticketService.storeTicketDetails(productRef)
  }

}
