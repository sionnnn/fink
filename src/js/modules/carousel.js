//import {events} from '../js.events/events';
//import * as dom from '../js.dom/dom';
/**
* @class Carousel
* @classdesc JS carousel panels
* @global
*/


class Carousel {
    /**
     * @constructor
     */
    constructor() {
		this.pageWidth = 100;
		this.carousels = [];
		/**
		let elems = document.querySelectorAll('.carousel');
		this.carousels = [];

		console.log(this);

		for(var i =0, il = elems.length; i <il; i++) {
			this.carousels.push(new Carouselle(elems[i],i));
		};
		*/
		console.log('Carousel constructor')
		//var c = Carouselle.init();
		//console.dir(c);
		//console.log(c.pageWidth());
		//console.log(c.setWidth());
		this.init();
	}

	init(){
		let elems = document.querySelectorAll('.carousel');

		for(var i =0, il = elems.length; i <il; i++) {
			console.log('array init')
			this.carousels.push(new Carouselle());
		};
	}

	pageWidth(){
		return this.pageWidth;
	}
}

class Carouselle extends Carousel {
    /**
     * @constructor
     */
    constructor() {
		super();
		//console.log(carousel)
		/*
		this.i = i;
		console.log('Carouselle')
		console.log(this)
		*/
	}

	init(){
		console.log('Carouselle init')
		//return new Carouselle();
	}

	setWidth(){
		return "setWidth";
	}
}

export { Carousel, Carouselle };
