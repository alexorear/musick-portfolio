import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LogoDesignComponent } from '../logo-design/logo-design.component';
import { MiscWorkComponent } from '../misc-work/misc-work.component';
import { OverviewComponent } from './overview.component';
import { PrintDesignComponent } from '../print-design/print-design.component';

describe('OverviewComponent', () => {
	let component: OverviewComponent;
	let fixture: ComponentFixture<OverviewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				OverviewComponent,
				LogoDesignComponent,
				MiscWorkComponent,
				PrintDesignComponent
			]
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
