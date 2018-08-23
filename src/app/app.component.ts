import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'wwlane-core-utility-app';
	myObj = {
		myProperty: [{
			myPropertyName: 'billy'
		},
		{
			myPropertyName: 'sam'
		},
		{
			myPropertyName: null
		},
		{
			myPropertyName: 'chelsea'
		}]
	};
}
