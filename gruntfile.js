module.exports = function(grunt) {
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: ['src/sass/main.scss','src/sass/**/*.scss'],
				tasks: ['sass:dist', 'autoprefixer:dist']
			},
			livereload: {
				files: ['dist/*.html', 'src/js/*.js', 'dist/css/*.css','dist/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
				options: {
					livereload: true
				}
			},
			scripts: {
				files: ['src/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
			images:{
				files: ['src/img/**/*.{png,jpg,gif,svg}'],
				tasks:['imagemin'],
				options: {
					spawn: false,
					cache: false
				},
			},
		},
		sass: {
			options: {
				sourceMap: false,
				outputStyle: 'compressed'
				//outputStyle: 'compact'
			},
			dist: {
				files: {
					'src/css/unprefixed.css': 'src/sass/main.scss'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: [
				  'last 2 version',
				  'safari 6',
				  'ie 9',
				  'ios 6',
				  'android 4'
				]
			},
			dist: {
				src: 'src/css/unprefixed.css',
				dest: 'dist/css/app.css'
			},
		  },
		concat: {
			dist: {
				src: [
					'src/js/plugins.js',
					'src/js/main.js'
				],
				dest: 'dist/js/app.js',
			}
		},
		uglify: {
			build: {
				src: 'dist/js/app.js',
				dest: 'dist/js/app.min.js'
			}
		},
		imagemin: {
			dynamic: {
				png:{
					options: {
						optimizationLevel: 4
				  }
				},
				jpg:{
					options: {
						progressive: true
				  }
				},
				svg:{
					options: {
						svgoPlugins: [{ removeViewBox: false }],
					},
				},
				files: [{
					expand: true,
					cwd: 'src/img/',
					src: ['**/*.{png,jpg,gif,svg}'],
					dest: 'dist/img/'
				}]
			}
		},
		newer:{
			options:{
				tolerance: 1000
			}
		},
		concurrent: {
			target1: ['newer:sass:dist', 'newer:concat'],
			target2: [ 'newer:autoprefixer:dist', 'newer:uglify', 'newer:imagemin']
		},
		copy: {
			main:{
				files: [
					{
						expand: true,
						flatten: true,
						src: 'src/modernizr/*',
						dest: 'dist/js/vendor/'
					},
					{
						expand: true,
						flatten: true,
						src: 'bower_components/jquery/dist/jquery.min.js',
						dest: 'dist/js/vendor/'
					},
					{
						expand: true,
						flatten: true,
						src: 'src/favicon/*',
						dest: 'dist/'
					},
					{
						expand: true,
						flatten: true,
						src: 'src/fonts/*',
						dest: 'dist/fonts/'
					},
				],
			},
		}
	});
	
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	grunt.registerTask('default', ['concurrent:target1', 'concurrent:target2', 'watch']);
};
