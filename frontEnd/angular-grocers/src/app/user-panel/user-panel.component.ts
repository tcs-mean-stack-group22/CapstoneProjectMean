import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.reloadPage();
  }

  selectedTab: String = '';

	onSelectLink(event: any) {
		this.selectedTab = event.target.name;
	}


  reloadPage() {
		var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
    console.log("Page is not loading")
		// Current Time //
		var now = Date.now();
		// Total Process Lenght as Minutes //
		var fiveSec = 3 * 1000;
		// End Time of Process //
		var plusTenSec = currentDocumentTimestamp + fiveSec;
		if (now > plusTenSec) {
			location.reload();
		}
	}

}
