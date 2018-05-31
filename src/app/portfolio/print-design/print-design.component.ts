import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PortfolioExamplesService } from '../../services/portfolio-examples.service';

@Component({
	selector: 'print-design',
	templateUrl: './print-design.component.html',
	styleUrls: ['./print-design.component.scss']
})
export class PrintDesignComponent implements OnInit {
	printExamples$;

	constructor(
		private portfolioApi: PortfolioExamplesService
	) { }

	ngOnInit() {
		this.printExamples$ = this.portfolioApi.getPrintExamples().subscribe();
	}

}
