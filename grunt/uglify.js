module.exports = {
	js: {
        src: '<%= paths.dest.root %>/assets/js/app.js',
        dest: '<%= paths.dest.root %>/assets/js/app.min.js'
    },
	my_target: {
		files: [{
			expand: true,
			cwd: '<%= paths.dest.root %>/assets/js/webworkers/',
			src: '**/*.js',
			dest: '<%= paths.dest.root %>/assets/js/webworkers/',
			ext: '.js'
		}]
    }
}