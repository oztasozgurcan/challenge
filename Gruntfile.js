module.exports = function(grunt){

    //Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            files: {
                'public/css/css-myalbums.css': 'public/css/less-layout.less'
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
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    // Load npm tasks

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task
    grunt.registerTask('default', ['less', 'cssmin', 'jshint']);
};