module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: 'src/**/*.css',
                dest: 'style.css'
            },
            vendor_js: {
                src: ['bower_components/angular/angular.min.js','bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'],
                dest: 'vendor.js'
            },
            index: {
                src: 'src/index.html',
                dest: 'index.html',
                options: {
                    process: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat']);

};