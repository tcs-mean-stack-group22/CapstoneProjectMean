import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order} from "./model.order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(public http:HttpClient) { }
  
  retrieveAllOrderDetails():Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:9090/order/allOrderDetails",)
  }

  updateOrders(data: any) {
		return this.http.put('http://localhost:9090/order/addOrder', data, { responseType: 'json' });
	}

  retrieveOrderById(user_id: any) {
		return this.http.get(`http://localhost:9090/order/getOrderDetailsById/${user_id}`, { responseType: 'json' });
	}


}
