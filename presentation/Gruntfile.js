/* global module:false */
module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner:
				'/*!\n' +
				' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
				' * http://lab.hakim.se/reveal-js\n' +
				' * MIT licensed\n' +
				' *\n' +
				' * Copyright (C) 2014 Hakim El Hattab, http://hakim.se\n' +
				' */'
		},
		connect: {
			server: {
				options: {
					port: 7000,
					base: '.',
					keepalive: true
				}
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// Default task
	grunt.registerTask( 'default', [ 'connect'] );
};
