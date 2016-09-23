
// Grunt is the task runner and used to deployment task on a node server. So it can be run on the local machine.
module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    keepalive:true,
                    port: 9000,
                    base: 'dist',
                    hostname: 'localhost'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-serve');
    grunt.registerTask('default', ['connect:server']);
};


