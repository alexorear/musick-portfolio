import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PortfolioExamplesService } from '../../services/portfolio-examples.service';
import { LogoDesignComponent } from './logo-design.component';

describe('LogoDesignComponent', () => {
	let component: LogoDesignComponent;
	let fixture: ComponentFixture<LogoDesignComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [ LogoDesignComponent ],
			providers: [PortfolioExamplesService]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LogoDesignComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
