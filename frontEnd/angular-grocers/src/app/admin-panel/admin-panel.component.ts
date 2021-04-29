import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-admin-panel',
	templateUrl: './admin-panel.component.html',
	styleUrls: [ './admin-panel.component.css' ]
})
export class AdminPanelComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
		this.reloadPage();
	}

	selectedTab: String = '';

	onSelectLink(event: any) {
		this.selectedTab = event.target.name;
	}


	reloadPage() {
		var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
		// Current Time //
		var now = Date.now();
		// Total Process Lenght as Minutes //
		var tenSec = 3 * 1000;
		// End Time of Process //
		var plusTenSec = currentDocumentTimestamp + tenSec;
		if (now > plusTenSec) {
			location.reload();
		}
	}
}
