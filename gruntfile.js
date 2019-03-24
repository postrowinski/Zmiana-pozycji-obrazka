module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                outputStyle: 'compressed'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'scss/',
                    src: ['**/*.scss'],
                    dest: 'style/',
                    ext: '.css'
                }]
            }
        },

        autoprefixer:{
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            multiple_files: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'style/*.css',
                    dest: 'style'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['scss/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false,
                },
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'style/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }

    });
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'autoprefixer', 'browserSync', 'watch']);
};
