import {Collapse} from '../../lib/components/pkg.collapse/collapse';
import {Tooltips} from '../../lib/components/pkg.tooltip/tooltip';
import {MobileNav} from '../../lib/components/pkg.mobilenav/mobilenav';

window.addEventListener('styleguide:onRendered', function() {
	var collapse = new Collapse('click', document.querySelectorAll('body /deep/ .collapse'));
	var tooltips = new Tooltips();

	var menu = document.querySelectorAll('body /deep/ .page__nav');	
	if (menu.length > 0){
		
		for (var m = 0; m < menu.length; m++){
			var nav = new MobileNav(menu[m], document.querySelectorAll('html /deep/ .page__nav-show'))
			nav.page = document.querySelectorAll('html /deep/ .page')[0];

		}
	}

}, false);

