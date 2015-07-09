module.exports = {
	base: {
        src: ['./<%= paths.src.root %>/js/webworkers/worker.ts'],
        dest: './<%= paths.dest.root %>/assets/js/webworkers/worker.js',
        options: {
            module: 'commonjs',
            target: 'es5'
        }
    }
};