import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './portfolio/overview/overview.component';
import { ExampleDetailComponent } from './portfolio/example-detail/example-detail.component';

const appRoutes: Routes = [
	{ path: '', component: OverviewComponent },
	{ path: 'example/:id', component: ExampleDetailComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {}
