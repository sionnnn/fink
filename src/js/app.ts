/// <reference path="./lib/jquery.d.ts" />
import $ = require("jquery");
//use require to import jquery
console.log($);

import {ExampleClass} from './modules/example';

let eg = new ExampleClass('typescript eg');
console.log(eg.echo('echo'));
console.dir(eg);

let worker = new Worker('assets/js/webworkers/worker.js');
worker.onmessage = function(e) {
	console.log(e.data);
};
worker.onerror = function(e) {
	console.log(e);
};
worker.postMessage({'value':'echo from typescript'});
