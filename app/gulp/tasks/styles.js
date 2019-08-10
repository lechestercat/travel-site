const gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import');

// Compile CSS file:
function style() {
  // 1. Where is my css file:
  return (
    gulp
      .src('./app/assets/styles/styles.css')
      // 2. Pass that file through sass compiler
      .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
      // 3. Where do I save the compiled CSS?
      .pipe(gulp.dest('./app/temp/styles'))
  );
}
