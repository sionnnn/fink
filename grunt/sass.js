module.exports = {
	options: {
        sourceMap: false
    },
	build: {
        files: {
            '<%= paths.dest.root %>/assets/css/site.css': '<%= paths.src.root %>/scss/*.scss'
        }
    }
};