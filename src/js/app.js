import {Collapse} from '../../lib/components/pkg.collapse/collapse';
import {Ajax} from '../../lib/components/js.ajax/ajax';
import {events} from '../../lib/components/js.events/events';
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
