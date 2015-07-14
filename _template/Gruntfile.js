module.exports = function(grunt) {

	var data = {
		pkg: grunt.file.readJSON('package.json')
	};

    require('load-grunt-config')(grunt,{data: data});
};
