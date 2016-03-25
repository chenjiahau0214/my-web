'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    './lib/person.js': './src/person.es6'
                }
            }
        }
    });

    grunt.registerTask('default', ['babel']);
};
