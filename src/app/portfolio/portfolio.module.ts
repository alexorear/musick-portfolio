import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './overview/overview.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		OverviewComponent
	],
	exports: [
		OverviewComponent
	]
})
export class PortfolioModule { }
