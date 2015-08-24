'use strict';

var _libComponentsPkgCollapseCollapse = require('../../lib/components/pkg.collapse/collapse');

var _libComponentsPkgTooltipTooltip = require('../../lib/components/pkg.tooltip/tooltip');

var _libComponentsPkgMobilenavMobilenav = require('../../lib/components/pkg.mobilenav/mobilenav');

window.addEventListener('styleguide:onRendered', function () {
	var collapse = new _libComponentsPkgCollapseCollapse.Collapse('click', document.querySelectorAll('body /deep/ .collapse'));
	var tooltips = new _libComponentsPkgTooltipTooltip.Tooltips();

	var menu = document.querySelectorAll('body /deep/ .page__nav');
	if (menu.length > 0) {

		for (var m = 0; m < menu.length; m++) {
			var nav = new _libComponentsPkgMobilenavMobilenav.MobileNav(menu[m], document.querySelectorAll('html /deep/ .page__nav-show'));
			nav.page = document.querySelectorAll('html /deep/ .page')[0];
		}
	}
}, false);