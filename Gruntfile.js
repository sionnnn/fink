module.exports = function(grunt) {

	require('time-grunt')(grunt);

	var gulp = require('gulp'),
		styleguide = require('sc5-styleguide');

	var conf = {
    	pkg: grunt.file.readJSON('package.json'),
		/**
		base
		*/
		watch:{
			css:{
				files: ['src/scss/**/*.scss'],
			    tasks: ['newer:sass'],
			    options: {
			      spawn: false,
			    },
			},
			js:{
				files: ['./src/**/*.js'],
			    tasks: ['newer:browserify:babel'],
			    options: {
			      spawn: false,
			    },
			},
			styleguide: {
				files: 'src/**/*.scss',
				tasks: ['sass', 'gulp:styleguide-generate', 'gulp:styleguide-applystyles']
			}
		},
		connect :{
			server: {
		        options: {
		            port: 8080,
					keepalive:false,
		            base: './public'
		        }
		    }
		},
		copy: {
			webworkers: {
		        cwd: 'src/js/webworkers',
		        src:['**/*'],
				dest: 'public/assets/js/webworkers',
		        expand: true
		    }
		},
		/**
		codestyle
		*/
		csslint :{
			options: {
		        force: true
		    },
		    lax: {
		        options: {
		            force: true,
		            import: false,
		            csslintrc: 'rules.csslintrc'
		        },
		        src: ['public/assets/css/site.css']
		    }
		},
		jscs: {
			main:{
				src: ['src/js/**/*.js'],
				options: {
					config: '.jscsrc',
					esnext: true,
					verbose: true,
					fix:true
				}
			}
		},
		/**
		minify
		*/
		imagemin:{
			dynamic: {                       
				options: {                      
				optimizationLevel: 1
				},
				files: [{
					expand: true,
					cwd: 'src/images/', 
					src: ['**.{png,jpg,gif}'], 
					dest: 'public/assets/images/', 
				},{
					expand: true,
					cwd: 'src/scss/images/', 
					src: ['**.{png,jpg,gif}'], 
					dest: 'public/assets/css/images/', 
				}]
			}
		},
		cssmin:{
			combine: {
				files: {
					'public/assets/css/site.min.css': ['src/assets/css/site.css']
				}
			}
		},
		uglify:{
			js: {
		        src: 'public/assets/js/app.js',
		        dest: 'public/assets/js/app.min.js'
		    },
			webworkers: {
				files: [{
					expand: true,
					cwd: 'public/assets/js/webworkers/',
					src: '**/*.js',
					dest: 'public/assets/js/webworkers/',
					ext: '.js'
				}]
		    }
		},
		webp: {
	        dynamic: {
	            files: [{
	                expand: true,
	                cwd: 'src/images/',
	                src: '**.{png,jpg,gif}',
	                dest: 'public/assets/images/'
	            },
	            {
	                expand: true,
	                cwd: 'src/scss/images/',
	                src: '**.{png,jpg,gif}',
	                dest: 'public/assets/css/images/'
	            }],
	            options: {
	                binpath: require('webp-bin').path,
	                preset: 'photo',
	                verbose: true,
	                quality: 100,
	                alphaQuality: 100,
	                compressionMethod: 6,
	                segments: 4,
	                psnr: 42,
	                sns: 50,
	                filterStrength: 40,
	                filterSharpness: 3,
	                simpleFilter: true,
	                partitionLimit: 50,
	                analysisPass: 6,
	                multiThreading: true,
	                lowMemory: false,
	                alphaMethod: 0,
	                alphaFilter: 'best',
	                alphaCleanup: true,
	                noAlpha: false,
	                lossless: false,
	            }
	        }
	    },
		/**
		validate
		*/
		eslint: {
			target: ['.src/js/**/*.js'],
		    options: {
		   		configFile: '.eslintrc'
			}
		},
		csslint: {
			options: {
		        force: true
		    },
		    lax: {
		        options: {
		            force: true,
		            import: false,
		            csslintrc: 'rules.csslintrc'
		        },
		        src: ['public/assets/css/site.css']
		    }
		},
		htmlhintplus: {
			options: {
		        htmlhintrc: '.htmlhintrc'
		    },
		    html: {
		        src: ['public/**/*.html']
		    }
		},
		/**
		css
		*/
		sass :{
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
				        cwd: 'src/scss/',
				        src: '**/*.scss',
				        dest: 'public/assets/css/',
						ext: '.css'
				    }
				]
			}
		},
		stripmq: {
			options: {
				// Include only styles for a screen 800px wide
				width: 1024,
				type: 'screen',
				//'device-width': int
				//height: int,
				//'device-height': int,
				//resolution: '1dppx',
				//orientation : 'landscape',
				//'aspect-ratio' : int
				//color
			},
			all: {
				files: {
					'public/assets/css/site.legacy.css': 'public/assets/css/site.css'
				}
			},
		},
		/**
		js
		*/
		browserify: {
			babel: {
		        options: {
		           transform: [
		              ["babelify", {
		                 loose: "all"
		              }]
		           ],
		          modules:"common"
		        },
		        files: {
		           "./public/assets/js/app.js": ["./src/js/app.js"]
		        }
		    }
		},
		/**
		docs
		*/
		gulp: {
			'styleguide-generate': function() {
				var outputPath = 'docs/styleguide';

				return gulp.src(['src/scss/**/*.scss'])
				.pipe(styleguide.generate({
					title: 'F_NK styleguide',
					server: true,
					rootPath: 'docs/styleguide',
					overviewPath:'docs/overview.md'
				}))
				.pipe(gulp.dest('docs/styleguide'));
			},
			'styleguide-applystyles': function() {
				gulp.src('src/scss/**/*.scss')
					.pipe(styleguide.applyStyles())
					.pipe(gulp.dest('docs/styleguide'));
			}
		},
		jsdoc:{
			dist : {
		        src: ['public/assets/js/**/*'], 
		        options: {
		            destination: 'docs/jsdoc'
		        }
		    }
		},
		phantomas: {
			site : {
				options : {
					indexPath : './docs/performance/',
					options   : {},
					url       : 'public/index.html',
					buildUi   : true
				}
			}
		}
	};

	grunt.initConfig(conf);
	require('jit-grunt')(grunt);

    grunt.registerTask('codestyle', ['newer:csslint','newer:jscs:main']);
    grunt.registerTask('minify', ['newer:imagemin','newer:cssmin','newer:uglify','newer:webp']);
    grunt.registerTask('validate', ['newer:eslint','newer:csslint','newer:htmlhintplus']);
    grunt.registerTask('docs', ['newer:jsdoc','newer:phantomas','gulp:styleguide-generate', 'gulp:styleguide-applystyles']);
	grunt.registerTask('styleguide', ['gulp:styleguide-generate', 'gulp:styleguide-applystyles','watch:styleguide']);
	
    grunt.registerTask('build', ['copy','newer:sass','newer:browserify:babel','codestyle','validate','stripmq','minify','docs']);
	grunt.registerTask('commit', ['build']);

    grunt.registerTask('default', ['copy','connect','watch']);
};
