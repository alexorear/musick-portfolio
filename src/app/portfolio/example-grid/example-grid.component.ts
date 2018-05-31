import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PortfolioSection } from '../types/portfolio-section';
import { PortfolioExamplesService } from '../../services/portfolio-examples.service';

@Component({
	selector: 'example-grid',
	templateUrl: './example-grid.component.html',
	styleUrls: ['./example-grid.component.scss']
})
export class ExampleGridComponent implements OnChanges {
	@Input() currentSelection: PortfolioSection;
	portfolioExamples$: Observable<PortfolioExample[]>;

	constructor(
		private portfolioApi: PortfolioExamplesService
	) { }

	ngOnChanges() {
		switch (this.currentSelection) {
			case 'logo':
				this.portfolioExamples$ = this.portfolioApi.getLogoExamples();
				break;
			case 'print':
				this.portfolioExamples$ = this.portfolioApi.getPrintExamples();
				break;
			case 'misc':
			this.portfolioExamples$ = this.portfolioApi.getMiscExamples();
				break;
		}
	}

}
