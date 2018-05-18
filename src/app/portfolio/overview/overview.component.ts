import { Component, OnInit } from '@angular/core';

import { PortFolioSection } from '../types/portfolio-section';

@Component({
	selector: 'portfolio-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {
	currentSelection: PortFolioSection;

	ngOnInit() {
		this.currentSelection = 'logo';
	}

}
