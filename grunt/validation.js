module.exports = {
	options: {
        reset: false,
        stoponerror: false,
        reportpath: false,
        path: 'docs/html_validation_status.json',
        relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.','Consider using the h1 element as a top-level heading only']
    },
    files: {
        src: ['<%= paths.dest.root %>/*.html']
    }
};