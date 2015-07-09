(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _modulesExample = require('./modules/example');

var eg = new _modulesExample.ExampleClass('babel eg');
console.log(eg.echo('echo test'));

var worker = new Worker('assets/js/webworkers/worker.js');
worker.onmessage = function (e) {
	console.log(e.data);
};
worker.onerror = function (e) {
	console.log(e);
};
worker.postMessage({ 'value': 'echo from babel' });

},{"./modules/example":2}],2:[function(require,module,exports){
/**
 * @class ExampleClass
 * @classdesc FINK definition example module
 */
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExampleClass = (function () {
    /**
     * @constructor
     * @param {string} str
     * @property {string} output
     */

    function ExampleClass(str) {
        _classCallCheck(this, ExampleClass);

        this.output = str;
    }

    /**
    * @memberOf ExampleClass
    * @param {string} str
    * @returns {string}
    */

    ExampleClass.prototype.echo = function echo(str) {
        //return this.output + " " + str;
        return this.output + " " + str;
    };

    return ExampleClass;
})();

exports.ExampleClass = ExampleClass;

},{}]},{},[1]);
