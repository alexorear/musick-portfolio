import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PortfolioExamplesService } from '../../services/portfolio-examples.service';

@Component({
	selector: 'misc-work',
	templateUrl: './misc-work.component.html',
	styleUrls: ['./misc-work.component.scss']
})
export class MiscWorkComponent implements OnInit {
	miscExamples$;

	constructor(
		private portfolioApi: PortfolioExamplesService
	) { }

	ngOnInit() {
		this.miscExamples$ = this.portfolioApi.getMiscExamples().subscribe((data) => {
			console.log(data);
		});
	}

}
