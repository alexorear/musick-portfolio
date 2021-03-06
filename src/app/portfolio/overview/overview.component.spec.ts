import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { PortfolioExamplesService } from '../../services/portfolio-examples.service';
import { ExampleGridComponent } from '../example-grid/example-grid.component';
import { OverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
	let component: OverviewComponent;
	let fixture: ComponentFixture<OverviewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [
				OverviewComponent,
				ExampleGridComponent
			],
			providers: [ PortfolioExamplesService ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OverviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('section navigation', () => {
		beforeEach(() => {
			this.navBar = fixture.nativeElement;
			this.links = this.navBar.querySelectorAll('li');
		});

		it('should have 3 nav links', () => {
			expect(this.links.length).toBe(3);
		});

		it('first link should be logo design', () => {
			expect(this.links[0].textContent).toContain('Logo Design');
		});

		it('second link should be print design', () => {
			expect(this.links[1].textContent).toContain('Print Design');
		});

		it('first link should be misc work', () => {
			expect(this.links[2].textContent).toContain('Misc Work');
		});

		describe('currentSelection', () => {
			it('should be logo by default', () => {
				expect(component.currentSelection).not.toBe('print');
				expect(component.currentSelection).not.toBe('misc');
				expect(component.currentSelection).toBe('logo');
			});

			it('should change to print when second link is clicked', async(() => {
				this.links[1].click();
				fixture.whenStable();
				expect(component.currentSelection).toBe('print');
			}));

			it('should change to misc when third link is clicked', async(() => {
				this.links[2].click();
				fixture.whenStable();
				expect(component.currentSelection).toBe('misc');
			}));
		});
	});

	describe('page contents', () => {
		it('should contain logo design section', () => {
			const logoSelector = fixture.debugElement.query(By.css('logo-design'));
			expect(logoSelector).toBeDefined();
		});

		it('should contain print design section', () => {
			const printSelector = fixture.debugElement.query(By.css('print-design'));
			expect(printSelector).toBeDefined();
		});

		it('should contain misc work section', () => {
			const miscSelector = fixture.debugElement.query(By.css('misc-work'));
			expect(miscSelector).toBeDefined();
		});
	});
});
