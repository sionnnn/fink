import {Collapse} from '../../lib/components/pkg.collapse/collapse';

window.addEventListener('styleguide:onRendered', function() {
	var collapse = new Collapse('click',document.querySelectorAll('body /deep/ .collapse'));
}, false);
