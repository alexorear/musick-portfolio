import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';

import { Portfolio } from '../../data/porfolio-examples';
import { PortfolioExamplesService } from '../../services/portfolio-examples.service';
import { ExampleDetailComponent } from './example-detail.component';
import { LogoDesignComponent } from '../logo-design/logo-design.component';
import { MiscWorkComponent } from '../misc-work/misc-work.component';
import { OverviewComponent } from '../overview/overview.component';
import { PrintDesignComponent } from '../print-design/print-design.component';

describe('ExampleDetailComponent', () => {
	let component: ExampleDetailComponent;
	let fixture: ComponentFixture<ExampleDetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [
				ExampleDetailComponent,
				LogoDesignComponent,
				MiscWorkComponent,
				OverviewComponent,
				PrintDesignComponent
			],
			providers: [ PortfolioExamplesService,
				{
					provide: ActivatedRoute,
					useValue: {
						params: Observable.of({id: '1'})
					}
				}
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ExampleDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('portfolioExample', () => {
		it('should get pulled from the api based on router param', () => {
			expect(component.portfolioExample).toEqual(Portfolio[0]);
		});
	});

	describe('template', () => {
		it('should display example image', () => {
			const img = fixture.nativeElement.querySelector('img');
			expect(img.src).toContain('assets/images/portfolio-examples/logos/JenBCard_Full2.jpg');
		});

		it('should display the example title', () => {
			const title = fixture.nativeElement.querySelector('h1');
			expect(title.textContent).toContain('Jen’s Resale Boutique');
		});

		it('should display the example description', () => {
			const title = fixture.nativeElement.querySelector('p');
			const expected = 'A fun, upbeat consignment shop catered to everyone ages 13 to 100!';
			expect(title.textContent).toContain(expected);
		});
	});
});
