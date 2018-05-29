import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		HeaderComponent,
		NavigationComponent
	],
	exports: [
		HeaderComponent,
		NavigationComponent
	]
})
export class CoreModule { }
