module.exports = {
	allFiles: [
		'<%= paths.src.root %>/scss'
	],
	options: {
		bundleExec: false,
		config: '.scss-lint.yml',
		reporterOutput: null
	}
}