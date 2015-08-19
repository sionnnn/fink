'use strict';

var _libComponentsPkgCollapseCollapse = require('../../lib/components/pkg.collapse/collapse');

var _libComponentsPkgTooltipTooltip = require('../../lib/components/pkg.tooltip/tooltip');

window.addEventListener('styleguide:onRendered', function () {
	var collapse = new _libComponentsPkgCollapseCollapse.Collapse('click', document.querySelectorAll('body /deep/ .collapse'));
	var tooltips = new _libComponentsPkgTooltipTooltip.Tooltips();
}, false);