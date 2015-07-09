module.exports = {
	options: {
		sourceMap: false,
        modules:"common"
	},
	dist: {
		files: {
		   './<%= paths.dest.root %>/assets/js/webworkers/worker.js': './<%= paths.src.root %>/js/webworkers/worker.js'
		}
	}
};