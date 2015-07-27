module.exports = function(grunt) {
	/**
	grunt execution time
	*/
	require('time-grunt')(grunt);
	require('jit-grunt')(grunt);

	var gulp = require('gulp'),
		styleguide = require('sc5-styleguide');

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
            pattern: [
				/*'grunt-*',
				'!grunt-jscs', 
				'!grunt-babel', '!grunt-browserify'
				'!grunt-contrib-imagemin','!grunt-webp','!grunt-contrib-cssmin','!grunt-contrib-uglify',
				'!grunt-htmlhint','!grunt-contrib-csslint','!grunt-eslint',
				'!grunt-sass-convert',
				'!grunt-jsdoc','!grunt-phantomas',
				'!grunt-stripmq'*/
			],
            config: require('./package.json'),
            scope: 'devDependencies'
        },
		es6: 'babel', //"babel" or "typescript"
		webp_images:true
	};


	/**
	default_tasks / default_watch_tasks array
	configuration from only this file
	*/
	var default_watch_tasks = [
		'webworkers',
		'css'
	];
	var default_tasks = [
		'copy',
		'sass'
	];
	/**
	images
	*/
	if (data.webp_images){
		default_watch_tasks.push('images_webp');
		default_tasks.push('webp');
	}
	else {
		default_watch_tasks.push('images');
	}
	/**
	javascript es6 compiler
	*/
    if (data.es6) {
		var watch_task = (data.es6 == 'babel') ? 'scripts' : 'ts';
		default_watch_tasks.push('scripts');
        grunt.registerTask('es6', [data.es6, 'browserify:'+data.es6]);
		default_tasks.push('es6');
    }
	/**
	merge watch tasks
	*/
	grunt.config.merge({
		focus: {
			default_watch_tasks: {
				include: default_watch_tasks
			},
			prod: {
				include: [],
				exclude: []
			},
		}
	});
	/**
	gulp/JSCS tasks can't be loaded in via multi task as it sucks
	*/
	grunt.config.merge({
		gulp: {
			'styleguide-generate': function() {
			var outputPath = 'docs/styleguide';
				return gulp.src(['src/scss/**/*.scss'])
				.pipe(styleguide.generate({
					title: data.pkg.name + ' styleguide',
					server: true,
					rootPath: outputPath,
					overviewPath:'docs/overview.md'
				}))
				.pipe(gulp.dest(outputPath));
			},
			'styleguide-applystyles': function() {
				gulp.src('src/scss/**/*.scss')
				.pipe(styleguide.applyStyles())
				.pipe(gulp.dest('docs/styleguide'));
			}
		}
	});
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
	//grunt.loadNpmTasks('grunt-jscs');

	/**
	register tasks
	*/
	grunt.registerTask('styleguide', ['gulp:styleguide-generate', 'gulp:styleguide-applystyles','watch:styleguide']);

	/**
	console.log(default_tasks) //dev // copy, sass, webp, es6
	console.log(default_watch_tasks) // focus:dev // webworkers, css, images_webp, scripts
	*/
	grunt.registerTask('server', ['connect','focus:default_watch_tasks']);
	grunt.registerTask('default_tasks', default_tasks);

	grunt.registerTask('build', ['default_tasks','concurrent:validate_codestyle','stripmq','concurrent:minify']); // 'uncss' ???
    /**
	default
	*/
    grunt.registerTask('default', ['default_tasks','server']);
    grunt.registerTask('default', []);


	/**
	only load tasks when needed - performance
	*/	
	grunt.registerTask('stripmq', [], function () {
	    data.loadGruntTasks.pattern = ['grunt-stripmq'];
	    require('load-grunt-config')(grunt,{data: data});
	    grunt.task.run('stripmq');
	});
	grunt.registerTask('docs', [], function () {
	    data.loadGruntTasks.pattern = ['grunt-jsdoc','grunt-phantomas'];
	    require('load-grunt-config')(grunt,{data: data});
	    grunt.task.run('jsdoc','phantomas');
	});
	grunt.registerTask('codestyle', [], function () {
	    data.loadGruntTasks.pattern = ['grunt-sass-convert'];
		grunt.loadNpmTasks('grunt-jscs');
	    require('load-grunt-config')(grunt,{data: data});
	    grunt.task.run('jscs','sass-convert');
	});
	grunt.registerTask('validate', [], function () {
	    data.loadGruntTasks.pattern = ['grunt-htmlhint','grunt-contrib-csslint','grunt-eslint'];
	    require('load-grunt-config')(grunt,{data: data});
	    grunt.task.run('eslint','csslint','htmlhintplus');
	});
	grunt.registerTask('minify', [], function () {
	    data.loadGruntTasks.pattern = ['grunt-contrib-imagemin','grunt-webp','grunt-contrib-cssmin','grunt-contrib-uglify'];
	    require('load-grunt-config')(grunt,{data: data});
	    grunt.task.run('imagemin','cssmin','uglify');
	});
	
};
