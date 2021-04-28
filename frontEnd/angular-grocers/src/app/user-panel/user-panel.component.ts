import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("cart", "")
    let infoArray: string[] = ["6088678463ae34129cea56d0"];

    localStorage.setItem("info",JSON.stringify(infoArray) )
  }

  selectedTab: String = '';

	onSelectLink(event: any) {
		this.selectedTab = event.target.name;
	}

}
