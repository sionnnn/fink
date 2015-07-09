module.exports = {
	scripts:{
		files: ['<%= paths.src.root %>/**/*.js'],
	    tasks: ['jscheck','es6'],
	    options: {
	      spawn: false,
	    },
	},
	webworkers:{
		files: ['<%= paths.src.root %>/js/webworkers/*'],
	    tasks: ['copy'],
	    options: {
	      spawn: false,
	    },
	},
	css:{
		files: ['<%= paths.src.root %>/scss/**/*.scss'],
	    tasks: ['sass'],
	    options: {
	      spawn: false,
	    },
	}
};