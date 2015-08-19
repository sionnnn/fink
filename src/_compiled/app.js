'use strict';

var _libComponentsPkgCollapseCollapse = require('../../lib/components/pkg.collapse/collapse');

var _libComponentsPkgMobilenavMobilenav = require('../../lib/components/pkg.mobilenav/mobilenav');

var _libComponentsJsAjaxAjax = require('../../lib/components/js.ajax/ajax');

var _libComponentsPkgTooltipTooltip = require('../../lib/components/pkg.tooltip/tooltip');

/*
var $ = require('../../lib/components/jquery/dist/jquery.js');
console.log($);
*/

var worker = new Worker('/assets/js/webworkers/worker.js');
worker.onmessage = function (e) {
	//console.log(e.data);
};
worker.onerror = function (e) {
	//console.log(e);
};
worker.postMessage({ 'value': 'echo from babel testing 123' });

window.data = {
	title: 'data binding'
};

var init = function init() {
	var collapse = new _libComponentsPkgCollapseCollapse.Collapse('click');
	var ajax = new _libComponentsJsAjaxAjax.Ajax();
	var tooltips = new _libComponentsPkgTooltipTooltip.Tooltips();
	var a = 2;
};

window.onload = init;

/* example use of mobile nav */
var menu = document.getElementsByClassName('page__nav');
if (menu.length > 0) {
	for (var m = 0; m < menu.length; m++) {
		var nav = new _libComponentsPkgMobilenavMobilenav.MobileNav(menu[m]);
	}
}