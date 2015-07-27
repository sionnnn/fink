module.exports = {
	options: {
        sourceMap: false,
    },
	build: {
        /*files: {
            '<%= paths.dest.root %>/assets/css/site.css': '<%= paths.src.root %>/scss/site.scss'
        }*/
		files: [
		    {
		        expand: true,
		        cwd: '<%= paths.src.root %>/scss/',
		        src: '**/*.scss',
		        dest: '<%= paths.dest.root %>/assets/css/',
				ext: '.css'
		    }
		]
	}
}