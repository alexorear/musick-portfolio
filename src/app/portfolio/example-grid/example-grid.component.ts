import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PortfolioExamplesService } from '../../services/portfolio-examples.service';

@Component({
	selector: 'example-grid',
	templateUrl: './example-grid.component.html',
	styleUrls: ['./example-grid.component.scss']
})
export class ExampleGridComponent implements OnInit {
	logoExamples$: Observable<PortfolioExample[]>;

	constructor(
		private portfolioApi: PortfolioExamplesService
	) { }

	ngOnInit() {
		this.logoExamples$ = this.portfolioApi.getLogoExamples();
	}

}
