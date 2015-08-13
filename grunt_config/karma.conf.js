// Karma configuration
// Generated on Fri Feb 07 2014 14:05:52 GMT+0000 (GMT Standard Time)

module.exports = function(config) {
    config.set({

        basePath: '../',
        frameworks: ['browserify', 'jasmine'],

        files: [
            'src/js/**/*.js','lib/components/js.ajax/*.js'
        ],

        exclude: [
        ],

        reporters: ['progress'],
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        browsers: ['PhantomJS'],
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        preprocessors: {
            'src/js/**/*.js': ['browserify'],
            'lib/components/js.ajax/*.js' : ['browserify']
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        },
    });
};