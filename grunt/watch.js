module.exports = {
	scripts:{
		files: ['<%= paths.src.root %>/**/*.js'],
	    tasks: ['jscheck','es6'],
	    options: {
	      spawn: false,
	    },
	}
};