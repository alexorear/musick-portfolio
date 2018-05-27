import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PortfolioExamplesService } from '../services/portfolio-examples.service';
import { LogoDesignComponent } from './logo-design/logo-design.component';
import { MiscWorkComponent } from './misc-work/misc-work.component';
import { OverviewComponent } from './overview/overview.component';
import { PrintDesignComponent } from './print-design/print-design.component';
import { ExampleDetailComponent } from './example-detail/example-detail.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		LogoDesignComponent,
		MiscWorkComponent,
		PrintDesignComponent,
		OverviewComponent,
		ExampleDetailComponent
	],
	providers: [PortfolioExamplesService],
	exports: [
		OverviewComponent
	]
})
export class PortfolioModule { }
