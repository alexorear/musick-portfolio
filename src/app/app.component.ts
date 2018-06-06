import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import 'rxjs/add/operator/filter';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.router.events.filter((event) => event instanceof NavigationEnd).subscribe(() => {
			// scroll to top of nav bar when navigating to new page
			const content = document.getElementById('content');
			window.scrollTo({
				'behavior': 'smooth',
				'left': 0,
				'top': content.offsetTop - 70
			});
		});

	}
}
