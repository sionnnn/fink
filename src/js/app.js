import {Collapse} from '../../lib/components/pkg.collapse/collapse';
import {MobileNav} from '../../lib/components/pkg.mobilenav/mobilenav';
import {Ajax} from '../../lib/components/js.ajax/ajax';

/*
var $ = require('../../lib/components/jquery/dist/jquery.js');
console.log($);
*/

let worker = new Worker('/assets/js/webworkers/worker.js');
worker.onmessage = function(e) {
	//console.log(e.data);
};
worker.onerror = function(e) {
	//console.log(e);
};
worker.postMessage({'value':'echo from babel'});

window.data = {
	title: 'data binding'
}

var init = function() {
	var collapse = new Collapse('click');
	var ajax = new Ajax();
}

window.onload = init;

/* example use of mobile nav */
let menu = document.getElementsByClassName('page__nav');
if(menu.length > 0){
	for(let m = 0; m < menu.length; m++){
		let nav = new MobileNav(menu[m])
	}
	
}
