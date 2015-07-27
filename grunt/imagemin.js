module.exports = {
	dynamic: {                       
		options: {                      
		optimizationLevel: 1
		},
		files: [{
			expand: true,
			cwd: '<%= paths.src.root %>/images/', 
			src: ['**.{png,jpg,gif}'], 
			dest: '<%= paths.dest.root %>/assets/images/', 
		},{
			expand: true,
			cwd: '<%= paths.src.root %>/scss/images/', 
			src: ['**.{png,jpg,gif}'], 
			dest: '<%= paths.dest.root %>/assets/css/images/', 
		}]
	}
};