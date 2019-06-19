module.exports = function (grunt) {

    //Project Configuration
    grunt.initConfig({
        // package.json as guide for installed libraries
        pkg: grunt.file.readJSON('package.json'),
        // less configuration and pre-processing instructions
        less: {
            development: {
                options: {
                    paths: 'public/css/'
                },
                files: {
                    'public/css/css-myalbums.css': 'public/css/less-myalbums.less',
                    'public/css/css-index.css': 'public/css/less-index.less',
                    'public/css/css-login.css': 'public/css/less-login.less'
                }
            }
        },
        // cssmin configuration for minifying the css files into one css file.
        cssmin: {
            target: {
                src: ['public/css/css-index.css', 'public/css/css-login.css', 'public/css/css-myalbums.css'],
                dest: 'public/styles-min.css'
            }
        },
        // uglify configuration for compressing the js files into one js file.
        uglify: {
            mytarget: {
                files: {
                    'public/scripts-min.js': ['public/functions/get-myalbums.js', 'public/functions/load-myalbums.js', 'public/functions/validation.js']
                }
            }
        },
        // watcher mechanism for changes in css/less files
        watch: {
            less: {
                files: ['public/css/*.less'],
                tasks: ['less', 'cssmin']
            }
        }
    });

    // Load npm tasks

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');

    // Default task
    grunt.registerTask('default', ['less', 'cssmin', 'uglify']);
    grunt.registerTask('develop', ['less', 'cssmin', 'uglify', 'watch']);
};