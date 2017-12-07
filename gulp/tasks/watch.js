var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	watch('./app/index.html', function(){
		browserSync.reload();
	});
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('css-inject');
	});
	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	});
});


gulp.task('css-inject', ['styles'], function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh',['scripts'], function() {
	browserSync.reload();
})
