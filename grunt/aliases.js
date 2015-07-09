module.exports = function (grunt,data) {

    //server
    if(data.server) grunt.registerTask('server', ['connect','watch']);
    //es6
    if(data.es6) {
        grunt.registerTask('es6', [data.es6, 'browserify:'+data.es6]);
    }
};