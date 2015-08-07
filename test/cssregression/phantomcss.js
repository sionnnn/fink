casper.start('./public/index.html')
	.then(function() {
		phantomcss.screenshot('body', 'body');
		//phantomcss.screenshot('.cta', 'cta');
	})
	/**.then(function() {
		//this.mouse.move('.cta');
		//phantomcss.screenshot('.cta', 'cta hover');
	});*/