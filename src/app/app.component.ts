import { Component } from '@angular/core';
import { Hero }      from './hero';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: '<hero-form></hero-form>'
})
export class AppComponent  
	{ 
		title = 'Tour of Heroes';
heroes = [
  new Hero(1, 'Windstorm',''),
  new Hero(13, 'Bombasto',''),
  new Hero(15, 'Magneta',''),
  new Hero(20, 'Tornado','')
];
myHero = this.heroes[0];

	}
