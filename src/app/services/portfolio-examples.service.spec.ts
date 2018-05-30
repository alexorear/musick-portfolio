import { TestBed, inject } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { Portfolio } from '../data/porfolio-examples';
import { PortfolioExamplesService } from './portfolio-examples.service';

describe('PortfolioExamplesService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [PortfolioExamplesService]
		});
	});

	it('should be created', inject([PortfolioExamplesService], (service: PortfolioExamplesService) => {
		expect(service).toBeTruthy();
	}));

	describe('service methods', () => {
		let service: PortfolioExamplesService;

		beforeEach(() => {
			service = new PortfolioExamplesService;
		});

		describe('get portfolioExamples', () => {
			it('should return an observable of all portfolio examples', () => {
				expect(service.portfolioExamples).toEqual(Observable.of(Portfolio));
			});
		});

		describe('getPortfolioPiece', () => {
			it('should return a single portfolio example', () => {
				const expected = {
					id: 1,
					category: 'logo',
					title: 'Jen’s Resale Boutique',
					description: 'A fun, upbeat consignment shop catered to everyone ages 13 to 100!',
					primaryUrl: 'assets/images/portfolio-examples/logos/JenBCard_Full2.jpg',
					primaryThumbUrl: 'assets/images/portfolio-examples/logos/thumbnails/JensResale.jpg'
				};
				expect(service.getPortfolioPiece(1)).toEqual(Observable.of(expected));
			});
		});
	});
});
