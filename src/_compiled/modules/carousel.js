//import {events} from '../js.events/events';
//import * as dom from '../js.dom/dom';
/**
* @class Carousel
* @classdesc JS carousel panels
* @global
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Carousel = (function () {
	/**
  * @constructor
  */

	function Carousel() {
		_classCallCheck(this, Carousel);

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
		console.log('Carousel constructor');
		//var c = Carouselle.init();
		//console.dir(c);
		//console.log(c.pageWidth());
		//console.log(c.setWidth());
		this.init();
	}

	_createClass(Carousel, [{
		key: 'init',
		value: function init() {
			var elems = document.querySelectorAll('.carousel');

			for (var i = 0, il = elems.length; i < il; i++) {
				console.log('array init');
				this.carousels.push(new Carouselle());
			};
		}
	}, {
		key: 'pageWidth',
		value: function pageWidth() {
			return this.pageWidth;
		}
	}]);

	return Carousel;
})();

var Carouselle = (function (_Carousel) {
	_inherits(Carouselle, _Carousel);

	/**
  * @constructor
  */

	function Carouselle() {
		_classCallCheck(this, Carouselle);

		_get(Object.getPrototypeOf(Carouselle.prototype), 'constructor', this).call(this);
		//console.log(carousel)
		/*
  this.i = i;
  console.log('Carouselle')
  console.log(this)
  */
	}

	_createClass(Carouselle, [{
		key: 'init',
		value: function init() {
			console.log('Carouselle init');
			//return new Carouselle();
		}
	}, {
		key: 'setWidth',
		value: function setWidth() {
			return "setWidth";
		}
	}]);

	return Carouselle;
})(Carousel);

exports.Carousel = Carousel;
exports.Carouselle = Carouselle;