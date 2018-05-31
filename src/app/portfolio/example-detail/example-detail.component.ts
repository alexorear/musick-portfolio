import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { PortfolioExamplesService } from '../../services/portfolio-examples.service';
@Component({
	selector: 'app-example-detail',
	templateUrl: './example-detail.component.html',
	styleUrls: ['./example-detail.component.scss']
})
export class ExampleDetailComponent implements OnInit {
	portfolioExample: PortfolioExample;

	constructor(
		private portfolioApi: PortfolioExamplesService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe((param) => {
			this.portfolioApi.getPortfolioPiece(+param.id).subscribe((example) => {
				this.portfolioExample = example;
			});
		});
	}

}
