import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavigationComponent } from './core/header/navigation/navigation.component';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				HeaderComponent,
				NavigationComponent
			],
		}).compileComponents();
	}));
});
