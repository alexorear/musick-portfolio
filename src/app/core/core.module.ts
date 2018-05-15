import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		HeaderComponent,
		NavigationComponent
	]
})
export class CoreModule { }
