import {ExampleClass} from './modules/example';
import {Ajax} from '../../lib/components/js.ajax/ajax';
/*var $ = require('../../lib/components/jquery/dist/jquery.js');

console.log($);
*/
let eg = new ExampleClass('babel eg');
console.log(eg.echo('echo test'));

let worker = new Worker('/assets/js/webworkers/worker.js');
worker.onmessage = function(e) {
	console.log(e.data);
};
worker.onerror = function(e) {
	console.log(e);
};
worker.postMessage({'value':'echo from babel test change'});

var a = new Ajax();
console.log(a);

window.data = {
	title: 'data binding'
};

