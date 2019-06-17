module.exports = function(grunt){

    //Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                options:{
                    paths: 'public/css/'
                },
                files: {
                    'public/css/css-myalbums.css': 'public/css/less-layout.less'
                }
            }
        },
        cssmin: {
            target: {
                src : ['public/css/css-index.css', 'public/css/css-login.css', 'public/css/css-myalbums.css'],
                dest: 'public/styles-min.css'
            }
            },
        jshint: {
            // define the files to lint
            files: ['Gruntfile.js', 'src/**/*.js']
        },
        watch: {
            jshint: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            },
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
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task
    grunt.registerTask('default', ['less', 'cssmin', 'jshint', 'watch']);
};