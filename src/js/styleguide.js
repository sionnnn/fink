import {Collapse} from '../../lib/components/pkg.collapse/collapse';
import {Tooltips} from '../../lib/components/pkg.tooltip/tooltip';

window.addEventListener('styleguide:onRendered', function() {
	var collapse = new Collapse('click',document.querySelectorAll('body /deep/ .collapse'));
	var tooltips = new Tooltips();
}, false);
