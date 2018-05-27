import { Component, OnInit } from '@angular/core';

import { PortfolioSection } from '../types/portfolio-section';

@Component({
	selector: 'portfolio-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {
	currentSelection: PortfolioSection;

	ngOnInit() {
		this.currentSelection = 'logo';
	}

}
