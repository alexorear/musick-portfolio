import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PortfolioExamplesService } from '../../services/portfolio-examples.service';

@Component({
	selector: 'logo-design',
	templateUrl: './logo-design.component.html',
	styleUrls: ['./logo-design.component.scss']
})
export class LogoDesignComponent implements OnInit {
	logoExamples$;

	constructor(
		private portfolioApi: PortfolioExamplesService
	) { }

	ngOnInit() {
		this.logoExamples$ = this.portfolioApi.getLogoExamples().subscribe((data) => {
			console.log(data);
		});
	}

}
