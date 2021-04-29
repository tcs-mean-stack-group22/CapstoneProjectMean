import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './model.order';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RequestService {
	constructor(public http: HttpClient) {}

	retrieveReportByDate(data: any): Observable<Order[]> {
		return this.http.post<Order[]>('http://localhost:9090/report/reportByDate', data, { responseType: 'json' });
	}
}
