module.exports = {
	options: {
		template: {
			src: 'node_modules/grunt-styleguide/templates/kss/templates'
		},
		framework: {
			name: 'kss'
		}
	},
	dist: {
		files: {
			'docs/styleguide/': '<%= paths.dest.root %>/assets/css/site.css'
		}
	}
};