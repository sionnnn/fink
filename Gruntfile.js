module.exports = function(grunt) {
	var data = {
		pkg: grunt.file.readJSON('package.json'),
		paths: {
			src:{
				root:'src',
			},
			dest:{
				root:'public',
			}
		},
		loadGruntTasks: {
            pattern: ['grunt-*','!grunt-jscs'],
            config: require('./package.json'),
            scope: 'devDependencies'
        },
		server:true,
		es6: 'babel', //"babel" or "typescript"
		jscs:true
	};

    require('load-grunt-config')(grunt,{data: data});

	/**
	JSCS can't be loaded in via multi task as it sucks
	*/
	grunt.config.merge({
		jscs: {
			src: ['Gruntfile.js','src/js/**/*.js'],
			options: {
				config: '.jscsrc',
				esnext: true,
				verbose: true,
				fix:true
			}
		}
	});
	grunt.loadNpmTasks('grunt-jscs');
	grunt.registerTask('jscheck', ['jscs', 'eslint']);
    //default
    grunt.registerTask('default', ['copy', 'jscheck', 'es6', 'jsdoc', 'sass', 'kss', 'server']);
};
