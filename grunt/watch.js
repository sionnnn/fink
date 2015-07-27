module.exports = {
	scripts:{
		files: ['<%= paths.src.root %>/**/*.js'],
	    tasks: [ 'es6'],
	    options: {
	      spawn: false,
	    },
	},
	ts:{
		files: ['<%= paths.src.root %>/**/*.ts'],
	    tasks: ['es6'],
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
	    tasks: ['newer:sass'],
	    options: {
	      spawn: false,
	    },
	},
	images:{
		files: ['<%= paths.src.root %>/images/*.*','<%= paths.src.root %>/scss/images/*.*'],
	    tasks: ['imagemin'],
	    options: {
	      spawn: false,
	    },
	},
	images_webp:{
		files: ['<%= paths.src.root %>/images/*.*','<%= paths.src.root %>/scss/images/*.*'],
	    tasks: ['imagemin','webp'],
	    options: {
	      spawn: false,
	    },
	},
	styleguide: {
		files: '**/*.scss',
		tasks: ['sass', 'gulp:styleguide-generate', 'gulp:styleguide-applystyles']
	}
};