import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Portfolio } from '../data/porfolio-examples';

@Injectable()
export class PortfolioExamplesService {

	get portfolioExamples(): Observable<PortfolioExample[]> {
		return Observable.of(Portfolio);
	}

	getPortfolioPiece(id: number): Observable<PortfolioExample> {
		const portfolioExample = Portfolio.find((example) => {
			return example.id === id;
		});
		return Observable.of(portfolioExample);
	}

	getPrintExamples(): Observable<PortfolioExample[]> {
		const examples = Portfolio.filter((example) => {
			return example.category === 'print';
		});
		return Observable.of(examples);
	}

	getLogoExamples(): Observable<PortfolioExample[]> {
		const examples = Portfolio.filter((example) => {
			return example.category === 'logo';
		});
		return Observable.of(examples);
	}

	getMiscExamples(): Observable<PortfolioExample[]> {
		const examples = Portfolio.filter((example) => {
			return example.category === 'misc';
		});
		return Observable.of(examples);
	}

}
