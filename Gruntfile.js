module.exports = function(grunt) {

	require('time-grunt')(grunt);
	var app_config = grunt.file.readJSON('grunt_tasks.json');

	var conf = {
    	pkg: grunt.file.readJSON('package.json'),
		/**
		base
		*/
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
					'public/assets/css/site.min.css': ['public/assets/css/site.css']
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
		        sourceMap: false
		    },
			dist: {
		        files: {
					'public/assets/css/site.css': 'src/scss/site.scss'
		        }
			}
		},
		//https://github.com/postcss/postcss
		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer-core')({browsers: ['last 1 version']})
				]
			},
			dist: {
				src: 'public/assets/css/site.css'
			}
		},
		asset_cachebuster: {
			options: {
				buster: "<%= pkg.version %>"+ "." + Date.now().toString(),
				ignore: []
			},
			build: {
		        files: {
		            'public/assets/css/site.min.css':['public/assets/css/site.min.css']
		        }
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
		modernizr: {	    
		    dist: {
		        devFile : "./public/assets/components/modernizr/modernizr.js",
		        outputFile : "./public/assets/components/modernizr/modernizr-custom.js",
		        extra : {
		            shiv : true,
		            printshiv : false,
		            load : true,
		            mq : false,
		            cssclasses : true
		        },
		        extensibility : {
		            addtest : false,
		            prefixed : false,
		            teststyles : false,
		            testprops : false,
		            testallprops : false,
		            hasevents : false,
		            prefixes : false,
		            domprefixes : false,
		            cssclassprefix: ""
		        },
		        uglify : true,
		        tests : grunt.file.readJSON('modernizr.json').tests,
		        parseFiles : false,
		        matchCommunityTests : false,
		        customTests : [
		        	// "dev/custom-tests/ios.js",
		        	// "dev/custom-tests/mobile.js"
		        ]
		    }	 	
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
		},
		/**
		html
		*/
		zetzer: {
			prototype: {
				options: {
					env: {
						title: "<%= pkg.name %> <%= pkg.version %> prototype",
						pageurl: "public"
					},
					partials: "src/html/partials",
					templates: "src/html/templates",
					dot_template_settings: { 
						strip: false,
						varname: 'it'
					}
				},
				files: [{
					expand: true,
					cwd: "src/html/pages/",
					src: "**/*.html",
					dest: "public",
					ext: ".html",
					flatten: false
				}]
			}
		},
		cacheBust: {
			assets: {
				files: [{   
					expand: true,
					cwd: 'public/',
					baseDir: 'public/',
					src: ['**/*.html']
				}]
			} 
		},
		/**
		ops
		*/
		wiredep: {
			task: {
				src: [
				'public/**/*.html',   // .html support...
				//'app/views/**/*.jade',   // .jade support...
				//'app/styles/main.scss',  // .scss & .sass support...
				//'app/config.yml'         // and .yml & .yaml support out of the box!
				],
				options: {
					devDependencies: true
				}
			}
		},
		real_favicon: {
			my_icon: {
				src: 'src/favicon/favicon.png',
				dest: 'public/assets/favicons',
				icons_path: '/assets/favicons',
				html: ['src/html/partials/head.html'],
				design: {
					ios: {
						//picture_aspect: 'background_and_margin',
						//background_color: '#654321',
						//margin: 4
					},
					windows: {
						//picture_aspect: 'white_silhouette',
						//background_color: '#123456'
					}
				},
				settings: {
					compression: 5,
					scaling_algorithm: 'NearestNeighbor'
				}
			}
		},
		"bower-install-simple": {
	        options: {
	            color: true,
	            directory: "./lib"
	        },
	        dev: {
	            options: {
	                production: false
	            }
	        }
	    },
		exec: {
			styleguide: {
				command: 'start gulp watch &'
			}
		},
		watch:{
			css:{
				files: ['src/scss/**/*.scss'],
			    tasks: ['sass:dist'],
			    options: {
			      spawn: false,
			    },
			},
			js:{
				files: ['./src/js/**/*.js'],
			    tasks: ['newer:browserify:babel'],
			    options: {
			      spawn: false,
			    },
			},
			html:{
				files: ['./src/html/**/*.html'],
			    tasks: ['newer:zetzer','wiredep'],
			    options: {
			      spawn: false,
			    },
			},
			favicon:{
				files: ['./src/favicon/*.*'],
			    tasks: ['real_favicon'],
			    options: {
			      spawn: false,
			    }
			}
		},
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			watch: {
				tasks: ["watch:css", 
						"watch:js", 
						"watch:html",
						"watch:favicon"]
			}
		}
	};

	grunt.initConfig(conf);
	require('jit-grunt')(grunt);
	
	/**
	registerTask handled from app_config file
	allows for yeoman integration
	*/
	var config_tasks = {
		"build":['copy','newer:bower-install-simple','real_favicon','newer:modernizr','sass:dist','newer:browserify:babel','newer:zetzer','wiredep']
	};
	function _regsiterConfigTasks(name,section){
		if(!!section){
			var arr = [];
			for(var key in section.tasks) {
				if(section.tasks[key]) {
					arr.push(key);
					if(typeof section.tasks[key] !== "boolean") grunt.loadNpmTasks(section.tasks[key].package);
				}
			}
			if(arr.length > 0) {
				grunt.registerTask(name, arr);
				config_tasks[section.runOn].push(name);
			}
		};
	};
	for(var section in app_config){
		var obj = app_config[section];
		_regsiterConfigTasks(section,app_config[section]);
	};

	/**
	load standalone task
	*/
    grunt.loadNpmTasks("grunt-asset-cachebuster");

    grunt.registerTask('build', config_tasks['build']);
    grunt.registerTask('default', ['build','connect','concurrent:watch']);
};
