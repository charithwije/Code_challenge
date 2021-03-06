module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    keepalive: true,
                    port: 9002,
                    base: 'dist',
                    hostname: 'localhost'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default',['connect:server']);
};

