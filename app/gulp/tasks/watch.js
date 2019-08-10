const gulp = require('gulp'),
  browserSync = require('browser-sync').create();

// Refresh HTML file:
function html() {
  browserSync.reload();
}

// Watcher:
function watch() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });
  gulp.watch('./app/*.html').on('change', html);
  gulp.watch('./app/assets/styles/**/*.css', gulp.series(style, cssInject));
}

// Inject (stream) CSS file:
function cssInject() {
  return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
}
