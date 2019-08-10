const gulp = require('gulp'),
  //watch = require('gulp-watch'),   //You don't want to use it anymore as you will use the method from gulp package called: gulp.watch
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import'),
  plumber = require('gulp-plumber'),
  browserSync = require('browser-sync').create(),
  mixins = require('postcss-mixins');

// Refresh HTML file:
function html() {
  browserSync.reload();
}

// Compile and stream CSS file:
function style() {
  // 1. Where is my css file:
  return (
    gulp
      .src('./app/assets/styles/styles.css')
      .pipe(plumber())
      // 2. Pass that file through sass compiler
      .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
      // 3. Where do I save the compiled CSS?
      .pipe(gulp.dest('./app/temp/styles'))
      // 4. Stream changes to all browser:
      .pipe(browserSync.stream())
  );
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
  gulp.watch('./app/assets/styles/**/*.css', style);
}

exports.html = html;
exports.style = style;
exports.watch = watch;
