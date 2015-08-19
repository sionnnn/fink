casper.start('./public/index.html')
	.then(function() {
		phantomcss.screenshot('body', 'body');
		//phantomcss.screenshot('.cta', 'cta');
	})
	/**.then(function() {
		//this.mouse.move('.cta');
		//phantomcss.screenshot('.cta', 'cta hover');
	});*/

casper.start('./public/kitchensink.html')
.then(function() {
	phantomcss.screenshot('.btn', 'button');
	//phantomcss.screenshot('.cta', 'cta');
})
.then(function() {
	this.mouse.move('.btn');
	phantomcss.screenshot('.btn', 'button hover');
});