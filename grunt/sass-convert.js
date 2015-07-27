module.exports = {
	'sass-convert': {
		options: {
			indent: 4
		},
		files: [{
			src: ['<%= paths.src.root %>/scss/**/*.scss']
		}]
	}
};