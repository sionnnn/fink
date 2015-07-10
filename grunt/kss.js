module.exports = {
	options: {
		css: '<%= paths.dest.root %>/assets/css/site.css'
	},
	dist: {
		files: {
			'docs/styleguide/': '<%= paths.dest.root %>/assets/css'
		}
	}
};