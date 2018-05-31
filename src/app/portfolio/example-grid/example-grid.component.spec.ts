import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PortfolioExamplesService } from '../../services/portfolio-examples.service';
import { ExampleGridComponent } from './example-grid.component';

describe('ExampleGridComponent', () => {
	let component: ExampleGridComponent;
	let fixture: ComponentFixture<ExampleGridComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [ ExampleGridComponent ],
			providers: [PortfolioExamplesService]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ExampleGridComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
