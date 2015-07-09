module.exports = {
	webworkers: {
        cwd: '<%= paths.src.root %>/js/webworkers',
        src:['**/*'],
		dest: '<%= paths.dest.root %>/assets/js/webworkers',
        expand: true
    }
};