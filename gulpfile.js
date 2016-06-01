var gulp = require("gulp"),
		concat = require("gulp-concat"),
		uglify = require("gulp-uglify"),
		jshint = require("gulp-jshint"),
		htmlReplace = require("gulp-html-replace"),
		requirejsOptimize = require("gulp-requirejs-optimize");

gulp.task("default", ["build"]);

gulp.task("build", ["jshint", "css", "img", "lib", "html", "js"]);

gulp.task("jshint", function() {
	gulp.src("src/**/*.js")
			.pipe(jshint(".jshintrc"))
			.pipe(jshint.reporter("default"));
});

gulp.task("css", function() {
	gulp.src("assets/css/**")
			.pipe(gulp.dest("build/assets/css"));
});

gulp.task("img", function() {
	gulp.src("assets/img/**")
			.pipe(gulp.dest("build/assets/img"));
});

gulp.task("lib", function() {
	gulp.src("node_modules/phaser/build/phaser.min.js")
			.pipe(gulp.dest("build/lib"));
	gulp.src("node_modules/requirejs/require.js")
			.pipe(gulp.dest("build/lib"));
});

gulp.task("html", function() {
	gulp.src("index.html")
			.pipe(htmlReplace({
				"requirejs": "lib/require.js"
			}))
			.pipe(gulp.dest("build"));
});

gulp.task("js", function() {
	gulp.src("src/main.js")
			.pipe(requirejsOptimize({
					mainConfigFile: "src/config/config.js"
				}))
			.pipe(concat("main.js"))
			.pipe(uglify())
			.pipe(gulp.dest("build/src"));
});