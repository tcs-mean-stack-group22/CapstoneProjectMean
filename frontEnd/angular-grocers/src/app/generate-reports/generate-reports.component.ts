import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment/moment';
import { RequestService } from '../request.service';

@Component({
	selector: 'app-generate-reports',
	templateUrl: './generate-reports.component.html',
	styleUrls: [ './generate-reports.component.css' ]
})
export class GenerateReportsComponent implements OnInit {
	constructor(public reportService: RequestService) {}

	dateRef = new FormGroup({
		startDate: new FormControl(),
		endDate: new FormControl()
	});

	ngOnInit(): void {}

	orderList: any = [];

	searchByDate() {
		let { startDate, endDate } = this.dateRef.value;
		startDate = moment(startDate).startOf('day').format();
		endDate = moment(endDate).endOf('day').format();
		let data = { startDate, endDate };
		this.reportService.retrieveReportByDate(data).subscribe((result) => (this.orderList = result), (error) => console.log(error));
	}
}
