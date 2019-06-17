    module.exports = function(grunt){

        require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

        //Project Configuration
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            cssmin: {
                target: {
                    src : ['style/css-index.css', 'style/css-login.css', 'style/css-myalbums.css'],
                    dest: 'styles.min.css'
                }
            },
            uglify: {
                options: {
                    compress: true
                },
                applib: {
                    src: [
                        'routes/index.js',
                        'routes/login.js',
                        'routes/myalbums.js',
                        'models/User.js',
                        'config/passport.js'
                    ],
                    dest: 'applib.js'
                }
            }
        });

        // Default task
        grunt.registerTask('default', ['uglify','cssmin']);
    };