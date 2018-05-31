import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PortfolioExamplesService } from '../services/portfolio-examples.service';
import { ExampleGridComponent } from './example-grid/example-grid.component';
import { OverviewComponent } from './overview/overview.component';
import { ExampleDetailComponent } from './example-detail/example-detail.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		ExampleGridComponent,
		OverviewComponent,
		ExampleDetailComponent
	],
	providers: [PortfolioExamplesService],
	exports: [
		OverviewComponent
	]
})
export class PortfolioModule { }
