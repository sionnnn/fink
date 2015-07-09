module.exports = {
	dist : {
        src: ['<%= paths.dest.root %>/assets/js/**/*'], 
        options: {
            destination: 'docs/jsdoc'
        }
    }
};