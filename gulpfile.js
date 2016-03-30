var gulp = require("gulp"),
		amdOptimize = require("amd-optimize"),
		concat = require("gulp-concat"),
		uglify = require("gulp-uglify"),
		jshint = require("gulp-jshint");

gulp.task("default", ["build"]);

gulp.task("build", ["js", "css", "img", "lib", "html"]);

gulp.task("js", function() {
	gulp.src(["src/main.js", "src/components/**/*.js"], { base: "src" })
			.pipe(jshint(".jshintrc"))
			.pipe(jshint.reporter("default"))
			.pipe(amdOptimize("main",
					{
						configFile: "configs/config.js",
						baseUrl: "components"
					}))
			.pipe(concat("main.js"))
			.pipe(uglify())
			.pipe(gulp.dest("build/src"));
});

gulp.task("css", function() {
	gulp.src("assets/css/**")
			.pipe(gulp.dest("build/assets/css"));
});

gulp.task("img", function() {
	gulp.src("assets/img/**")
			.pipe(gulp.dest("build/assets"));
});

gulp.task("lib", function() {
	gulp.src("node_modules/phaser/build/phaser.min.js")
			.pipe(gulp.dest("build/lib"));
	gulp.src("node_modules/requirejs/require.js")
			.pipe(gulp.dest("build/lib"));
});

gulp.task("html", function() {
	gulp.src("index.html")
			.pipe(gulp.dest("build"));
});