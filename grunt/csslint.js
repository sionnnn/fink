module.exports = {
	options: {
        force: true
    },
    lax: {
        options: {
            force: true,
            import: false,
            csslintrc: 'rules.csslintrc'
        },
        src: ['<%= paths.dest.root %>/assets/css/site.css']
    }
};